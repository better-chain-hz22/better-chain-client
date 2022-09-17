import {RiskType} from "../../meta";

export const mock_data = {
    alerts: [
        {
            id: 1,
            position: [0,0],
            radius: 5,
        }
    ],
    orders_in_danger: [
        {
            id: "0015810430",
            pol_id: "SHA",
            pod_id: "GOA",
            container: "TEMU1849451",
            route: [

            ]
        },
        {
            id: "0015810430",
            pol_id: "NGB",
            pod_id: "RTM",
            container: "GLDU3889422",
            route: [

            ]
        }
    ],
    sample_route: [
        {
            port_id: "xx",
            position: []
        },
        {
            port_id: "xx",
            position: []
        }
    ],
    recent_alerts: [
        {
            "id": "JPAIO",
            "port_name": "Aioi",
            "position": [
                34.78907,
                134.46388
            ],
            "alerts": [
                {
                    type: RiskType.NATURAL_WIND,
                    probability: 0.9,
                    severity: 0.9,
                    duration: {

                    }
                }
            ]
        },
        {
            "id": "USPHC",
            "port_name": "Pointe A La Hache",
            "position": [
                29.57611,
                -89.79325
            ]
        },
        {
            "id": "CNSDG",
            "port_name": "Shuidong",
            "position": [
                21.48051,
                111.0627
            ]
        },
        {
            "id": "ESRIB",
            "port_name": "Ribadeo",
            "position": [
                43.53644,
                -7.03579
            ]
        },
    ],
    source_ports: [{"id": "MYPKG", "port_name": "Port Kelang", "position": [3.02802, 101.36368]}, {"id": "CNTXG", "port_name": "Tianjinxingang", "position": [39.08764, 117.23743]}, {"id": "JPNGO", "port_name": "Nagoya", "position": [35.07877, 136.86533]}, {"id": "INMAA", "port_name": "Chennai", "position": [13.08638, 80.29179]}, {"id": "JPTYO", "port_name": "Tokyo", "position": [35.63683, 139.80021]}, {"id": "PKBQM", "port_name": "Muhammad Bin Qasim", "position": [24.76535, 67.3265]}, {"id": "TWKHH", "port_name": "Kaohsiung", "position": [22.60863, 120.28511]}, {"id": "THBKK", "port_name": "Bangkok", "position": [13.70734, 100.56578]}, {"id": "VNVUT", "port_name": "Vung Tau", "position": [10.33871, 107.07185]}, {"id": "MGTMM", "port_name": "Toamasina", "position": [-18.15439, 49.42657]}, {"id": "KEMBA", "port_name": "Mombasa", "position": [-4.05997, 39.64962]}, {"id": "CAMTR", "port_name": "Montreal", "position": [45.50598, -73.55447]}, {"id": "NZNSN", "port_name": "Nelson", "position": [-41.26191, 173.27736]}, {"id": "HKHKG", "port_name": "Hong Kong", "position": [22.30198, 114.16482]}, {"id": "CNSWA", "port_name": "Shantou", "position": [23.3518, 116.73699]}, {"id": "CNHUA", "port_name": "Huangpu", "position": [23.09566, 113.43781]}, {"id": "INMUN", "port_name": "Mundra", "position": [22.74313, 69.69478]}, {"id": "CNTAO", "port_name": "Qingdao", "position": [36.05714, 120.32468]}, {"id": "CLSAI", "port_name": "San Antonio", "position": [-33.59777, -71.61743]}, {"id": "ZACPT", "port_name": "Cape Town", "position": [-33.91804, 18.45586]}, {"id": "CNDLC", "port_name": "Dalian", "position": [38.93866, 121.6025]}, {"id": "MATNG", "port_name": "Tangier", "position": [35.78242, -5.80628]}, {"id": "MYPGU", "port_name": "Pasir Gudang", "position": [1.43695, 103.90183]}, {"id": "HNPCR", "port_name": "Puerto Cortes", "position": [15.84178, -87.9404]}, {"id": "PHMNL", "port_name": "Manila", "position": [14.59804, 120.96049]}, {"id": "CNYTN", "port_name": "Yantian", "position": [22.58089, 114.26322]}, {"id": "NZTRG", "port_name": "Tauranga", "position": [-37.65752, 176.18293]}, {"id": "KRPUS", "port_name": "Pusan", "position": [35.1243, 129.06014]}, {"id": "IDJKT", "port_name": "Jakarta", "position": [-6.10434, 106.80256]}, {"id": "CNWHI", "port_name": "Wuhu", "position": [31.33411, 118.35296]}, {"id": "CNNKG", "port_name": "Nanjing", "position": [32.08987, 118.72817]}, {"id": "PECLL", "port_name": "Callao", "position": [-12.04873, -77.14381]}, {"id": "CLSVE", "port_name": "San Vicente", "position": [-36.72597, -73.13444]}, {"id": "ECGYE", "port_name": "Guayaquil", "position": [-2.23237, -79.88674]}, {"id": "MACAS", "port_name": "Casablanca", "position": [33.60297, -7.59609]}, {"id": "CNXMN", "port_name": "Xiamen", "position": [24.46042, 118.06714]}, {"id": "CNSHA", "port_name": "Shanghai", "position": [31.22847, 121.49627]}, {"id": "MVMLE", "port_name": "Male", "position": [4.1709, 73.50295]}, {"id": "CNFOC", "port_name": "Fuzhou", "position": [26.03987, 119.3652]}, {"id": "CNZJG", "port_name": "Zhangjiagang", "position": [31.96409, 120.4034]}, {"id": "CNNGB", "port_name": "Ningbo", "position": [29.87347, 121.55539]}, {"id": "CNJMN", "port_name": "Jiangmen", "position": [22.60356, 113.12346]}, {"id": "IDSRG", "port_name": "Semarang", "position": [-6.9467, 110.42515]}, {"id": "CNTSN", "port_name": "Tianjin", "position": [39.13367, 117.18866]}, {"id": "UYMVD", "port_name": "Montevideo", "position": [-34.89977, -56.1958]}, {"id": "IDSUB", "port_name": "Surabaya", "position": [-7.20203, 112.73319]}, {"id": "THLCH", "port_name": "Laem Chabang", "position": [13.06917, 100.90117]}, {"id": "VNHPH", "port_name": "Haiphong", "position": [20.86793, 106.6901]}, {"id": "JPYOK", "port_name": "Yokohama", "position": [35.43521, 139.67625]}, {"id": "VNUIH", "port_name": "Qui Nhon", "position": [13.77826, 109.24626]}, {"id": "CNLYG", "port_name": "Lianyungang", "position": [34.73368, 119.45296]}, {"id": "VNDAD", "port_name": "Da Nang", "position": [16.1204, 108.21733]}, {"id": "JPUKB", "port_name": "Kobe", "position": [34.68803, 135.2092]}, {"id": "PKKHI", "port_name": "Karachi", "position": [24.83646, 66.97609]}, {"id": "CNZHA", "port_name": "Zhanjiang", "position": [21.18239, 110.39778]}, {"id": "TWTXG", "port_name": "Taichung", "position": [24.22093, 120.49771]}, {"id": "VNSGN", "port_name": "Saigon", "position": [10.75853, 106.7181]}, {"id": "INTUT", "port_name": "Tuticorin", "position": [8.75636, 78.1941]}, {"id": "INCOK", "port_name": "Cochin", "position": [9.96772, 76.2673]}, {"id": "LKCMB", "port_name": "Colombo", "position": [6.94119, 79.8428]}, {"id": "ZAPLZ", "port_name": "Port Elizabeth", "position": [-33.96351, 25.62807]}, {"id": "ZADUR", "port_name": "Durban", "position": [-29.88108, 31.01967]}, {"id": "BDCGP", "port_name": "Chittagong Port", "position": [22.30146, 91.79599]}],
    destination_ports: [
        {
            "id": "ITGOA",
            "port_name": "Genova",
            "position": [
                44.40205,
                8.92996
            ]
        },
        {
            "id": "DEHAM",
            "port_name": "Hamburg",
            "position": [
                53.53577,
                9.98743
            ]
        },
        {
            "id": "DEDUI",
            "port_name": "Duisburg",
            "position": [
                51.45086,
                6.76337
            ]
        },
        {
            "id": "CHBSL",
            "port_name": "Basel",
            "position": [
                47.56192,
                7.58634
            ]
        },
        {
            "id": "ITSPE",
            "port_name": "La Spezia",
            "position": [
                44.10148,
                9.81724
            ]
        },
        {
            "id": "ESVLC",
            "port_name": "Valencia",
            "position": [
                39.45913,
                -0.323
            ]
        },
        {
            "id": "NLRTM",
            "port_name": "Rotterdam",
            "position": [
                51.88811,
                4.45693
            ]
        },
        {
            "id": "BEANR",
            "port_name": "Antwerpen (Antwerp)",
            "position": [
                51.2495,
                4.38621
            ]
        }
    ]
}
