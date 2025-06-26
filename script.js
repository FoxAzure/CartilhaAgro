const operacoes = [
    {
        id: 1,
        nome: "DESMATAMENTO ENLEIRAMENTO",
        objetosCusto: [2387, 126, 2394, 746, 156, 654, 760, 643, 928, 720, 760, 5, 746, 788, 228, 814]
    },
    {
        id: 3,
        nome: "SUBSOLAGEM I",
        objetosCusto: [20]
    },
    {
        id: 4,
        nome: "GRADAGEM PESADA I",
        objetosCusto: [10]
    },
    {
        id: 5,
        nome: "ACOMODACAO TERR  PRANCHAO",
        objetosCusto: [21]
    },
    {
        id: 6,
        nome: "QUEBRA DE PEDRA",
        objetosCusto: [312, 2197, 2060, 2061, 643, 2231, 674, 2236, 156, 2059, 675, 224, 927, 788]
    },
    {
        id: 7,
        nome: "CARREGO MECANIZADO PEDRA",
        objetosCusto: [927, 675, 674, 788, 312, 2197, 24, 746, 156, 304, 643]
    },
    {
        id: 8,
        nome: "TRANSPORTE DE PEDRAS",
        objetosCusto: [746, 675, 927, 156, 788, 2197, 674, 25]
    },
    {
        id: 9,
        nome: "GRADAGEM LEVE I",
        objetosCusto: [14]
    },
    {
        id: 10,
        nome: "MICRONIVEL  C LAND-PLAYNE",
        objetosCusto: [8, 709]
    },
    {
        id: 11,
        nome: "NIVELAMENTO GROSSO",
        objetosCusto: [884]
    },
    {
        id: 13,
        nome: "MICRONIVELAMENTO C PATROL",
        objetosCusto: [7]
    },
    {
        id: 14,
        nome: "MARCANDO  AREA",
        objetosCusto: [645]
    },
    {
        id: 15,
        nome: "MARCANDO CANAIS   DRENOS",
        objetosCusto: [644]
    },
    {
        id: 16,
        nome: "MARC  LOTES POSICAO SULCO",
        objetosCusto: [645]
    },
    {
        id: 17,
        nome: "MARCANDO RUAS REGADEIRAS",
        objetosCusto: [645]
    },
    {
        id: 18,
        nome: "SULCAMENTO",
        objetosCusto: [46, 31]
    },
    {
        id: 19,
        nome: "NIVELAMENTO DE RUAS",
        objetosCusto: [650, 678, 927, 646, 652, 709, 679]
    },
    {
        id: 20,
        nome: "ABERTURAS DE CANAIS",
        objetosCusto: [644, 680, 927, 681]
    },
    {
        id: 21,
        nome: "ABERTURA DE DRENOS",
        objetosCusto: [644, 681, 760, 680, 1580, 2213]
    },
    {
        id: 22,
        nome: "ESCARIFIC  CANAIS DRENOS",
        objetosCusto: [677, 676]
    },
    {
        id: 23,
        nome: "ESCAV  C RETROESCAVADEIRA",
        objetosCusto: [613, 2347, 2196, 2456, 2236, 2452, 677, 155, 281, 676, 2231, 846]
    },
    {
        id: 24,
        nome: "ESCAV  ESTRUT  HIDRAUL(ABERTURA ADUTORA E VALETA)",
        objetosCusto: [760, 2059, 312, 2066, 767, 280, 1580, 2231, 927, 768, 2060, 2065, 2061, 156, 2063, 746]
    },
    {
        id: 25,
        nome: "ESCARIF SULC  CULT MINIMO",
        objetosCusto: [681, 680]
    },
    {
        id: 26,
        nome: "ESCARIFICACAO DE SULCOS",
        objetosCusto: [681, 680]
    },
    {
        id: 28,
        nome: "REPASSE DE SULCOS",
        objetosCusto: [32, 113, 66, 47]
    },
    {
        id: 29,
        nome: "LEVANTE MECANIZADO",
        objetosCusto: [681, 680, 26, 629, 628, 1570]
    },
    {
        id: 30,
        nome: "ABACELAMENTO",
        objetosCusto: [1571]
    },
    {
        id: 32,
        nome: "COBERTURA DE CANA",
        objetosCusto: [38, 53]
    },
    {
        id: 33,
        nome: "ABERTURA DE TRINCHEIRAS",
        objetosCusto: [746, 611, 644, 156]
    },
    {
        id: 34,
        nome: "TRANSPORTE DE PESSOAL",
        objetosCusto: [649, 673, 713, 706, 712, 185, 672, 641, 810, 859, 866, 613, 814, 809, 855, 853, 854, 858, 865, 856, 2055, 1756, 640, 238]
    },
    {
        id: 36,
        nome: "TRANSPORTE PALHA E PIQUET",
        objetosCusto: [685, 664, 156, 665, 746, 684]
    },
    {
        id: 37,
        nome: "ENCHIMENTO DE BAGACO - CALDEIRAS",
        objetosCusto: [788, 282, 927]
    },
    {
        id: 38,
        nome: "ENCHIM  COMPOSTO ORGANICO",
        objetosCusto: [687, 2064, 2213, 927, 2066, 2065, 656, 788, 655, 2062, 18, 611, 686]
    },
    {
        id: 39,
        nome: "TRANSP  MATERIAL ORGANICO",
        objetosCusto: [2064, 2065, 687, 788, 686, 156, 2066, 2069, 2072, 2059, 927, 656, 611, 655, 18, 2062]
    },
    {
        id: 40,
        nome: "ADUBACAO COMPOSTO ORGANI",
        objetosCusto: [687, 655, 686, 97, 656, 18]
    },
    {
        id: 41,
        nome: "APLICACAO  CORRETIVA  SOLO MECANIZADO",
        objetosCusto: [1721, 19, 686, 687, 1645]
    },
    {
        id: 42,
        nome: "AJUNT  ATERRO C MAQUINA",
        objetosCusto: [28, 2197, 156, 27, 2231, 304, 788, 746, 2236, 927]
    },
    {
        id: 43,
        nome: "ENCHIM  ATERRO ",
        objetosCusto: [2213, 304, 225, 2062, 156, 2197, 349, 2068, 2231, 2185, 280, 28, 746, 788, 613, 927, 2236]
    },
    {
        id: 44,
        nome: "TRANSPORTE ATERRO",
        objetosCusto: [746, 613, 2213, 2197, 304, 927, 224, 225, 928, 156, 647, 611, 2059, 349, 788, 2072, 2061, 2185, 2236]
    },
    {
        id: 45,
        nome: "TRANSPORTE DE AGUA",
        objetosCusto: [658, 657, 746, 692, 156, 691, 1552, 717, 6, 928, 814, 788]
    },
    {
        id: 46,
        nome: "TRANSPORTE DE COMBUSTIVEL",
        objetosCusto: [745, 161, 748, 156, 746, 754, 750, 160, 157]
    },
    {
    id: 47,
    nome: "TOMBANDO CANA MECANIZ",
    objetosCusto: [156, 693, 694, 746, 754, 757]
    },
    {
        id: 48,
        nome: "TRANSP  ESTACAS P CERCAS",
        objetosCusto: [156, 746, 754, 757]
    },
    {
        id: 49,
        nome: "TRANSP  CONJ  IRRIGACAO",
        objetosCusto: [147, 148, 155, 156, 157, 158, 160, 161, 745, 746, 748, 750, 752, 753, 754, 757, 758]
    },
    {
        id: 50,
        nome: "BORRACAO CANAIS DRENOS",
        objetosCusto: [117, 681, 709, 764, 765, 767, 768]
    },
    {
        id: 51,
        nome: "MARC  LOTES POSICAO SULCO",
        objetosCusto: [645, 652]
    },
    {
        id: 53,
        nome: "CORTE MECANIZADO",
        objetosCusto: [135]
    },
    {
        id: 55,
        nome: "ENCHIMENTO CANA PROPRIA",
        objetosCusto: [124, 125, 133, 135, 142]
    },
    {
        id: 56,
        nome: "TRANSP   REBOQUE",
        objetosCusto: [126, 127]
    },
    {
        id: 58,
        nome: "TRANSPORTE DE CANA ",
        objetosCusto: [122, 123, 133, 136, 137, 142]
    },
    {
        id: 59,
        nome: "TRANSBORDO",
        objetosCusto: [6, 122, 124, 138, 195]
    },
    {
        id: 69,
        nome: "CONSERV  ESTRADA",
        objetosCusto: [86, 105, 225, 715, 757]
    },
    {
        id: 70,
        nome: "ENCHIMENTO ATERRO-ESTRADA",
        objetosCusto: [28, 156, 224, 225, 746]
    },
    {
        id: 71,
        nome: "TRANSPORTE DE LIXO",
        objetosCusto: [302, 327, 927]
    },
    {
        id: 72,
        nome: "COMPACT  DE ATERRO C ROLO",
        objetosCusto: [86, 105, 225, 228, 715]
    },
    {
        id: 73,
        nome: "FORMACAO DE COMPOSTO",
        objetosCusto: [788]
    },
    {
        id: 89,
        nome: "ESCAVACAO DE ACUDE",
        objetosCusto: [156, 676, 677, 746, 2231]
    },
    {
        id: 90,
        nome: "CONSERVACAO DE ESTRADAS",
        objetosCusto: [86, 105, 156, 225, 228, 304, 715, 746, 788, 927, 928, 2213]
    },
    {
        id: 91,
        nome: "MARCACAO DE SULCO",
        objetosCusto: [645]
    },
    {
        id: 92,
        nome: "COBERTURA CANA MECANIZADA",
        objetosCusto: [38, 53, 202]
    },
    {
        id: 93,
        nome: "DESCARREGO DE CANA",
        objetosCusto: [133, 142]
    },
    {
    id: 97,
    nome: "COSERV  DE CANAIS DRENOS",
    objetosCusto: [152]
    },
    {
        id: 114,
        nome: "APLIC ADUBO SOCARI  MECAN",
        objetosCusto: [97]
    },
    {
        id: 119,
        nome: "PRE EMERG HERBIC AEREA 30L/HA",
        objetosCusto: [702, 703]
    },
    {
        id: 120,
        nome: "PRE-EMERGENC SOCA  MECANI",
        objetosCusto: [71, 90]
    },
    {
        id: 122,
        nome: "TRANSPORTE DE HERBICIDA",
        objetosCusto: [684, 698, 699]
    },
    {
        id: 123,
        nome: "TRANSPORTE DE ADUBO",
        objetosCusto: [156, 659, 660, 698, 699, 746]
    },
    {
        id: 125,
        nome: "TRANSPORTE DE PIQUETES",
        objetosCusto: [156, 704, 705]
    },
    {
        id: 140,
        nome: "CONSERVACAO CANAIS DRENOS",
        objetosCusto: [152, 156, 312, 746, 927, 928, 2059, 2060, 2067]
    },
    {
        id: 143,
        nome: "ENCHIMENTO CANA SEMENTE",
        objetosCusto: [35, 50, 62, 109, 202]
    },
    {
    id: 144,
    nome: "TRANSP  CANA SEMENTE",
    objetosCusto: [36, 51, 64, 111]
    },
    {
        id: 145,
        nome: "DISTRIBUICAO CANA SEMENTE",
        objetosCusto: [634, 637, 661, 663]
    },
    {
        id: 148,
        nome: "SULC  ADUB FUND  MECAN",
        objetosCusto: [31, 46]
    },
    {
        id: 155,
        nome: "OPERACOES INTERNA-FABRICA",
        objetosCusto: [232, 282, 613, 788, 927]
    },
    {
        id: 159,
        nome: "TRANSPORTE DE MAQUINA",
        objetosCusto: [29, 156, 630, 631, 642, 653, 654, 682, 683, 721, 722, 746, 754, 757, 788, 927, 928]
    },
    {
        id: 160,
        nome: "APLICACAO AGUA  PIVOT ",
        objetosCusto: [148, 752]
    },
    {
        id: 162,
        nome: "APLICACAO AGUA  GOTEJAM ",
        objetosCusto: [155, 158]
    },
    {
        id: 164,
        nome: "GRADAGEM PESADA II",
        objetosCusto: [10]
    },
    {
        id: 165,
        nome: "GRADAGEM LEVE II",
        objetosCusto: [14]
    },
    {
        id: 168,
        nome: "FERTIRRIGACAO",
        objetosCusto: [155, 158, 202, 753, 758]
    },
    {
    id: 169,
    nome: "APLIC. AEREA  MATURADOR",
    objetosCusto: [79, 98]
    },
    {
        id: 170,
        nome: "GRADAGEM PESADA III",
        objetosCusto: [10]
    },
    {
        id: 171,
        nome: "GRADAGEM LEVE III",
        objetosCusto: [14]
    },
    {
        id: 174,
        nome: "MICRON  C LAND-PLAYNE II",
        objetosCusto: [8]
    },
    {
        id: 175,
        nome: "MICRON  C LAND-PLAYNE III",
        objetosCusto: [8]
    },
    {
        id: 176,
        nome: "GRADAGEM PESADA IV",
        objetosCusto: [10]
    },
    {
        id: 177,
        nome: "ACOMOD  TERR  PRANCHAO II",
        objetosCusto: [21]
    },
    {
        id: 178,
        nome: "ELEVACAO PECA P CONSERTO",
        objetosCusto: [147, 148, 156, 746, 752, 927, 928]
    },
    {
        id: 181,
        nome: "DESTOR  C QUEBRA LOMBO",
        objetosCusto: [76, 95]
    },
    {
        id: 186,
        nome: "ABERTURA DE PICADAS",
        objetosCusto: [844]
    },
    {
        id: 187,
        nome: "ESPALHANDO ATERRO",
        objetosCusto: [27, 86, 156, 228, 304, 714, 715, 746, 788, 927, 928, 2059, 2061, 2069, 2185, 2197, 2231]
    },
    {
        id: 191,
        nome: "ABERTURA BURACOS",
        objetosCusto: [156, 312, 647, 746]
    },
    {
        id: 192,
        nome: "INSETIGACAO",
        objetosCusto: [932, 933]
    },
    {
        id: 193,
        nome: "LOCOMOCAO IMPLEMENTO",
        objetosCusto: [630, 631, 642, 653, 654, 682, 683, 721, 722]
    },
    {
        id: 194,
        nome: "APLICACAO DE INOCULADOR",
        objetosCusto: [155, 158, 788]
    },
    {
        id: 195,
        nome: "TRANSP  CORRETIVO SOLO",
        objetosCusto: [632, 633, 659, 660, 698, 699, 1031, 1645, 1721]
    },
    {
    id: 196,
    nome: "TRANSP  MUDAS PLAN  NAT",
    objetosCusto: [611]
    },
    {
        id: 198,
        nome: "ABERTURA BURACO P EXPLOSI",
        objetosCusto: [312]
    },
    {
        id: 199,
        nome: "TRANSP  FERRAMENTAS E OUT",
        objetosCusto: [684, 685, 927]
    },
    {
        id: 201,
        nome: "TRANSP  POLITUBOS E ACESS",
        objetosCusto: [156, 157, 161, 664, 665, 746]
    },
    {
        id: 202,
        nome: "REBOMBEAMENTO D AGUA",
        objetosCusto: [157, 160, 161, 745, 748, 750]
    },
    {
        id: 204,
        nome: "ENCHIMENTO CORRETIVO SOLO",
        objetosCusto: [19, 1645, 1721]
    },
    {
        id: 205,
        nome: "ADUBACAO FOLEAR",
        objetosCusto: [81, 100]
    },
    {
        id: 206,
        nome: "TRANSP  ACESSOR  GOTEJAME",
        objetosCusto: [151]
    },
    {
        id: 207,
        nome: "TRANSP  VAZILHAMES E PLAC",
        objetosCusto: [327, 684, 685]
    },
    {
        id: 208,
        nome: "ENCHIMENTO ENTULHOS LIXO",
        objetosCusto: [156, 200, 327, 927, 928]
    },
    {
        id: 210,
        nome: "ENCHIMENTO ADUBO MECANIZA",
        objetosCusto: [31, 46, 698, 699]
    },
    {
        id: 211,
        nome: "TRANSP  COL  RESIDUOS SAN",
        objetosCusto: [664, 665, 684, 685, 927]
    },
    {
        id: 212,
        nome: "MOLHANDO ESTRADA",
        objetosCusto: [86, 105, 156, 225, 226, 227, 228, 613, 715, 757, 814]
    },
    {
        id: 214,
        nome: "PREV  COMBATE INCENDIO",
        objetosCusto: [6, 720, 814]
    },
    {
        id: 217,
        nome: "POS EMERGENC SOCA MECANIZ",
        objetosCusto: [92]
    },
    {
        id: 220,
        nome: "OPERACOES INTERNA-OFICINA",
        objetosCusto: [164, 165, 166, 169, 170, 171, 172, 173, 174, 175, 176, 177, 927, 928]
    },
    {
        id: 221,
        nome: "ADUBACAO C   REPASSE  MEC",
        objetosCusto: [32, 47, 628, 629, 680, 681]
    },
    {
        id: 222,
        nome: "PRE-EMERGENC PLANTA MECAN",
        objetosCusto: [71, 90]
    },
    {
        id: 225,
        nome: "POS EMERGEN PLANTA MECANI",
        objetosCusto: [73]
    },
    {
        id: 228,
        nome: "APLIC ADUB COBER PLAN  MEC",
        objetosCusto: [78]
    },
    {
        id: 229,
        nome: "RUAS HERB MECA CANAIS",
        objetosCusto: [75, 94, 698, 699]
    },
    {
        id: 230,
        nome: "ROCAGEM MECANIZADA",
        objetosCusto: [84, 103]
    },
    {
        id: 232,
        nome: "AJUNT  REPIQUE MECANIZADO",
        objetosCusto: [129]
    },
    {
        id: 233,
        nome: "PRE PLANTIO MECANIZ - PPI",
        objetosCusto: [40, 55, 67, 114]
    },
    {
    id: 234,
    nome: "TRANSP  MANILHAS E OUTROS",
    objetosCusto: [86, 105, 132, 224, 225, 228, 312, 760, 927]
    },
    {
        id: 235,
        nome: "TRANSP  MATERIAIS ELETRIC",
        objetosCusto: [156, 664, 665, 684, 685, 746, 927, 928]
    },
    {
        id: 236,
        nome: "TRANSP  MATERIAIS DIVERSO",
        objetosCusto: [86, 156, 312, 611, 613, 664, 665, 684, 685, 746, 754, 757, 760, 788, 927, 928]
    },
    {
        id: 238,
        nome: "ENLERAMENTO DE PALHA",
        objetosCusto: [42, 57, 648, 695, 697]
    },
    {
        id: 240,
        nome: "PREPARO COM PENTA",
        objetosCusto: [23]
    },
    {
        id: 241,
        nome: "SUBSOLAGEM DE RUAS, DRENOS E CANAIS",
        objetosCusto: [20]
    },
    {
        id: 242,
        nome: "APLICAC  INSETICIDA AEREA",
        objetosCusto: [82, 101]
    },
    {
        id: 243,
        nome: "ADUBACAO FOLEAR AEREA",
        objetosCusto: [81, 100]
    },
    {
        id: 244,
        nome: "APLIC INSETICIDA MECANIZ",
        objetosCusto: [90, 699, 932, 933]
    },
    {
        id: 246,
        nome: "TRANSP.  MODULO SANITARIO",
        objetosCusto: [630, 631, 653, 654, 682, 683, 721, 722]
    },
    {
        id: 262,
        nome: "PESAGEM CANA EXPERIMENTO",
        objetosCusto: [202]
    },
    {
        id: 263,
        nome: "REMANEJO CANA EXP. E OUTR",
        objetosCusto: [202]
    },
    {
        id: 265,
        nome: "PRE DE RUAS PLANTA MECANIZADA",
        objetosCusto: [71]
    },
    {
        id: 266,
        nome: "PRE DE RUAS SOCA MECANIZADA",
        objetosCusto: [90]
    },
    {
        id: 267,
        nome: "TRANSPORTE DE REFEIÇÕES/ÁGUA POTÁVEL",
        objetosCusto: [640, 641, 672, 673, 712, 713, 865]
    },
    {
        id: 268,
        nome: "APLIC INIBIDOR DE FLORESCIMENTO AEREO",
        objetosCusto: [867, 868]
    },
    {
        id: 269,
        nome: "APLIC ESTIMULADOR ENRAIZAMENTO",
        objetosCusto: [880]
    },
    {
        id: 270,
        nome: "APLICAÇÃO INSETICIDA AEREA 30L/HA",
        objetosCusto: [82, 101]
    },
    {
        id: 271,
        nome: "APLICAÇÃO INSETICIDA AEREA 40L/HA - PULGÃO",
        objetosCusto: [82, 101]
    },
    {
        id: 272,
        nome: "APLICAÇÃO ADUBO FOLIAR AEREA 30L/HA",
        objetosCusto: [81, 100]
    },
    {
        id: 273,
        nome: "APLICAÇÃO ADUBO FOLIAR AEREA 40L/HA",
        objetosCusto: [81, 100]
    },
    {
        id: 274,
        nome: "APLICAÇÃO MATURADOR AEREA 30L/HA",
        objetosCusto: [79, 98]
    },
    {
        id: 275,
        nome: "APLICAÇÃO MATURADOR AEREA 40L/HA",
        objetosCusto: [79, 98]
    },
    {
    id: 278,
    nome: "ALEIRAMENTO DE PALHA",
    objetosCusto: [814]
    },
    {
        id: 279,
        nome: "ENFARDAMENTO DE PALHA",
        objetosCusto: [814]
    },
    {
        id: 280,
        nome: "CARREGAMENTO DE PALHA (ESTOQUE)",
        objetosCusto: [814]
    },
    {
        id: 281,
        nome: "CARREGAMENTO DE PALHA (VENDA)",
        objetosCusto: [814]
    },
    {
        id: 282,
        nome: "TRANSPORTE DE PALHA ENFARDAMENTO",
        objetosCusto: [814]
    },
    {
        id: 283,
        nome: "LIMPEZA DE MODULO SANITARIO",
        objetosCusto: [712]
    },
    {
        id: 284,
        nome: "ACABAMENTO C/ ROLO DESTORROADOR",
        objetosCusto: [1005]
    },
    {
        id: 285,
        nome: "TRANSPORTE PESSOAL INTERNO",
        objetosCusto: [185, 238, 613, 640, 641, 649, 672, 673, 706, 712, 713, 810, 853, 854, 855, 856, 858, 859, 865, 866, 2055]
    },
    {
        id: 286,
        nome: "DESSECACAO MECANIZADA",
        objetosCusto: [84]
    },
    {
        id: 287,
        nome: "BASCULAMENTO",
        objetosCusto: [126, 138]
    },
    {
        id: 288,
        nome: "DESLOCAMENTO CARREGADO",
        objetosCusto: [36, 46, 122, 126, 138]
    },
    {
        id: 290,
        nome: "FILA UNICA",
        objetosCusto: [122, 126, 138]
    },
    {
        id: 291,
        nome: "SEMI REBOQUE CARREGADO/FALTA DE CAMINHÃO",
        objetosCusto: [122, 136, 138]
    },
    {
        id: 292,
        nome: "TRANSBORDO ALOCADO",
        objetosCusto: [138]
    },
    {
        id: 294,
        nome: "AGUARDANDO MANOBRA TRANSBORDO",
        objetosCusto: [135, 2387]
    },
    {
        id: 295,
        nome: "AGUARDANDO DESCARREGAR NA MESA",
        objetosCusto: [122, 133]
    },
    {
        id: 296,
        nome: "DESCARREGAR CANA NA MESA",
        objetosCusto: [122, 133, 136, 142]
    },
    {
        id: 297,
        nome: "SONDA",
        objetosCusto: [122]
    },
    {
        id: 298,
        nome: "APÓS DESCARREGAR CANA NA MESA",
        objetosCusto: [133]
    },
    {
        id: 299,
        nome: "AGUARDANDO SEQUENCIA DE TRABALHO",
        objetosCusto: [122, 136]
    },
    {
        id: 300,
        nome: "AGUARDANDO TRANSBORDO",
        objetosCusto: [135]
    },
    {
        id: 301,
        nome: "BALANÇA ENTRADA",
        objetosCusto: [122, 133, 136, 142]
    },
    {
        id: 302,
        nome: "BALANÇA SAIDA",
        objetosCusto: [122, 133, 136, 142]
    },
    {
        id: 303,
        nome: "CARREGANDO CANA COM TRANSBORDO",
        objetosCusto: [126, 133, 136, 137]
    },
    {
        id: 305,
        nome: "MANOBRA DE CARRETAS NO PATIO EXTERNO",
        objetosCusto: [126, 133]
    },
    {
        id: 306,
        nome: "PATIO EXTERNO",
        objetosCusto: [122, 133, 136, 142]
    },
    {
        id: 307,
        nome: "TRANSPORTE DE CANA VAZIO",
        objetosCusto: [122, 133, 136, 142]
    },
    {
        id: 308,
        nome: "TROCANDO JULIETA NO CAMPO",
        objetosCusto: [122, 136, 137, 138]
    },
    {
        id: 309,
        nome: "TROCANDO JULIETA NO PATIO",
        objetosCusto: [122, 136, 137, 138]
    },
    {
        id: 310,
        nome: "DENTRO DA USINA",
        objetosCusto: [133]
    },
    {
        id: 311,
        nome: "COMBOIO - ABASTECIMENTO/LUBRIFICAÇÃO",
        objetosCusto: [188, 180, 187, 189, 181]
    },
    {
        id: 312,
        nome: "TRANSPORTE PESSOAL EXTRA",
        objetosCusto: [858, 185, 649, 854, 866, 865, 672, 856, 640, 673, 238, 712, 613, 853, 810, 706, 713, 859, 641]
    },
    {
        id: 313,
        nome: "TRANSPORTE DE REFEIÇÕES EXTRA",
        objetosCusto: [672, 713, 712, 641, 640, 673]
    },
    {
        id: 314,
        nome: "TRANSPORTE MOD. SAN. EXTRA",
        objetosCusto: [653, 721, 722, 631, 654, 630]
    },
    {
        id: 315,
        nome: "LAVANDO REBOQUE",
        objetosCusto: [781]
    },
    {
        id: 317,
        nome: "POS EMERG AEREA SOCA",
        objetosCusto: [92]
    },
    {
        id: 318,
        nome: "TRANSPORTE DE BAGAÇO",
        objetosCusto: [788]
    },
    {
        id: 319,
        nome: "TOMBAMENTO CABICEIRA",
        objetosCusto: [124]
    },
    {
        id: 320,
        nome: "RASTELAMENTO DE ESTEIRA",
        objetosCusto: [124]
    },
    {
        id: 321,
        nome: "CARREGO DE REPIQUE(CAMPO)",
        objetosCusto: [124]
    },
    {
        id: 322,
        nome: "CARREGO DE REPIQUE(ESTRADA)",
        objetosCusto: [132]
    },
    {
        id: 323,
        nome: "DESCARREGO DE REBOQUE(CAMPO)",
        objetosCusto: [124]
    },
    {
        id: 324,
        nome: "TOMBAMENTO DE CANA(CAMPO)",
        objetosCusto: [124, 156]
    },
    {
        id: 325,
        nome: "DESCARREGO DE PALHA(ESTOQUE)",
        objetosCusto: [814]
    },
    {
        id: 326,
        nome: "CARREGAMENTO DE FARDO ESTOURADO",
        objetosCusto: [814]
    },
    {
        id: 327,
        nome: "ARRUMAÇÃO DE CARGA MECANIZADA",
        objetosCusto: [135]
    },
    {
        id: 328,
        nome: "TRANSPORTE DE REBOQUE PALHA REPIQUE(CAMPO)",
        objetosCusto: [126]
    },
    {
        id: 329,
        nome: "TRANSPORTE DE REBOQUE REPIQUE(ESTRADA)",
        objetosCusto: [132]
    },
    {
        id: 330,
        nome: "TRANSPORTE E TRANSBORDO DE FARDOS ESTOURADOS",
        objetosCusto: [814]
    },
    {
        id: 331,
        nome: "ATRELANDO REBOQUE",
        objetosCusto: [126]
    },
    {
        id: 332,
        nome: "DESATRELANDO REBOQUE",
        objetosCusto: [126]
    },
    {
        id: 333,
        nome: "TRANSPORTE/LOCOMOÇÃO DE MODULO DE APOIO",
        objetosCusto: [721]
    },
    {
        id: 334,
        nome: "LOCOMOÇÃO DE REBOQUE VAZIO",
        objetosCusto: [126, 722, 721]
    },
    {
        id: 335,
        nome: "MANOBRA DE REBOQUE VAZIO(PATIO)",
        objetosCusto: [133]
    },
    {
        id: 336,
        nome: "TRANSPORTE DE REBOQUE FARDOS(ESTOQUE)",
        objetosCusto: [814, 1631]
    },
    {
        id: 337,
        nome: "APOIO REBOQUE ATOLADO",
        objetosCusto: [126]
    },
    {
        id: 338,
        nome: "DESLOCAMENTO DE APOIO A COMPOSIÇÃO(ESTRADA)",
        objetosCusto: [122]
    },
    {
        id: 339,
        nome: "NIVELAMENTO DE BORRACHUDO",
        objetosCusto: [117]
    },
    {
        id: 340,
        nome: "FECHAMENTO DE DRENOS E CANAIS(PASSAGEM)",
        objetosCusto: [117]
    },
    {
        id: 341,
        nome: "TRANSPORTE COMPOSIÇÃO VAZIO(CAMPO) CANA INTEIRA",
        objetosCusto: [122]
    },
    {
        id: 342,
        nome: "TRANSPORTE COMPOSIÇÃO CHEIO(FABRICA) CANA INTEIRA",
        objetosCusto: [122]
    },
    {
        id: 343,
        nome: "TRANSPORTE COMPOSIÇÃO VAZIA(CAMPO) CANA PICADA",
        objetosCusto: [136]
    },
    {
        id: 344,
        nome: "TRANSPORTE COMPOSIÇÃO CHEIO(FABRICA) CANA PICADA",
        objetosCusto: [136]
    },
    {
        id: 345,
        nome: "DESLOCAMENTO SEM COMPOSIÇÃO",
        objetosCusto: [122]
    },
    {
        id: 346,
        nome: "DESLOCAMENTO DE APOIO NO CAMPO(REBOQUE ATOLADO)",
        objetosCusto: [122]
    },
    {
        id: 347,
        nome: "APOIO A FRENTE MECANIZADA",
        objetosCusto: [720]
    },
    {
        id: 348,
        nome: "REABASTECIMENTO DE AGUA",
        objetosCusto: [720]
    },
    {
        id: 349,
        nome: "TRANSPORTE DE FARDOS PARA ESTOQUE",
        objetosCusto: [814]
    },
    {
        id: 350,
        nome: "LIMPEZA DE ATRELAMENTO MECANIZADO",
        objetosCusto: [138]
    },
    {
        id: 351,
        nome: "TRANSPORTE DE REPIQUE MECANIZADO PALHA(REBOQUE)",
        objetosCusto: [138]
    },
    {
        id: 428,
        nome: "TRANSPORTE DE PALHA",
        objetosCusto: [814]
    },
    {
        id: 429,
        nome: "TRANSPORTE DE PESSOAL",
        objetosCusto: [1399]
    },
    {
        id: 437,
        nome: "PRE EMERG HERBIC AEREA 40L/HA",
        objetosCusto: [703, 702]
    },
    {
        id: 438,
        nome: "DESTORROAMENTO - (ENXADA ROTATIVA)",
        objetosCusto: [1278]
    },
    {
        id: 439,
        nome: "LIMPEZA DE AÇUDE (MEC.)",
        objetosCusto: [2231, 153, 788]
    },
    {
        id: 440,
        nome: "DESLOCAMENTO VAZIO (TRANSBORDO)",
        objetosCusto: [122, 721, 126, 722, 136, 138]
    },
    {
        id: 441,
        nome: "DESLOCAMENTO COLHEDORA",
        objetosCusto: [135, 2387, 138, 2393, 2392]
    },
    {
        id: 442,
        nome: "MANOBRA EXTRA TRANSPORTE DE PESSOAL",
        objetosCusto: [185, 238, 640, 641, 649, 672, 673, 706, 712, 713, 809, 810, 853, 854, 855, 856, 858, 859, 865, 866, 1756]
    },
    {
        id: 443,
        nome: "MANOBRA EXTRA TRANSPORTE DE ALIMENTAÇÃO",
        objetosCusto: [640, 641, 672, 673, 712]
    },
    {
        id: 444,
        nome: "REPASSE MICRONIVELAMENTO C PATROL",
        objetosCusto: [7]
    },
    {
        id: 445,
        nome: "AGUARDANDO COLHEDORA",
        objetosCusto: [138]
    },
    {
        id: 446,
        nome: "APLICAÇÃO INSETICIDA AEREA 50L/HA",
        objetosCusto: [82, 101]
    },
    {
        id: 447,
        nome: "RECOLHIMENTO DE PALHA A GRANEL",
        objetosCusto: [1439]
    },
    {
        id: 448,
        nome: "ARRUMAÇÃO DE CARGA",
        objetosCusto: [124]
    },
    {
        id: 449,
        nome: "DESLOCAMENTO VAZIO(CAMINHÃO)",
        objetosCusto: [122, 136]
    },
    {
        id: 452,
        nome: "APLICACAO AGUA  POLITUBO(somente controle contrato",
        objetosCusto: [157, 161]
    },
    {
        id: 453,
        nome: "APLICACAO AGUA  SULCO(somente controle contrato)",
        objetosCusto: [160, 745]
    },
    {
        id: 454,
        nome: "APLICACAO AGUA  PIVOT LINEAR",
        objetosCusto: [147]
    },
    {
        id: 455,
        nome: "APLICAÇÃO DE AGUA(CONTROLE DE CONTRATO)",
        objetosCusto: [147, 148, 155, 157, 158, 160, 161, 745, 752]
    },
    {
        id: 456,
        nome: "APLICAÇÃO UREIA COMPOSTO ",
        objetosCusto: [788]
    },
    {
        id: 457,
        nome: "APLICAÇÃO BAGAÇO ENRIQUECIDO - RESÍDUO INDUSTRIAL",
        objetosCusto: [686, 687]
    },
    {
        id: 458,
        nome: "IÇAMENTO DE PEÇAS E MATERIAIS",
        objetosCusto: [156]
    },
    {
        id: 459,
        nome: "CONSUMO ENERGIA ELETRICA IRRIGAÇÃO",
        objetosCusto: [147, 148, 155, 157, 158, 160, 161, 745, 752]
    },
    {
        id: 460,
        nome: "ABASTECIMENTO DE INSUMOS HERBICIDA",
        objetosCusto: [18, 71, 75, 90, 94, 698, 699, 927]
    },
    {
    id: 461,
    nome: "LAVAGEM DO TANQUE HERBICIDA",
    objetosCusto: [90]
    },
    {
        id: 462,
        nome: "APLICAÇÃO INSETICIDA AEREA 40L/HA - CIGARRINHA",
        objetosCusto: [82, 101]
    },
    {
        id: 463,
        nome: "APLICAÇÃO INSETICIDA AEREA 40L/HA - DIATRAEA",
        objetosCusto: [82, 101]
    },
    {
        id: 464,
        nome: "APLICACAO PRE EMERG AEREA C/ DRONE",
        objetosCusto: [702, 703]
    },
    {
        id: 465,
        nome: "APLICACAO POS EMERG AEREA C/ DRONE",
        objetosCusto: [1635, 1636]
    },
    {
        id: 466,
        nome: "APLICAÇÃO INSETICIDA AEREA C/DRONE - PULGAO",
        objetosCusto: [82, 101]
    },
    {
        id: 467,
        nome: "APLICAÇÃO INSETICIDA AEREA C/DRONE - CIGARRINHA",
        objetosCusto: [82, 101]
    },
    {
        id: 468,
        nome: "APLICAÇÃO INSETICIDA AEREA C/DRONE - DIATRAEA",
        objetosCusto: [82, 101]
    },
    {
        id: 469,
        nome: "APLICAÇÃO CORRETIVA DE SOLO (MECANIZADO)",
        objetosCusto: [1645, 1721]
    },
    {
        id: 470,
        nome: "APLICAÇÃO ADUBO FOLIAR AEREA C/DRONE",
        objetosCusto: [81, 100]
    },
    {
        id: 471,
        nome: "APLICAÇÃO MATURADOR AEREA C/DRONE",
        objetosCusto: [79, 98]
    },
    {
        id: 472,
        nome: "APLIC. INIBIDOR DE FLORESC AEREO C/DRONE",
        objetosCusto: [867, 868]
    },
    {
        id: 473,
        nome: "APLICAÇÃO INSETICIDA AEREA C/DRONE - LAGARTA",
        objetosCusto: [82, 101]
    },
    {
        id: 474,
        nome: "TRANSPORTE DE FARDOS PARA INDUSTRIA",
        objetosCusto: [1631]
    },
    {
        id: 475,
        nome: "TARIFA APLICAÇÃO AGUA K1(CONTRATOS)",
        objetosCusto: [147, 148, 155, 157, 158, 160, 161, 745, 752]
    },
    {
        id: 476,
        nome: "ENCHIMENTO CORRETIVO DE SOLO (MECANIZADO)",
        objetosCusto: [1645, 1721]
    },
    {
        id: 477,
        nome: "DESCARREGO DE PALHA(INDUSTRIA)",
        objetosCusto: [1631]
    },
    {
        id: 478,
        nome: "ALIMENTACAO DE PALHA TRITURADOR (INDUSTRIA)",
        objetosCusto: [1631]
    },
    {
        id: 479,
        nome: "APLICACAO DE AGUA PRE-GRADAGEM",
        objetosCusto: [752, 760]
    },
    {
        id: 480,
        nome: "SEG APLIC PRE EMERG AEREA C/ DRONE",
        objetosCusto: [702, 703]
    },
    {
    id: 481,
    nome: "POS EMERG HERBIC AEREA 30L/HA - AVIAO",
    objetosCusto: [1635, 1636]
    },
    {
        id: 482,
        nome: "POS EMERG HERBIC AEREA 40L/HA - AVIAO",
        objetosCusto: [1635, 1636]
    },
    {
        id: 483,
        nome: "APLICAÇÃO INSETICIDA AEREA 20L/HA - PULGÃO",
        objetosCusto: [82, 101]
    },
    {
        id: 484,
        nome: "APLICAÇÃO INSETICIDA AEREA 20L/HA - CIGARRINHA",
        objetosCusto: [82, 101]
    },
    {
        id: 485,
        nome: "APLICAÇÃO INSETICIDA AEREA 20L/HA - DIATRAEA",
        objetosCusto: [82, 101]
    },
    {
        id: 486,
        nome: "PRE EMERG HERBIC AEREA 20L/HA",
        objetosCusto: [702, 703]
    },
    {
        id: 487,
        nome: "POS EMERG HERBIC AEREA 20L/HA - AVIAO",
        objetosCusto: [1635, 1636]
    },
    {
        id: 488,
        nome: "APLICAÇÃO INSETICIDA AEREA 30L/HA - CIGARRINHA",
        objetosCusto: [82, 101]
    },
    {
        id: 489,
        nome: "POS EMERG RUAS CANAIS C/ DRONE",
        objetosCusto: [1635, 1636]
    },
    {
        id: 490,
        nome: "CULTIVO MINIMO C/ DRONE",
        objetosCusto: [1635, 1636]
    },
    {
        id: 491,
        nome: "ERRADICAÇÃO DE ERVAS PERENES C/ DRONE",
        objetosCusto: [1635, 1636]
    },
    {
        id: 492,
        nome: "LOCOMOÇÃO DE REBOQUE CANA CARREGADO",
        objetosCusto: [126, 722]
    },
    {
        id: 493,
        nome: "ORGANIZAÇÃO DO BAGAÇO - CALDEIRAS",
        objetosCusto: [282]
    },
    {
        id: 494,
        nome: "LIMPEZA DE PALHAS NO PATIO INDUSTRIA",
        objetosCusto: [927]
    },
    {
        id: 521,
        nome: "AGUARDANDO CARREGAMENTO ADULBO-ALMOX.",
        objetosCusto: [665]
    },
    {
        id: 523,
        nome: "AGUARDANDO CARREGAMENTO MATERIAIS-C. BOMBA",
        objetosCusto: [156]
    },
    {
        id: 524,
        nome: "AGUARDANDO ENCHER CULTIVADOR",
        objetosCusto: [685]
    },
    {
        id: 525,
        nome: "ARMAZENAMENTO DE BIG BAG",
        objetosCusto: [349]
    },
    {
        id: 526,
        nome: "RETIRADA DE BIG BAG",
        objetosCusto: [349]
    },
    {
        id: 527,
        nome: "SUAVIZAÇÃO DE TERRENO",
        objetosCusto: [8]
    },
    {
        id: 528,
        nome: "DESATOLANDO EQUIPAMENTO",
        objetosCusto: [715]
    },
    {
        id: 529,
        nome: "CAMINHÃO CARREGADO NO PATIO (ADUBO)",
        objetosCusto: [156, 746]
    },
    {
        id: 530,
        nome: "SERVIÇOS RECEPÇÃO INDUSTRIA",
        objetosCusto: [927]
    },
    {
        id: 532,
        nome: "LEVANTAMENTO PLANIALTIMÉTRICO",
        objetosCusto: [4]
    },
    {
        id: 533,
        nome: "AGUARDANDO ENCHER ADUBADEIRA DO TRATOR",
        objetosCusto: [699]
    },
    {
        id: 534,
        nome: "AGUARDANDO CAÇAMBA",
        objetosCusto: [18]
    },
    {
        id: 535,
        nome: "AGUARDANDO PASSAGEM DE CAMINHÃO",
        objetosCusto: [122, 136]
    },
    {
        id: 536,
        nome: "APOIO CONSTRUÇÃO CIVIL",
        objetosCusto: [312]
    },
    {
        id: 538,
        nome: "APLICAÇÃO MECANIZADA DE VINHAÇA",
        objetosCusto: [2297, 2522]
    },
    {
        id: 539,
        nome: "APLICAÇÃO REGULADOR DE CRESCIMENTO-DRONE",
        objetosCusto: [867, 868]
    },
    {
        id: 540,
        nome: "CORTE MECANIZADO - SEMENTE",
        objetosCusto: [2393]
    },
    {
        id: 541,
        nome: "DISTRIBUIÇÃO DE CANA - SEMENTE",
        objetosCusto: [2395]
    },
    {
        id: 542,
        nome: "TRANSBORDO DE CANA - SEMENTE",
        objetosCusto: [2393]
    },
    {
        id: 543,
        nome: "TRANSPORTE DE CANA(TRATOR) - SEMENTE",
        objetosCusto: [2394]
    },
    {
        id: 544,
        nome: "TRANSPORTE DE CANA(CAMINHÃO) - SEMENTE",
        objetosCusto: [2394]
    },
    {
        id: 545,
        nome: "ENCHIMENTO(ABASTECIMENTO) DE CANA - SEMENTE",
        objetosCusto: [2395]
    },
    {
        id: 546,
        nome: "AGUARDANDO PLANTADORA ESVAZIAR",
        objetosCusto: [2392]
    },
    {
        id: 547,
        nome: "AGUARDANDO TRANSBORDO DE SEMENTE",
        objetosCusto: [2393]
    },
    { 
        id: 549, 
        nome: "APLICAÇÃO FUNGICIDA E ENRAIZADOR MECANIZADO", 
        objetosCusto: [2457] 
    },
    { 
        id: 550, 
        nome: "APOIO PLANTIO MECANIZADO", 
        objetosCusto: [2465] 
    },
    { 
        id: 551, 
        nome: "PLANTIO MECANIZADO", 
        objetosCusto: [202, 2465] 
    },
    { 
        id: 552, 
        nome: "ADUBAÇÃO FOLIAR 20L/Ha", 
        objetosCusto: [100, 81] 
    },
    { 
        id: 553, 
        nome: "MATURADOR 20L/Ha", 
        objetosCusto: [79, 98] 
    },
    { 
        id: 554, 
        nome: "INSETICIDA 20L/HA", 
        objetosCusto: [82, 101] 
    },
    { 
        id: 555, 
        nome: "INSETICIDA PULGÃO VAZÃO 20L/Ha", 
        objetosCusto: [82, 101] 
    },
    { 
        id: 556, 
        nome: "INSETICIDA CIGARRINHA VAZÃO 20L/Ha", 
        objetosCusto: [82, 101] 
    },
    { 
        id: 557, 
        nome: "INSETICIDA DIATREIA VAZÃO 20L/Ha", 
        objetosCusto: [101, 82] 
    },
    { 
        id: 558, 
        nome: "INSETICIDA METAMASIUS VAZÃO 20L/Ha", 
        objetosCusto: [101, 82] 
    },
    { 
        id: 559, 
        nome: "DESSECAÇÃO VAZÃO 20L/Ha", 
        objetosCusto: [2498, 2499] 
    },
    { 
        id: 560, 
        nome: "LIBERAÇÃO DE COTESIA COM DRONE", 
        objetosCusto: [2518, 2517] 
    },
    { 
        id: 561, 
        nome: "LIBERAÇÃO DE TRICOGRAMA GALLOIBUG COM DRONE", 
        objetosCusto: [2517, 2518] 
    },
    { 
        id: 562, 
        nome: "SUBSOLAGEM II", 
        objetosCusto: [20] 
    },
    { 
        id: 563, 
        nome: "CULTIVO MÍNIMO MECANIZADO", 
        objetosCusto: [2539, 2538] 
    },
    {
        id: 564,
        nome: "APLICAÇÃO INSETICIDA E FOLIAR AEREA C/DRONE - PULG",
        objetosCusto: [2615, 2610]
    },
    {
        id: 565,
        nome: "APLICAÇÃO INSETICIDA E FOLIAR AEREA C/DRONE - CIGA",
        objetosCusto: [2611, 2616]
    },
    {
        id: 566,
        nome: "APLICAÇÃO INSETICIDA E FOLIAR AEREA C/DRONE - DIAT",
        objetosCusto: [2612, 2617]
    },
    {
        id: 567,
        nome: "APLICAÇÃO INSETICIDA E FOLIAR AEREA C/DRONE - LAGA",
        objetosCusto: [2613, 2618]
    },
    {
        id: 568,
        nome: "APLICACAO POS EMERG E FOLIAR AEREA C/ DRONE",
        objetosCusto: [2619, 2614]
    },
    {
        id: 569,
        nome: "IRRIGAÇÃO - HIDROMETRO",
        objetosCusto: [158, 155]
    },
    {
        id: 570,
        nome: "LEVANTAMENTO FOTOGRAFICO C/DRONE -TERCEIRO ",
        objetosCusto: [2640, 2639]
    },
    {
        id: 571,
        nome: "APLICACAO AGUA  PIVOT 1° REGO",
        objetosCusto: [148, 752]
    },
    {
        id: 572,
        nome: "APLICACAO DE AGUA GOTEJO 1° REGO",
        objetosCusto: [158, 155]
    },
    {
        id: 573,
        nome: "APLICAÇÃO INSETICIDA AREA C/DRONE-METAMASIUS",
        objetosCusto: [82, 101]
    },
    {
        id: 600,
        nome: "REPLANTIO DE CANA MECANIZADA",
        objetosCusto: [2686, 61]
    },
    {
        id: 620,
        nome: "APOIO A IRRIGAÇÃO",
        objetosCusto: [156, 746]
    },
    {
        id: 621,
        nome: "SANAR VAZ. ADUTORA/RAMAL",
        objetosCusto: [746, 156]
    },
    {
        id: 931,
        nome: "TRANSPORTE CANA TERCEIROS",
        objetosCusto: [123]
    },
    {
        id: 933,
        nome: "CORTE DE CANA TERCEIROS",
        objetosCusto: [125]
    },
    {
        id: 936,
        nome: "MANUTENCAO MECANICA",
        objetosCusto: [169]
    },
    {
        id: 937,
        nome: "ENCHIMENTO CANA TERCEIROS",
        objetosCusto: [125]
    },
    {
        id: 954,
        nome: "PROBLEMA ELETRICO",
        objetosCusto: [148]
    },
    {
        id: 978,
        nome: "TRATOR DE REBOQUE TERCEIRO",
        objetosCusto: [127]
    },
    {
        id: 997,
        nome: "RESGATE E AFUGENTAMENTO DE FAUNA",
        objetosCusto: [760]
    },
    {
        id: 998,
        nome: "MOBILIZAÇÃO/DESMOBILIZAÇÃO",
        objetosCusto: [191]
    },
    {
        id: 1007,
        nome: "CARREGAMENTO MATERIAL",
        objetosCusto: [281, 2231, 2236, 788, 156, 2214, 2215]
    },
    {
        id: 1008,
        nome: "DESCARREGAMENTO MATERIAL",
        objetosCusto: [746, 788]
    },
    {
        id: 1009,
        nome: "ENCHIMENTO DE BAGACO - CAMINHÕES",
        objetosCusto: [927, 282, 788]
    },
    {
        id: 1042,
        nome: "PRODUTO NÃO CONFORME - SEMPA",
        objetosCusto: [261]
    }
];


const objetosCustoDescricao = {
    2387:"COLHEDORA CANA PLANTIO",
    126:"TRANSPORTE REBOQUE PALHADA - EQUIP  PROPRIO",
    2394:"TRANSPORTE CANA SEMENTE MECANIZADO",
    746:"SERVICOS APOIO- CST RECEBIDOS-DEPA 2",
    156:"SERVICOS APOIO - CST RECEBIDOS DEP 1",
    654:"TRANSPORTE LOCOMOCAO MAQ  E IMPLEMENTOS",
    760:"SERVICOS APOIO ADM - CST RECEBIDOS- P S",
    643:"TRANSPORTE E CARREGO DE PEDRAS",
    928:"SERVICOS DE APOIO OFICINA  - RATEIOS REC",
    720:"COMBATE A INCENDIO - COL  MECANIZADA",
    5:"DESMATAMENTO",
    788:"COMPOSTAGEM",
    228:"CONSERVACAO DE ESTRADAS RUAS - COLHEITA",
    814:"ENFARDAMENTO DE PALHA",
    20:"SUBSOLAGEM",
    10:"GRADAGEM PESADA",
    21:"ACOMODACAO TERRENO  COM PRANCHAO",
    312:"CONSTRUCAO CIVIL",
    2197:"PROJ. ENCASC. DE RASTROS DOS PIVÔS - SALITRE",
    2060:"PROJ.IMPLANTAÇÃO GOTEJO - LAS VEGAS",
    2061:"PROJ.IMPLANTAÇÃO GOTEJO - DAKOTA",
    2231:"PROJ. ESTAÇÃO DE TRATAMENTO DE ESGOTO (E.T.E)",
    674:"TRANSPORTE E CARREGO DE PEDRAS",
    2236:"PROJ. USINA TERMELETRICA 30 MW (UTE)",
    2059:"PROJ.IMPLANTAÇÃO GOTEJO - LOS ANGELES",
    675:"TRANSPORTE E CARREGO DE PEDRAS",
    224:"CONSTRUCAO DE ESTRADAS",
    927:"SERVICOS DE APOIO INDUSTRIA",
    24:"CARREGO DE PEDRA MECANIZADO",
    304:"VILAS E CLUBES",
    25:"TRANSPORTE DE PEDRA",
    14:"GRADAGEM LEVE",
    8:"MICRONIVELAMENTO COM LAND PLANE",
    709:"MARCACAO E NIVELAMENTO RUAS",
    884:"NIVELAMENTO GROSSO",
    7:"MICRONIVELAMENTO COM PATROL",
    645:"MARCACAO DE LOTES E SULCOS",
    644:"ABERTURA DE CANAIS E DRENOS",
    46:"SULCAMENTO ADUBACAO FUNDACAO MECANIZADO IRR GOT",
    31:"SULCAMENTO ADUBACAO FUNDACAO MECANIZADO IRRIG CONV",
    650:"MARCACAO E NIVELAMENTO RUAS",
    678:"MARCACAO E NIVELAMENTO RUAS",
    646:"MARCACAO E NIVELAMENTO DE RUAS",
    652:"MARCACAO E NIVELAMENTO RUAS",
    679:"MARCACAO E NIVELAMENTO RUAS",
    680:"ESCARIFICACAO REPASSE SULCOS",
    681:"ESCARIFICACAO REPASSE SULCOS",
    1580:"ABERTURA ADUTORA E VALETA",
    2213:"PROJ. ENCASCALHAMENTO TRANSCANA EB 33",
    677:"MANUTENCAO CANAIS E DRENOS - C  SOCA",
    676:"MANUTENCAO CANAIS E DRENOS - C  PLANTA",
    613:"SERVICOS GERAIS   ADMINISTRACAO",
    2347:"PROJ. PISO CONCRETO ARMAZEM ESTRTURADO",
    2196:"MANUTENCAO PREDIAL",
    2456:"PROJ. CONSTRUCAO CAMINHO SEGURO",
    2452:"PROJ. RECAPEAMENTO VIAS AGROVALE",
    155:"SIST  FERTIRRIGACAO GOTEJAMENTO - DEPA1",
    281:"ESTACAO TRATAMENTO DE AGUA",
    846:"FABRICA ACUCAR",
    2066:"PROJ.IMPLANTAÇÃO GOTEJO - MINESSOTA",
    767:"SERVICOS APOIO CST RECEBIDOS -TCP",
    280:"CALDEIRAS",
    768:"SERVICOS APOIO CST RECEBIDOS- TCS",
    2065:"PROJ.IMPLANTAÇÃO GOTEJO - DETROIT",
    2063:"PROJ.IMPLANTAÇÃO GOTEJO - PHOENIX",
    32:"REPASSE DE SULCO MECANIZADO",
    113:"REPASSE DE SULCO MECANIZADO - SOCA",
    66:"REPASSE DE SULCO MECANIZADO - PLANTA",
    47:"REPASSE DE SULCO MECANIZADO",
    26:"LEVANTE MECANIZADO",
    629:"ESCARIFICACAO REPASSE LEVANTE SULCOS",
    628:"ESCARIFICACAO REPASSE SULCO",
    1570:"LEVANTE MEC T C SOCA",
    1571:"ABACELAMENTO",
    38:"COBERTA - P  MANUAL CONV",
    53:"COBERTA - P  MANUAL GOTEJO",
    611:"MEIO AMBIENTE",
    649:"TRANSPORTE PESSOAL - PREPARO DE SOLO",
    673:"TRANSPORTE PESSOAL ALIM AGUA - PLANTIO CONV",
    713:"TRANSPORTE PESSOAL - COLHEITA MECANIZADA",
    706:"TRANSPORTE PESSOAL - TRATOS C  PLANTA",
    712:"TRANSPORTE PESSOAL ALIM AGUA - COLHEITA MANUAL",
    185:"TRANSPORTE PESSOAL - OFICINA AUTOMOTIVA",
    672:"TRANSPORTE PESSOAL ALIM AGUA-PLANTIO IRRIG  GOTEJO",
    641:"TRANSPORTE PESSOAL - REFORMA CANAVIAL",
    810:"APRENDIZ AGRICOLA",
    859:"TRANSPORTE PESSOAL - DEPA 4",
    866:"TRANSPORTE PESSOAL - ATIV  AUXILIARES",
    809:"APRENDIZ INDUSTRIAL",
    855:"TRANSPORTE PESSOAL - DEPA 1",
    853:"TRANSPORTE PESSOAL - TRATOS C  SOCA",
    854:"TRANSPORTE PESSOAL - ENG  IRRIGACAO",
    858:"TRANSPORTE PESSOAL - DEPA 3",
    865:"TRANSPORTE PESSOAL ADMINISTRATIVO",
    856:"TRANSPORTE PESSOAL - DEPA 2",
    2055:"PROJ. EXPANSÃO SALITRE - EDIFICAÇÃO",
    1756:"TRANSPORTE PESSOAL - APRENDIZ",
    640:"TRANSPORTE PESSOAL ALIM AGUA - REPLANTIO",
    238:"TRANSPORTE PESSOAL - INDUSTRIA",
    50:"ENCHIMENTO CANA SEMENTE",
    29:"TRANSPORTE DE MAQUINAS",
    35:"ENCHIMENTO CANA SEMENTE",
    661:"DISTRIBUICAO DE SEMENTES P.CONV",
    62:"ENCHIMENTO C  SEMENTE REPLANTIO PLANTA",
    660:"CARREGO E TRANSPORTE DE INSUMOS",
    27:"AJUNTAMENTO ESPALHAMENTO DE ATERRO",
    36:"TRANSPORTE CANA SEMENTE",
    1278:"DESTORROAMENTO MECANIZADO (ENXADA ROTATIVA)",
    28:"ENCHIMENTO DE ATERRO",
    117:"BORRAMENTO",
    1031:"TRANSPORTE CORRETIVO - P  SOLO",
    752:"SISTEMA IRRIGACAO PIVOT CENTRAL - ASPERSAO - DEPA 2",
    122:"TRANSPORTE CANA INTEIRA - EQUIP  PROPRIO",
    111:"TRANSPORTE CANA SEMENTE REPLANTA SOCA",
    136:"TRANSPORTE CANA PICADA - EQUIP  PROPRIO",
    152:"CONSERVACAO CANAIS E DRENOS",
    699:"TRANSPORTE E CARREGO INSUMOS - C  SOCA",
    683:"TRANSPORTE LOCOMOCAO MAQ E IMPLEMENTOS",
    142:"DESCARREGO CANA PICADA",
    94:"APLICACAO HERBICIDA RUAS CANAIS MECAN - SOCA",
    97:"APLICACAO ADUBO COBERT  SOCA MECAN",
    682:"TRANSPORTE LOCOMOCAO MAQ E IMPLEMENTOS",
    86:"CONSERVACAO DE ESTRADAS - PLANTA",
    90:"APLICACAO HERBICIDA SOCA MECAN - PRE-EMERGE",
    153:"CONSERVACAO ACUDES",
    698:"TRANSPORTE E CARREGO INSUMOS - C  PLANTA",
    109:"ENCHIMENTO C  SEMENTE REPLANTA SOCA",
    663:"DISTRIBUICAO DE SEMENTES P GOTEJO",
    70:"APLICACAO HERBICIDA PLANTA MANUAL - PRE-EMERGE",
    754:"SERVICOS APOIO - CST RECEBIDOS- DEP 3",
    714:"TRANSPORTE E CARREGO ATERRO",
    64:"TRANSPORTE CANA SEMENTE REPLANTIO PLANTA",
    686:"APLIC TRANSP ENCHIM COMPOSTO ORGANICO",
    133:"DESCARREGO CANA INTEIRA",
    757:"SERVICOS APOIO ADM-CST RECEBIDOS- DEP4",
    75:"APLICACAO HERBICIDA RUAS CANAIS MECAN - PLANTA",
    71:"APLICACAO HERBICIDA PLANTA MECAN - PRE-EMERGE",
    665:"TRANSPORTE DE MATERIAIS",
    634:"DISTRIBUICAO DE SEMENTE -REPLANTIO",
    187:"CARREGADEIRAS DE CANA",
    642:"TRANSPORTE LOCOMOCAO DE MAQ  IMPLEMENTOS",
    189:"TRATORES MEDIOS",
    637:"DISTRIBUICAO CANA SEMENTE -REP STANT",
    188:"TRATORES LEVES",
    51:"TRANSPORTE CANA SEMENTE",
    1005:"ACABAMENTO C  ROLO DESTORROADOR",
    764:"SERVICOS APOIO CST RECEBIDOS-PMIC",
    173:"OFICINA MECANICA TRATOR PNEUS CARREGADEIRAS",
    721:"TRANSPORTE LOCOMOCAO MAQ E IMPLEMENTOS",
    2393:"CORTE SELECAO E ENCHIMENTO CANA SEMENTE MECANIZADO",
    282:"ALIMENTACAO DISTRIBUICAO DE BAGACO",
    715:"CONSERVACAO ESTRADAS",
    2395:"DISTRIBUICAO SEMEIO MECANIZADO",
    327:"CENTRAL DE RESIDUOS",
    202:"PESQUISA E DESENVOLVIMENTO AGRICOLA",
    631:"TRANSPORTE LOCOMOCAO MAQ  E IMPLEM",
    633:"TRANSPORTE E CARREGO INSUMOS",
    630:"TRANSPORTE LOCOMOCAO MAQ  E IMPLEM",
    722:"TRANSPORTE LOCOMOCAO MAQ E IMPLEMENTOS",
    18:"TRANSP ENCH APLIC COMPOSTO ORGANICO",
    2465:"PLANTIO MECANIZADO (SULCA, ADUBACAO FUND, DISTR, SEMEIO E COBERTA CANA",
    124:"CARREGO MECANICO EQUIP  PROPRIO",
    647:"TRANSPORTE E CARREGO DE ATERRO",
    138:"TRANSBORDO CANA PICADA",
    717:"TRANSPORTE AGUA",
    19:"APLICACAO CORRETIVO SOLO MECANIZADO",
    653:"TRANSPORTE LOCOMOCAO MAQ  E IMPLEMENTOS",
    685:"TRANSPORTE DE MATERIAIS",
    664:"TRANSPORTE DE MATERIAIS",
    684:"TRANSPORTE DE MATERIAIS",
    687:"APLIC TRANSP ENCHIM COMPOSTO ORGANICO",
    2064:"PROJ.IMPLANTAÇÃO GOTEJO - DALLAS",
    656:"TRANSP ENCHIM APLIC  COMPOSTO ORGANICO",
    655:"TRANSP ENCHIM APLIC  COMPOSTO ORGANICO",
    2062:"PROJ.IMPLANTAÇÃO GOTEJO - MISSISIPI",
    2069:"PROJ.IMPLANTAÇÃO GOTEJO - POLONIA",
    2072:"PROJ. RENOVAÇÃO GOTEJO - PENSILVÂNIA",
    1721:"APLIC CORRETIVO SOLO - CANA PLANTA",
    1645:"APLICAÇÃO CORRETIVO SOLO - SOCA",
    225:"CONSERVACAO DE ESTRADAS",
    349:"ARMAZEM DE ACUCAR",
    2068:"PROJ.IMPLANTAÇÃO GOTEJO - JAVA",
    2185:"PROJ. ENCASCALHAMENTO ALGODOEIRA/SAO MIGUEL",
    658:"TRANSPORTE DE AGUA",
    657:"TRANSPORTE DE AGUA",
    692:"TRANSPORTE AGUA",
    691:"TRANSPORTE AGUA",
    1552:"MOTORISTAS ADMINISTRATIVOS",
    6:"LIMPEZA DO TERRENO",
    745:"SISTEMA IRRIGACAO - GRAVIDADE SULCO - DEPA2",
    161:"SISTEMA IRRIGACAO - GRAVIDADE POLITUBO - DEPA1",
    748:"SISTEMA IRRIGACAO FERTIRRIGACAO - GRAVIDADE SULCO-DEPA3",
    750:"SISTEMA IRRIGACAO FERTIRRIGACAO - GRAVIDADE POLITUBO - DEPA 3",
    160:"SISTEMA IRRIGACAO - GRAVIDADE SULCO - DEPA1",
    157:"SISTEMA IRRIGACAO - GRAVIDADE POLITUBO-DEPA2",
    693:"TOMBAMENTO CANA",
    694:"TOMBAMENTO CANA",
    147:"SISTEMA IRRIGACAO PIVOT LINEAR - ASPERSAO - DEPA1",
    148:"SISTEMA IRRIGACAO PIVOT CENTRAL - ASPERSAO - DEPA1",
    758:"SISTEMA FERTIRRIGACAO GOTEJAMENTO-DEPA4",
    753:"SIST  FERTIRRIGACAO GOTEJAMENTO - DEPA 3",
    158:"SIST  FERTIRRIGACAO GOTEJAMENTO - DEPA2",
    765:"SERVICOS APOIO ADM-CST RECEBIDOS-PMIG",
    135:"CORTE MECANIZADO",
    125:"CARREGO MECANICO EQUIP  TERCEIROS",
    127:"TRANSPORTE REBOQUE PALHADA - EQUIP  TERCEIROS",
    137:"TRANSPORTE CANA PICADA - EQUIP  TERCEIROS",
    123:"TRANSPORTE CANA INTEIRA - EQUIP  TERCEIROS",
    195:"TRANSBORDO CANAVIEIRO",
    105:"CONSERVACAO DE ESTRADAS - SOCA",
    302:"LIMPEZA",
    703:"APLICACAO PRE EMERG AEREA - SOCA",
    702:"APLICACAO PRE EMERG AEREA - PLANTA",
    659:"CARREGO E TRANSPORTE DE INSUMOS",
    705:"TRANSPORTE CORTE DISTRIB  PIQUETES",
    704:"TRANSPORTE CORTE DISTRIB  PIQUETES",
    2067:"PROJ.IMPLANTAÇÃO GOTEJO - AREIA",
    232:"ADMINISTRACAO INDUSTRIAL",
    79:"APLICACAO MATURADOR AEREA - PLANTA",
    98:"APLICACAO MATURADOR AEREA - SOCA",
    76:"QUEBRA LOMBO MECANIZADO - PLANTA",
    95:"QUEBRA LOMBO MECANIZADO - SOCA",
    844:"ABERTURA DE PICADA MECANIZADA",
    933:"APLICACAO INSETICIDA MECANIZADA - C  SOCA",
    932:"APLICACAO INSETICIDA MECANIZADA - C  PLANTA",
    632:"TRANSPORTE E CARREGO INSUMOS",
    81:"ADUBACAO FOLEAR AEREA - PLANTA",
    100:"ADUBACAO FOLEAR AEREA - SOCA",
    151:"ADMINISTRATIVO PREPARO DE SOLO",
    200:"APOIO AGRICOLA - MANDACARU COMERCIAL",
    226:"CONSERVACAO DE RUAS   C  PLANTA",
    227:"CONSERVACAO DE RUAS   C  SOCA",
    92:"APLICACAO HERBICIDA SOCA MECAN - POS-EMERGE",
    174:"OFICINA DE VEICULOS LEVES PESADOS",
    175:"OFICINA DE COLHEDORA DE CANA",
    177:"COA",
    176:"MANUTENÇÃO DE CAMPO - OFICINA",
    166:"OFICINA DE APOIO  TORNO PINTURA FERRAMENTARIA",
    169:"OFICINA LAVAGEM LUBRIFICACAO",
    164:"OFICINA BORRACHARIA",
    165:"OFICINA CALDEIRARIA",
    172:"OFICINA MECANICA MAQUINAS PESADAS",
    170:"MANUTENÇÃO ELETRICA - IRRIGAÇÃO",
    171:"OFICINA ELETRICA AUTOS MAQUINAS",
    73:"APLICACAO HERBICIDA PLANTA MECAN - POS-EMERGE",
    78:"APLICACAO ADUBO COBERT  PLANTA MECAN",
    103:"CONTROLE ERVAS PERENES - SOCA",
    84:"CONTROLE ERVAS PERENES - PLANTA",
    129:"REPIQUE MECANIZADO",
    40:"APLICACAO DE HERBICIDA - PRE PLANTIO",
    67:"APLICACAO DE HERBICIDA - PRE PLANTIO",
    114:"APLICACAO DE HERBICIDA PRE PLANTIO - SOCA",
    55:"APLICACAO DE HERBICIDA - PRE PLANTIO",
    132:"LIMPEZA DE ESTRADA",
    697:"QUEIMA AJUNTAMENTO ENLEIRAMENTO PALHA",
    57:"QUEIMA DE PALHA ENLEIRAMENTO - PLANTIO",
    648:"QUEIMA AJUNTAMENTO ENLEIRAMENTO PALHA",
    42:"QUEIMA DE PALHA ENLEIRAMENTO - PLANTIO",
    695:"QUEIMA AJUNTAMENTO ENLEIRAMENTO PALHA",
    23:"CULTIVO COM CANTERIZADOR",
    82:"APLICACAO INSETICIDA AEREA - PLANTA",
    101:"APLICACAO INSETICIDA AEREA - SOCA",
    867:"APLICACAO INIB  FLOR REGULADOR AEREA - PLANTA",
    868:"APLICACAO INIB FLOR REGULADOR  AEREA - SOCA",
    880:"ESTIMULADOR DE ENRAIZAMENTO MECANIZADO - C  PLANTA",
    2392:"CORTE SELECAO SEMENTES MECANIZADO",
    180:"CAMINHOES APOIO",
    181:"CAMINHOES CANAVIEIROS",
    781:"SERVICOS APOIO ADM - CST RECEBIDOS - P C",
    1631:"TRITURADOR DE PALHA",
    1399:"PROJ IMPLANT CASA DE BOMBA EB-10",
    1439:"RECOLHIMENTO PALHA CANA - A GRANEL",
    1635:"APLICACAO POS EMERGENCIA AEREA - PLANTA",
    1636:"APLICACAO POS EMERGENCIA AEREA - SOCA",
    4:"LEVANTAMENTO TOPOGRAFICO",
    2297:"APLICACAO DE VINHACA - MECANIZADA - SOCA",
    2522:"APLICACAO DE VINHACA - MECANIZADA - PLANTA",
    2457:"APLICACAO DE FUNGICIDA E ENRAIZADOR MECANIZADO",
    2498:"APLICACAO DESSECACAO AEREA - PLANTA",
    2499:"APLICACAO DESSECACAO AEREA - SOCA",
    2518:"CONTRLE BIOLOGICO AEREA C SOCA",
    2517:"CONTROLE BIOLOGICO AEREA C PLANTA",
    2539:"CULTIVO MINIMO MECANIZADO - CANA SOCA",
    2538:"CULTIVO MINIMO MECANIZADO - CANA PLANTA",
    2615:"APLICACAO INSETICIDA E FOLIAR AEREA DRONE PULG C SOCA",
    2610:"APLICACAO INSETICIDA E FOLIAR AEREA DRONE PULG C PLANTA",
    2611:"APLICACAO INSETICIDA E FOLIAR AEREA DRONE CIGA C PLANTA",
    2616:"APLICACAO INSETICIDA E FOLIAR AEREA DRONE CIGA C SOCA",
    2612:"APLICACAO INSETICIDA E FOLIAR AEREA DRONE DIAT C PLANTA",
    2617:"APLICACAO INSETICIDA E FOLIAR AEREA DRONE LIAT C SOCA",
    2613:"APLICACAO INSETICIDA E FOLIAR AEREA DRONE LAGA C PLANTA",
    2618:"APLICACAO INSETICIDA E FOLIAR AEREA DRONE LAGA C SOCA",
    2619:"APLICACAO POS EMERG E FOLIAR AREA DRONE C SOCA",
    2614:"APLICACAO POS EMERG E FOLIAR AREA DRONE C PLANTA",
    2640:"LEVANTAMENTO FOTOGRAFICO C/DRONE -C SOCA",
    2639:"LEVANTAMENTO FOTOGRAFICO C/DRONE - C PLANTA",
    2686:"REPLANTIO MECANIZADO",
    61:"REPLANTIO CANA PLANTA",
    191:"MAQUINAS PESADAS",
    2214:"PROJ. CAIXAS DE VALVULAS E VENTOSAS - SENTO SE",
    2215:"PROJ. CAIXAS DE VALVULAS E VENTOSAS - IRECE",
    261:"EMPACOTAMENTO",


};

const searchInput = document.getElementById("searchInput");
const tabela = document.querySelector("#operacoesTable tbody");
const tituloOperacao = document.getElementById("tituloOperacao");
const objetosCustoTable = document.querySelector("#objetosCustoTable tbody");
const salvarBtn = document.getElementById("salvarBtn");

let operacaoSelecionada = null;

function salvarEstadoBusca() {
    const termo = searchInput.value;
    localStorage.setItem("ultimaBusca", termo);
}

function restaurarEstadoBusca() {
    const termo = localStorage.getItem("ultimaBusca") || "";
    searchInput.value = termo;
}

function filtrarOperacoes() {
    salvarEstadoBusca();

    const termo = searchInput.value.toLowerCase();

    const filtradas = operacoes.filter(op =>
        op.nome.toLowerCase().includes(termo) ||
        op.id.toString() === (termo)
    );

    renderizarTabela(filtradas);
    limparSelecao();
}



function renderizarTabela(lista) {
    tabela.innerHTML = "";
    lista.forEach(op => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${op.id}</td><td>${op.nome}</td>`;
        tr.addEventListener("click", () => selecionarOperacao(op));
        tabela.appendChild(tr);
    });
}

function selecionarOperacao(op) {
    operacaoSelecionada = op;
    tituloOperacao.textContent = "Operação: " + op.nome;
    objetosCustoTable.innerHTML = "";
    op.objetosCusto.forEach(codigo => {
        const descricao = objetosCustoDescricao[codigo] || "Descrição não encontrada";
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${codigo}</td><td>${descricao}</td>`;
        objetosCustoTable.appendChild(tr);
    });
}


function limparSelecao() {
    operacaoSelecionada = null;
    tituloOperacao.textContent = "Nenhuma Operação Selecionada";
    objetosCustoTable.innerHTML = "";
}

function salvarOperacao() {
    if (!operacaoSelecionada) return;
    const salvas = JSON.parse(localStorage.getItem("minhasOperacoes") || "[]");
    if (!salvas.find(o => o.id === operacaoSelecionada.id)) {
        salvas.push(operacaoSelecionada);
        localStorage.setItem("minhasOperacoes", JSON.stringify(salvas));
        alert("Operação salva!");
    } else {
        alert("Operação já está salva.");
    }
}

searchInput.addEventListener("input", filtrarOperacoes);
salvarBtn.addEventListener("click", salvarOperacao);

restaurarEstadoBusca();
filtrarOperacoes();


document.addEventListener("DOMContentLoaded", () => {
    const botaoNavegar = document.getElementById("bt_nav");

    if (botaoNavegar) {
        botaoNavegar.addEventListener("click", () => {
            const paginaAtual = window.location.pathname;

            if (paginaAtual.includes("index.html")) {
                window.location.href = "minhas-operacoes.html";
            } else if (paginaAtual.includes("minhas-operacoes.html")) {
                window.location.href = "index.html";
            }
        });
    }
});
