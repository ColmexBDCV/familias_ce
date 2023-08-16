import csv
import json
import random

#data = pd.read_csv("familias.csv", delimiter = ',')
#total = data.
with open("familias.csv") as data:
    header = next(data)
    reader = csv.reader(data)
    root = {"id": 1, "label": "'" + 'Casa de España' + "'","shape": "'box'", "link":"'https://datom.colmex.mx/index.php/la-casa-de-espana-en-mexico'"}
    list_nodes = []
    edges_nodes = []
    group_color = {}
    list_nodes.append(root.copy())
    count = 1
    count_tmp = 0
    is_row_5 = False
    for row in reader:
        if row[0] == "":
            if row[5] != "":
                label = row[5].replace(" ", "\n")
                if is_row_5:
                    new_level = {"id": count + 1, "label": "'" + label + "'",  "group": count_tmp - 1, "shape": "'box'", "x":"300", "y":"-300", "link":"'"+row[7]+"'"}
                    new_edge = {"from": count_tmp - 1, "to": count + 1,  "label": "'" + row[6] + "'"}
                    list_nodes.append(new_level.copy())
                    edges_nodes.append(new_edge.copy())
                else:
                    new_level = {"id": count + 1, "label": "'" + label + "'",  "group": count_tmp, "shape": "'box'", "x":"300", "y":"-300", "link":"'"+row[7]+"'"}
                    new_edge = {"from": count_tmp, "to": count + 1, "label": "'" + row[6] + "'"}
                    list_nodes.append(new_level.copy())
                    edges_nodes.append(new_edge.copy())
                count+=1
        else:
            label = row[0].replace(" ", "\n")
            new_level = {"id": count + 1, "label": "'" + label + "'",  "group": count + 1, "shape": "'box'", "x":"300", "y":"-300", "link":"'"+row[1]+"'" }
            new_edge = {"from": 1, "to": count + 1, "label": "'Invitado'"}
            list_nodes.append(new_level.copy())
            edges_nodes.append(new_edge.copy())
            r = lambda: random.randint(0,255)
            group_color['|%s|' %(count+1)] = {'|color|': '#%02X%02X%02X'% (r(),r(),r())} 
            #print('group' + str(count + 1) + ': #%02X%02X%02X' % (r(),r(),r()))
            if(row[5] != ""):
                label = row[5].replace(" ", "\n")
                new_level = {"id": count + 2, "label": "'" + label + "'",  "group": count + 1, "shape": "'box'", "x":"300", "y":"-300", "link":"'"+row[7]+"'"}
                new_edge = {"from": count + 1, "to": count + 2,  "label": "'" + row[6] + "'"}
                list_nodes.append(new_level.copy())
                edges_nodes.append(new_edge.copy())
                is_row_5 = True
                count+=1
            else:
                is_row_5 = False
            count+=1
            count_tmp = count
    json_nodes = json.dumps(list_nodes, indent = 4)
    json_edges = json.dumps(edges_nodes, indent = 4)
    json_group = json.dumps(group_color, indent = 4)
    json_nodes = json_nodes.replace('"', "")
    json_edges = json_edges.replace('"', "")
    json_group = json_group.replace('"|','')
    json_group = json_group.replace('|"','')

    nodes_file = open("nodes.js", "w")
    nodes_file.write("var nodes = " + json_nodes + "; export {nodes};")
    nodes_file.close()
    edges_file = open("edges.js", "w")
    edges_file.write("var edges = " + json_edges + "; export {edges};")
    edges_file.close()
    group_file = open("group.js", "w")
    group_file.write("var group = " + json_group + "; export {group};")
    group_file.close()

            #{
             #   id: 10,
              #  label: "192.168.0.10",
               # group: "server",
                #value: 10,
            #}

            #{
                #from: 1,
                #to: 10,
                #length: LENGTH_SERVER,
                #color: GRAY,
                #width: WIDTH_SCALE * 6,
                #label: "0.92 mbps",
            #}