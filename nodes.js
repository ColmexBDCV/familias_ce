var nodes = [
    {
        id: 1,
        label: 'Casa de Espa\u00f1a',
        shape: 'box',
        link: 'https://archivos.colmex.mx/index.php/la-casa-de-espana-en-mexico'
    },
    {
        id: 2,
        label: 'Albornoz,\n\u00c1lvaro\nde',
        group: 2,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/albornoz-alvaro-de'
    },
    {
        id: 3,
        label: 'Salas\nAbella-Fuertes,\nAmalia',
        group: 2,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/salas-abella-fuertes-amalia'
    },
    {
        id: 4,
        label: 'Albornoz\u00a0Salas,\nConcepci\u00f3n',
        group: 2,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/albornoz-salas-concepcion'
    },
    {
        id: 5,
        label: 'Albornoz\u00a0Salas,\n\u00c1lvaro\nde',
        group: 2,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/albornoz-salas-alvaro-de'
    },
    {
        id: 6,
        label: 'Albornoz\nde\nla\nEscosura,\nAlvaro\nde',
        group: 2,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/albornoz-de-la-escosura-alvaro-de'
    },
    {
        id: 7,
        label: 'Albornoz\nde\nla\nEscosura,\nCarmen',
        group: 2,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/albornoz-de-la-escosura-carmen'
    },
    {
        id: 8,
        label: 'Escosura\nBeckar,\nAraceli\nde\nla',
        group: 2,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/escosura-beckar-araceli-de-la'
    },
    {
        id: 9,
        label: 'Barn\u00e9s\nSalinas,\nFrancisco',
        group: 9,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/barnes-salinas-francisco'
    },
    {
        id: 10,
        label: 'Gonz\u00e1lez\nde\nla\nCalle,\nDorotea\n',
        group: 9,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/gonzalez-de-la-calle-dorotea'
    },
    {
        id: 11,
        label: 'Barn\u00e9s\nGonz\u00e1lez,\nAdela\n',
        group: 9,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/barnes-gonzalez-adela'
    },
    {
        id: 12,
        label: 'Garc\u00eda\nGarc\u00eda,\nGerm\u00e1n\n',
        group: 9,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/garcia-garcia-german'
    },
    {
        id: 13,
        label: 'Barn\u00e9s\nGonzalez,\nUrbano',
        group: 9,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/barnes-gonzalez-urbano'
    },
    {
        id: 14,
        label: 'Castro\nBravo,\nMar\u00eda\nLuisa\nde\n',
        group: 9,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/castro-bravo-maria-luisa-de'
    },
    {
        id: 15,
        label: 'Barn\u00e9s\nCastro,\nMar\u00eda\nLuisa\nDorotea\n',
        group: 9,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/barnes-castro-maria-luisa-dorotea'
    },
    {
        id: 16,
        label: 'Barn\u00e9s\nGonz\u00e1lez,\nPetra\n',
        group: 9,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/barnes-gonzalez-petra'
    },
    {
        id: 17,
        label: 'Barn\u00e9s\nSalinas,\nDomingo',
        group: 9,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/barnes-salinas-domingo'
    },
    {
        id: 18,
        label: 'Gonz\u00e1lez\nde\nla\nCalle,\nPedro\nUrbano',
        group: 9,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/gonzalez-de-la-calle-pedro-urbano'
    },
    {
        id: 19,
        label: 'Bol\u00edvar,\nIgnacio',
        group: 19,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/bolivar-y-urrutia-ignacio'
    },
    {
        id: 20,
        label: 'Pieltain\nBartoli\nde\nBol\u00edvar,\nFermina\n',
        group: 19,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/pieltain-bartoli-fermina'
    },
    {
        id: 21,
        label: 'Bol\u00edvar\nPieltain,\nAna\nMar\u00eda',
        group: 19,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/bolivar-pieltain-ana-maria'
    },
    {
        id: 22,
        label: 'Bol\u00edvar\nPieltain,\nPilar\n',
        group: 19,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/bolivar-pieltain-pilar'
    },
    {
        id: 23,
        label: 'Tapia\nBol\u00edvar,\nAlma\n',
        group: 19,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/tapia-bolivar-alma'
    },
    {
        id: 24,
        label: 'Tapia\nBol\u00edvar,\nDaniel',
        group: 19,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/tapia-bolivar-daniel'
    },
    {
        id: 25,
        label: 'Bol\u00edvar\nPieltain,\nC\u00e1ndido\n',
        group: 19,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/bolivar-pieltain-candido'
    },
    {
        id: 26,
        label: 'Goyanes\nEchegoyen,\nAmelia\n',
        group: 19,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/goyanes-echegoyen-amelia'
    },
    {
        id: 27,
        label: 'Bol\u00edvar\nGoyanes,\nIgnacio',
        group: 19,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/bolivar-goyanes-jose-ignacio'
    },
    {
        id: 28,
        label: 'Pel\u00e1ez\nFern\u00e1ndez,\nDionisio',
        group: 19,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/pelaez-fernandez-dionisio'
    },
    {
        id: 29,
        label: 'Buen\nLozano,\nFernando\nde',
        group: 29,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/buen-lozano-fernando-de'
    },
    {
        id: 30,
        label: 'Buen\u00a0L\u00f3pez\nde\nHeredia,\nMar\u00eda\ndel\nCarmen\nde',
        group: 29,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/buen-lopez-de-heredia-maria-del-carmen-de'
    },
    {
        id: 31,
        label: 'Buen\u00a0L\u00f3pez\nde\nHeredia,\nSadi',
        group: 29,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/buen-lopez-de-heredia-sadi-de'
    },
    {
        id: 32,
        label: 'L\u00f3pez\u00a0de\u00a0Heredia,\u00a0Berta',
        group: 29,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/lopez-de-heredia-berta'
    },
    {
        id: 33,
        label: 'Bal\ny\nGay,\nJes\u00fas',
        group: 33,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/bal-y-gay-jesus'
    },
    {
        id: 34,
        label: 'Garc\u00eda\nAscot,\nRosa',
        group: 33,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/garcia-ascot-rosa'
    },
    {
        id: 35,
        label: 'Garc\u00eda\nAscot,\nFelipe',
        group: 33,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/garcia-ascot-felipe'
    },
    {
        id: 36,
        label: 'Fern\u00e1ndez\nMartini,\nMar\u00eda\nLuisa\n',
        group: 33,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/fernandez-martini-maria-luisa'
    },
    {
        id: 37,
        label: 'Garc\u00eda\nAscot\nFern\u00e1ndez,\nJos\u00e9\nMiguel\n',
        group: 33,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/garcia-ascot-jomi'
    },
    {
        id: 38,
        label: 'Garc\u00eda\nAscot,\nMiguel',
        group: 33,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/garcia-ascot-miguel'
    },
    {
        id: 39,
        label: 'Garc\u00eda\nAscot,\nBlandino',
        group: 33,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/garcia-ascot-blandino'
    },
    {
        id: 40,
        label: 'Saiz\nde\nGarc\u00eda\nAscot,\nPilar',
        group: 33,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/saiz-de-garcia-ascot-pilar'
    },
    {
        id: 41,
        label: 'Garc\u00eda\nObispo,\nBlandino',
        group: 33,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/garcia-obispo-blandino'
    },
    {
        id: 42,
        label: 'Ascot\nPorcar,\nRosa',
        group: 33,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/ascot-porcar-rosa'
    },
    {
        id: 43,
        label: 'Cabrera\nS\u00e1nchez,\nBlas',
        group: 43,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/cabrera-sanchez-blas'
    },
    {
        id: 44,
        label: 'Muedra\nBenedito,\nMar\u00eda\nTeresa',
        group: 43,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/muedra-benedito-maria-teresa'
    },
    {
        id: 45,
        label: 'Cabrera,\nBlas',
        group: 43,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/cabrera-blas'
    },
    {
        id: 46,
        label: 'S\u00e1nchez\nReal,\nMar\u00eda',
        group: 43,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/sanchez-real-maria'
    },
    {
        id: 47,
        label: 'Muedra\nBenedito,\nConcepci\u00f3n',
        group: 43,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/muedra-benedito-concha'
    },
    {
        id: 48,
        label: 'Carner,\nJosep',
        group: 48,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/carner-josep'
    },
    {
        id: 49,
        label: 'Noulet,\n\u00c9milie\n',
        group: 48,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/noulet-emilie'
    },
    {
        id: 50,
        label: 'Carner\u00a0de\nOssa,\nJos\u00e9',
        group: 48,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/carner-de-ossa-jose'
    },
    {
        id: 51,
        label: 'Carrasco\u00a0Garrorena,\u00a0Pedro',
        group: 51,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/carrasco-garrorena-pedro'
    },
    {
        id: 52,
        label: 'Pizana\nLac\u00e1rcel,\nMagdalena',
        group: 51,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/pizana-lacarcel-magdalena'
    },
    {
        id: 53,
        label: 'Carrasco\u00a0Pizana,\nPedro\u00a0',
        group: 51,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/carrasco-pizana-pedro'
    },
    {
        id: 54,
        label: 'Carrasco\nFormiguera,\nRosendo',
        group: 54,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/carrasco-formiguera-rosendo'
    },
    {
        id: 55,
        label: 'Vidaurre\ny\nSatostegui,\nNemesia',
        group: 54,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/vidaurre-y-satostegui-nemesia'
    },
    {
        id: 56,
        label: 'Carrasco\nGranados,\nJos\u00e9\nOriol',
        group: 54,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/carrasco-granados-jose-oriol'
    },
    {
        id: 57,
        label: 'Carrasco\nGranados,\nRosario',
        group: 54,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/carrasco-granados-rosario'
    },
    {
        id: 58,
        label: 'Carrasco\nGranados,\nMonserrat',
        group: 54,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/carrasco-granados-monserrat'
    },
    {
        id: 59,
        label: 'Carrasco\nGranados,\nMar\u00eda\nAntonia',
        group: 54,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/carrasco-granados-maria-antonia'
    },
    {
        id: 60,
        label: 'Carrasco\nGranados,\nLuis',
        group: 54,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/carrasco-granados-luis'
    },
    {
        id: 61,
        label: 'Castrovido,\nRoberto',
        group: 61,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/castrovido-roberto'
    },
    {
        id: 62,
        label: 'Gil\nde\nCastrovido,\nPilar\n',
        group: 61,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/gil-de-castrovido-pilar'
    },
    {
        id: 63,
        label: 'Castrovido\nGil,\nRoberto\n',
        group: 61,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/castrovido-gil-roberto'
    },
    {
        id: 64,
        label: 'G\u00f3ngora\nRegueiro,\nAmparo',
        group: 61,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/gongora-regueiro-amparo'
    },
    {
        id: 65,
        label: 'Castrovido\nG\u00f3ngora,\nAmparo',
        group: 61,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/castrovido-gongora-amparo'
    },
    {
        id: 66,
        label: 'Castrovido\nGil,\nPilar',
        group: 61,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/castrovido-gil-pilar'
    },
    {
        id: 67,
        label: 'Costero,\nIsaac',
        group: 67,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/costero-isaac'
    },
    {
        id: 68,
        label: 'Gracia\nCitoler,\nCarmen',
        group: 67,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/gracia-citoler-carmen'
    },
    {
        id: 69,
        label: 'Costero\nGracia,\nRafael',
        group: 67,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/costero-gracia-jose-luis'
    },
    {
        id: 70,
        label: 'Costero\nGracia,\nMargarita',
        group: 67,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/costero-gracia-margarita'
    },
    {
        id: 71,
        label: 'Comas,\nJuan',
        group: 71,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/comas-juan'
    },
    {
        id: 72,
        label: 'Lago\nGarc\u00eda,\nRegina',
        group: 71,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/lago-garcia-regina'
    },
    {
        id: 73,
        label: 'D\u00edez-Canedo,\nEnrique',
        group: 73,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/diez-canedo-enrique'
    },
    {
        id: 74,
        label: 'Manteca\nOrtiz,\nMaria\nTeresa',
        group: 73,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/manteca-ortiz-maria-teresa'
    },
    {
        id: 75,
        label: 'D\u00edez-Canedo\nManteca,\nMar\u00eda\nLuisa',
        group: 73,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/diez-canedo-manteca-maria-luisa'
    },
    {
        id: 76,
        label: 'D\u00edez-Canedo\nManteca,\nEnrique',
        group: 73,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/diez-canedo-manteca-enrique'
    },
    {
        id: 77,
        label: 'D\u00edez-Canedo\nManteca,\nJoaqu\u00edn',
        group: 73,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/diez-canedo-joaquin'
    },
    {
        id: 78,
        label: 'D\u00edez-Canedo\nManteca,\nMar\u00eda\nTeresa',
        group: 73,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/diez-canedo-manteca-maria-teresa'
    },
    {
        id: 79,
        label: 'M\u00e1rquez\nBlasco,\nJavier',
        group: 73,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/marquez-javier'
    },
    {
        id: 80,
        label: 'M\u00e1rquez\nD\u00edez-Canedo,\nMar\u00eda\nTeresa',
        group: 73,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/marquez-diez-canedo-maria-teresa'
    },
    {
        id: 81,
        label: 'Domenchina,\nJuan\nJos\u00e9',
        group: 81,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/domenchina-juan-jose'
    },
    {
        id: 82,
        label: 'Champourcin,\nErnestina\nde',
        group: 81,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/champourcin-ernestina-de'
    },
    {
        id: 83,
        label: 'Moreu\nBatlle,\nEncarnaci\u00f3n\n',
        group: 81,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/moreu-batlle-encarnacion'
    },
    {
        id: 84,
        label: 'Domenchina\nMoreau,\nMercedes',
        group: 81,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/domenchina-moreau-mercedes'
    },
    {
        id: 85,
        label: 'Calder\u00f3n\nDomenchina,\nRodrigo',
        group: 81,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/calderon-domenchina-rodrigo'
    },
    {
        id: 86,
        label: 'Calder\u00f3n\nDomenchina,\nEncarnaci\u00f3n',
        group: 81,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/calderon-domenchina-encarnacion'
    },
    {
        id: 87,
        label: 'Fern\u00e1ndez\nMart\u00ednez,\nAgueda',
        group: 87,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/fernandez-martinez-agueda'
    },
    {
        id: 88,
        label: 'Fern\u00e1ndez\nMart\u00ednez,\nMiguel\n\u00c1ngel',
        group: 87,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/fernandez-martinez-miguel-angel'
    },
    {
        id: 89,
        label: 'Gaos,\nJos\u00e9',
        group: 89,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/gaos-jose'
    },
    {
        id: 90,
        label: 'Hern\u00e1ndez\nBarbarros,\nMar\u00eda\nde\nlos\n\u00c1ngeles',
        group: 89,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/hernandez-barbarros-maria-de-los-angeles'
    },
    {
        id: 91,
        label: 'Gaos,\n\u00c1ngeles',
        group: 89,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/gaos-de-camacho-angeles'
    },
    {
        id: 92,
        label: 'Gaos,\nPaloma',
        group: 89,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/gaos-hernandez-paloma'
    },
    {
        id: 93,
        label: 'Gaos\nGonzal\u00e9z-Pola,\nCarlos',
        group: 89,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/gaos-y-gonzalez-pola-carlos'
    },
    {
        id: 94,
        label: 'Agejas\nGuti\u00e9rrez,\nMargarita',
        group: 89,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/agejas-gutierrez-margarita'
    },
    {
        id: 95,
        label: 'Giner\nde\nlos\nR\u00edos\nMorales,\nFrancisco',
        group: 95,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/giner-de-los-rios-morales-francisco'
    },
    {
        id: 96,
        label: 'Giner\nde\nlos\nR\u00edos\nGarc\u00eda,\nBernado',
        group: 95,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/giner-de-los-rios-garcia-bernardo'
    },
    {
        id: 97,
        label: 'D\u00edez-Canedo\nManteca,\nMaria\nLuisa',
        group: 95,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/diez-canedo-manteca-maria-luisa'
    },
    {
        id: 98,
        label: 'Morales\nVeloso,\nElisa',
        group: 95,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/morales-veloso-elisa'
    },
    {
        id: 99,
        label: 'Giner\u00a0de\nlos\u00a0R\u00edos\u00a0Morales,\nManuel',
        group: 95,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/giner-de-los-rios-morales-manuel'
    },
    {
        id: 100,
        label: 'Giner\nde\nlos\nR\u00edos\nMorales,\nElisa',
        group: 95,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/giner-de-los-rios-morales-elisa'
    },
    {
        id: 101,
        label: 'Giner\nde\nlos\nR\u00edos\nMorales,\nConsuelo',
        group: 95,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/giner-de-los-rios-morales-consuelo'
    },
    {
        id: 102,
        label: 'Giral,\nJos\u00e9',
        group: 102,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/giral-jose'
    },
    {
        id: 103,
        label: 'Gonz\u00e1lez\nde\nla\nCalle,\nMaria\nLuisa\n',
        group: 102,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/gonzalez-de-la-calle-maria-luisa'
    },
    {
        id: 104,
        label: 'Giral\nGonz\u00e1lez,\nFrancisco\n',
        group: 102,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/giral-gonzalez-francisco'
    },
    {
        id: 105,
        label: 'Barn\u00e9s\nGonz\u00e1lez,\nPetra',
        group: 102,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/barnes-gonzalez-petra'
    },
    {
        id: 106,
        label: 'Giral\nBarn\u00e9s,\nJos\u00e9',
        group: 102,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/giral-barnes-jose'
    },
    {
        id: 107,
        label: 'Giral\nBarn\u00e9s,\n\u00c1ngela',
        group: 102,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/giral-barnes-angela'
    },
    {
        id: 108,
        label: 'Giral\nGonz\u00e1lez,\nAntonio',
        group: 102,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/giral-gonzalez-antonio'
    },
    {
        id: 109,
        label: 'Giral\nGonz\u00e1lez,\nMar\u00eda\nLuisa',
        group: 102,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/giral-gonzalez-maria-luisa'
    },
    {
        id: 110,
        label: 'Giral\nGonz\u00e1lez,\nMar\u00eda\nConcepci\u00f3n',
        group: 102,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/giral-gonzalez-maria-concepcion'
    },
    {
        id: 111,
        label: 'Jarn\u00e9s\nMillan,\nBenjamin',
        group: 111,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/jarnes-millan-benjamin'
    },
    {
        id: 112,
        label: 'Gregoria\nBergua\nAlastuey',
        group: 111,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/bergua-alastuey-gregoria'
    },
    {
        id: 113,
        label: 'Juan\nde\nla\nEncina',
        group: 113,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/encina-juan-de-la'
    },
    {
        id: 114,
        label: 'Zubiaurre\ny\nAguirrez\u00e1bal,\nPilar\nde',
        group: 113,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/zubiaurre-pilar-de'
    },
    {
        id: 115,
        label: 'Guti\u00e9rrez\nde\nZubiaurre,\nLeopoldo',
        group: 113,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/gutierrez-de-zubiaurre-leopoldo'
    },
    {
        id: 116,
        label: 'Leon\nFelipe',
        group: 116,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/leon-felipe'
    },
    {
        id: 117,
        label: 'Gamboa,\nBertha',
        group: 116,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/gamboa-bertha'
    },
    {
        id: 118,
        label: 'Madinaveitia\nTabuyo,\nAntonio',
        group: 118,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/madinaveitia-tabuyo-antonio'
    },
    {
        id: 119,
        label: 'J\u00fcrgenson\nKiesk,\nWelly',
        group: 118,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/jurgenson-kiesk-welly'
    },
    {
        id: 120,
        label: 'Madinaveitia\nJ\u00fcrgenson,\nCarlos',
        group: 118,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/madinaveitia-jurgenson-carlos'
    },
    {
        id: 121,
        label: 'Madinaveitia\nJ\u00fcrgenson,\nMiguel',
        group: 118,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/madinaveitia-jurgenson-miguel'
    },
    {
        id: 122,
        label: 'Madinaveitia\nJ\u00fcrgenson,\nAntonio',
        group: 118,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/madinaveitia-jurgenson-antonio'
    },
    {
        id: 123,
        label: 'Garc\u00eda\nFern\u00e1ndez,\nAurora',
        group: 118,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/garcia-fernandez-aurora'
    },
    {
        id: 124,
        label: 'Medina\nEchavarr\u00eda,\nJos\u00e9',
        group: 124,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/medina-echavarria-jose'
    },
    {
        id: 125,
        label: 'Rivaud\nVald\u00e9s,\nNieves',
        group: 124,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/rivaud-valdes-nieves'
    },
    {
        id: 126,
        label: 'Vald\u00e9s\nde\nRivaud,\nMar\u00eda\nNieves',
        group: 124,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/valdes-de-rivaud-maria-nieves'
    },
    {
        id: 127,
        label: 'Medina\nRivaud,\nJos\u00e9',
        group: 124,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/medina-rivaud-jose'
    },
    {
        id: 128,
        label: 'M\u00e1rquez\nRodr\u00edguez,\nManuel',
        group: 128,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/marquez-rodriguez-manuel'
    },
    {
        id: 129,
        label: 'Arroyo\nVillaverde,\nTrinidad',
        group: 128,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/arroyo-villaverde-trinidad'
    },
    {
        id: 130,
        label: 'Millares\nCarl\u00f3,\nAgust\u00edn',
        group: 130,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/millares-carlo-agustin'
    },
    {
        id: 131,
        label: 'Millares\nBravo,\nAgust\u00edn',
        group: 130,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/millares-bravo-agustin'
    },
    {
        id: 132,
        label: 'Millares\nBravo,\nMercedes',
        group: 130,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/millares-bravo-mercedes'
    },
    {
        id: 133,
        label: 'Millares\nBravo,\nRosa',
        group: 130,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/millares-bravo-rosa'
    },
    {
        id: 134,
        label: 'Millares\nBravo,\nAsunci\u00f3n',
        group: 130,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/millares-bravo-asuncion'
    },
    {
        id: 135,
        label: 'Bravo\nMart\u00ednez,\nMercedes',
        group: 130,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/bravo-martinez-mercedes'
    },
    {
        id: 136,
        label: 'Hern\u00e1ndez\nMillares,\nJorge',
        group: 130,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/hernandez-millares-jorge'
    },
    {
        id: 137,
        label: 'Nieto\nG\u00f3mez,\nDionisio',
        group: 137,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/nieto-gomez-dionisio'
    },
    {
        id: 138,
        label: 'Vallejo,\nCatalina',
        group: 137,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/vallejo-catalina'
    },
    {
        id: 139,
        label: 'Pi\nSu\u00f1er\nBayo,\nJaime\n',
        group: 139,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/pi-suner-bayo-jaime'
    },
    {
        id: 140,
        label: 'Pi\nSu\u00f1er,\nAugusto',
        group: 139,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/pi-suner-augusto'
    },
    {
        id: 141,
        label: 'Bayo,\nCarme',
        group: 139,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/bayo-carmen'
    },
    {
        id: 142,
        label: 'D\u00edaz\nBonet,\nMercedes',
        group: 139,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/diaz-bonet-mercedes'
    },
    {
        id: 143,
        label: 'Pi\nSu\u00f1er\nBayo,\nCesar\n',
        group: 139,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/pi-suner-bayo-cesar'
    },
    {
        id: 144,
        label: 'Llorens\nMateu,\nTrinidad',
        group: 139,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/llorens-mateu-trinidad'
    },
    {
        id: 145,
        label: 'Romeo\nLozano,\nAurelio',
        group: 145,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/romeo-lozano-aurelio'
    },
    {
        id: 146,
        label: 'Valle,\nIsidora\ndel\n',
        group: 145,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/valle-isidora-del'
    },
    {
        id: 147,
        label: 'Romeo\ndel\nValle,\nCarmen',
        group: 145,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/romeo-del-valle-carmen'
    },
    {
        id: 148,
        label: 'Romeo\ndel\nValle,\nPilar',
        group: 145,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/romeo-del-valle-pilar'
    },
    {
        id: 149,
        label: 'Romeo\ndel\nValle,\nJulio',
        group: 145,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/romeo-del-valle-julio'
    },
    {
        id: 150,
        label: 'Romeo\ndel\nValle,\nLuis',
        group: 145,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/romeo-del-valle-luis'
    },
    {
        id: 151,
        label: 'Romeo\ndel\nValle,\nAurelio',
        group: 145,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/romeo-del-valle-aurelio'
    },
    {
        id: 152,
        label: 'Rodr\u00edguez\nde\nRomeo,\nMar\u00eda\nTeresa',
        group: 145,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/rodriguez-de-romeo-maria-teresa'
    },
    {
        id: 153,
        label: 'Recasens\nSiches,\nLuis',
        group: 153,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/recasens-siches-luis'
    },
    {
        id: 154,
        label: 'Siches\nGils,\nConcepci\u00f3n',
        group: 153,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/siches-gils-concepcion'
    },
    {
        id: 155,
        label: 'Rioja\nLo-Bianco,\nEnrique',
        group: 155,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/rioja-lo-bianco-enrique'
    },
    {
        id: 156,
        label: 'Goicoa,\nCarmen',
        group: 155,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/goicoa-carmen'
    },
    {
        id: 157,
        label: 'Riba,\nCarles',
        group: 157,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/riba-carles'
    },
    {
        id: 158,
        label: 'Arderiu,\nClementina',
        group: 157,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/arderiu-clementina'
    },
    {
        id: 159,
        label: 'Riba\nArderiu,\nJorge',
        group: 157,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/riba-arderiu-jorge'
    },
    {
        id: 160,
        label: 'Riba\nArderiu,\nOriol',
        group: 157,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/riba-arderiu-oriol'
    },
    {
        id: 161,
        label: 'Riba\nArderiu,\nEulalia',
        group: 157,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/riba-arderiu-eulalia'
    },
    {
        id: 162,
        label: 'Roura-Parella,\nJuan',
        group: 162,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/roura-parella-juan'
    },
    {
        id: 163,
        label: 'Ram\u00f3n\nLlige\nde\nRoura,\nTeresa',
        group: 162,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/ramon-llige-teresa'
    },
    {
        id: 164,
        label: 'Ram\u00f3n\ny\nFalco,\nEugenio',
        group: 162,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/ramon-falco-eugenio'
    },
    {
        id: 165,
        label: 'Llige\nde\nRam\u00f3n,\nAntonia\n',
        group: 162,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/llige-antonia'
    },
    {
        id: 166,
        label: 'Ram\u00f3n\ny\nLlige,\nAdela',
        group: 162,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/ramon-llige-adela'
    },
    {
        id: 167,
        label: 'Ram\u00f3n\nLlige,\nSof\u00eda',
        group: 162,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/ramon-llige-sofia'
    },
    {
        id: 168,
        label: 'Ram\u00f3n\nLlige,\nHerminia',
        group: 162,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/ramon-llige-herminia'
    },
    {
        id: 169,
        label: 'Rivas\nCherif,\nManuel\nde',
        group: 169,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/rivas-cherif-manuel-de'
    },
    {
        id: 170,
        label: 'Lobo\nCoya,\nSalud',
        group: 169,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/lobo-coya-salud'
    },
    {
        id: 171,
        label: 'Rivas\nLobo,\nJos\u00e9\nManuel',
        group: 169,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/rivas-lobo-jose-manuel'
    },
    {
        id: 172,
        label: 'Ruiz-Funes\nGarc\u00eda,\nMariano',
        group: 172,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/ruiz-funes-garcia-mariano'
    },
    {
        id: 173,
        label: 'Montesinos\nP\u00e9rez,\nCarmen',
        group: 172,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/montesinos-perez-carmen'
    },
    {
        id: 174,
        label: 'Ruiz-Funes\nMontesinos,\nManuela',
        group: 172,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/ruiz-funes-montesinos-manuela'
    },
    {
        id: 175,
        label: 'Ruiz-Funes\nMontesinos,\nMariano',
        group: 172,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/ruiz-funes-montesinos-mariano'
    },
    {
        id: 176,
        label: 'Ruiz-Funes\nMontesinos,\nCarmen',
        group: 172,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/ruiz-funes-montesinos-carmen'
    },
    {
        id: 177,
        label: 'Ruiz-Funes\nMontesinos,\nConcepci\u00f3n',
        group: 172,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/ruiz-funes-concepcion'
    },
    {
        id: 178,
        label: 'Somonte\nIturrioz,\nJusto',
        group: 178,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/somonte-iturrioz-justo'
    },
    {
        id: 179,
        label: 'Altamira\nRedondo,\nPilar',
        group: 178,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/altamira-redondo-pilar'
    },
    {
        id: 180,
        label: 'Somonte\nAltamira,\nRafael',
        group: 178,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/somonte-altamira-rafael'
    },
    {
        id: 181,
        label: 'Somonte\nAltamira,\nJusto',
        group: 178,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/somonte-altamira-justo'
    },
    {
        id: 182,
        label: 'Somonte\nAltamira,\nPilar',
        group: 178,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/somonte-altamira-pilar'
    },
    {
        id: 183,
        label: 'Somonte\nAltamira,\nMar\u00eda\nJes\u00fas',
        group: 178,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/somonte-altamira-maria-jesus'
    },
    {
        id: 184,
        label: 'Trias,\nAntonio',
        group: 184,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/trias-antonio'
    },
    {
        id: 185,
        label: 'Fargas,\nMontserrat',
        group: 184,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/fargas-montserrat'
    },
    {
        id: 186,
        label: 'Velo,\nCarlos',
        group: 186,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/velo-carlos'
    },
    {
        id: 187,
        label: '\u00c1lvarez\nSantullano,\nMar\u00eda\nLuisa',
        group: 186,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/alvarez-santullano-maria-luisa'
    },
    {
        id: 188,
        label: 'Xirau,\nJoaqu\u00edn',
        group: 188,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/xirau-joaquin'
    },
    {
        id: 189,
        label: 'Sub\u00edas\nGalter,\nPilar',
        group: 188,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/subias-galter-pilar'
    },
    {
        id: 190,
        label: 'Xirau\nSub\u00edas,\nRam\u00f3n',
        group: 188,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/xirau-ramon'
    },
    {
        id: 191,
        label: 'Xirau\nPalau,\nJos\u00e9',
        group: 188,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/xirau-palau-jose'
    },
    {
        id: 192,
        label: 'Rahola\nFalgas,\nRemedios\n(Mey)',
        group: 188,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/rahola-falgas-remedios'
    },
    {
        id: 193,
        label: 'Xirau\nRahola,\nMar\u00eda\nTeresa',
        group: 188,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/xirau-rahola-maria-teresa'
    },
    {
        id: 194,
        label: 'Xirau\nRahola,\nAlberto',
        group: 188,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/xirau-rahola-alberto'
    },
    {
        id: 195,
        label: 'Xirau\nRahola,\nJaime',
        group: 188,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/xirau-rahola-jaime'
    },
    {
        id: 196,
        label: 'Xirau\nPalau,\nAntonio',
        group: 188,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/xirau-palau-antonio'
    },
    {
        id: 197,
        label: 'Xirau\nPalau,\nJuan',
        group: 188,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/xirau-palau-juan'
    },
    {
        id: 198,
        label: 'Folch,\nNuria',
        group: 188,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/folch-i-pi-nuria'
    },
    {
        id: 199,
        label: 'Zambrano,\nMar\u00eda',
        group: 199,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/zambrano-maria'
    },
    {
        id: 200,
        label: 'Rodr\u00edguez\nAldave,\nAlfonso',
        group: 199,
        shape: 'box',
        x: 300,
        y: -300,
        link: 'https://archivos.colmex.mx/index.php/rodriguez-aldave-alfonso'
    }
]; export {nodes};