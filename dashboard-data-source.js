
const weeks = [
  {date:'2025-05-11', wEvents:2112, wPr:365000, wVol:46000, ukEvents:818, ukPr:222000, ukVol:29000, barcodes:32196, newPr:19667, newVol:2300, ukEvChg:-1.8, ukPrChg:-3.5, ukPerChg:-1.8, m25:2766,m50:1531,m100:811,m500:24, m150:548,m200:388,m300:186,m350:144,m400:72,m450:53,m600:7,m700:0,m800:0,m900:0,m1000:0, v25:378,v50:245,v100:140, m250:null, v250:null, v500:null, v1000:null, secondVolWW:null, hatTrickVolWW:null, pools:null},
  {date:'2025-05-18', wEvents:2100, wPr:356000, wVol:46000, ukEvents:822, ukPr:219000, ukVol:29000, barcodes:31212, newPr:19322, newVol:2100, ukEvChg:0.5, ukPrChg:-1.3, ukPerChg:-1.8, m25:2555,m50:1370,m100:818,m500:22, m150:524,m200:369,m300:158,m350:114,m400:58,m450:47,m600:4,m700:1,m800:0,m900:0,m1000:0, v25:387,v50:238,v100:131, m250:null, v250:null, v500:null, v1000:null, secondVolWW:null, hatTrickVolWW:null, pools:null},
  {date:'2025-05-25', wEvents:2095, wPr:342000, wVol:41000, ukEvents:815, ukPr:201000, ukVol:25000, barcodes:27480, newPr:17165, newVol:1900, ukEvChg:-0.9, ukPrChg:-8.0, ukPerChg:-7.2, m25:2388,m50:1344,m100:754,m500:22, m150:529,m200:366,m300:198,m350:119,m400:77,m450:36,m600:5,m700:0,m800:0,m900:0,m1000:0, v25:339,v50:215,v100:118, m250:null, v250:null, v500:null, v1000:null, secondVolWW:null, hatTrickVolWW:null, pools:null},
  {date:'2025-06-01', wEvents:2113, wPr:367000, wVol:47000, ukEvents:823, ukPr:225000, ukVol:30000, barcodes:31260, newPr:18975, newVol:2400, ukEvChg:1.0, ukPrChg:11.7, ukPerChg:10.6, m25:2650,m50:1481,m100:793,m500:23, m150:523,m200:387,m300:180,m350:121,m400:93,m450:37,m600:7,m700:2,m800:0,m900:0,m1000:0, v25:410,v50:252,v100:144, m250:null, v250:null, v500:null, v1000:null, secondVolWW:null, hatTrickVolWW:null, pools:null},
  {date:'2025-06-08', wEvents:2091, wPr:325000, wVol:46000, ukEvents:802, ukPr:193000, ukVol:29000, barcodes:28101, newPr:15723, newVol:2100, ukEvChg:-2.6, ukPrChg:-14.3, ukPerChg:-12.1, m25:2329,m50:1328,m100:777,m500:25, m150:524,m200:335,m300:163,m350:112,m400:78,m450:46,m600:12,m700:1,m800:0,m900:0,m1000:0, v25:384,v50:247,v100:127, m250:null, v250:null, v500:null, v1000:null, secondVolWW:null, hatTrickVolWW:null, pools:null},
  {date:'2025-06-15', wEvents:2100, wPr:336000, wVol:46000, ukEvents:793, ukPr:197000, ukVol:29000, barcodes:26340, newPr:16339, newVol:2100, ukEvChg:-1.1, ukPrChg:2.1, ukPerChg:3.3, m25:2332,m50:1413,m100:780,m500:39, m150:522,m200:377,m300:175,m350:88,m400:70,m450:43,m600:11,m700:4,m800:0,m900:0,m1000:0, v25:397,v50:217,v100:128, m250:null, v250:null, v500:null, v1000:null, secondVolWW:null, hatTrickVolWW:null, pools:null},
  {date:'2025-06-22', wEvents:2113, wPr:320000, wVol:45000, ukEvents:804, ukPr:185000, ukVol:28000, barcodes:24291, newPr:14856, newVol:2200, ukEvChg:1.4, ukPrChg:-5.9, ukPerChg:-7.2, m25:2165,m50:1372,m100:762,m500:30, m150:494,m200:346,m300:168,m350:112,m400:78,m450:57,m600:7,m700:2,m800:0,m900:0,m1000:0, v25:365,v50:249,v100:153, m250:null, v250:null, v500:null, v1000:null, secondVolWW:null, hatTrickVolWW:null, pools:null},
  {date:'2025-06-29', wEvents:2109, wPr:324000, wVol:46000, ukEvents:799, ukPr:199000, ukVol:29000, barcodes:25024, newPr:15426, newVol:2200, ukEvChg:-0.6, ukPrChg:7.4, ukPerChg:8.1, m25:2360,m50:1364,m100:796,m500:34, m150:497,m200:361,m300:185,m350:135,m400:80,m450:32,m600:7,m700:1,m800:0,m900:0,m1000:0, v25:381,v50:278,v100:125, m250:null, v250:null, v500:null, v1000:null, secondVolWW:null, hatTrickVolWW:null, pools:null},
  {date:'2025-07-06', wEvents:2112, wPr:326000, wVol:46000, ukEvents:805, ukPr:197000, ukVol:29000, barcodes:24817, newPr:15236, newVol:2100, ukEvChg:0.8, ukPrChg:-1.0, ukPerChg:-1.8, m25:2285,m50:1319,m100:750,m500:18, m150:507,m200:354,m300:181,m350:114,m400:80,m450:47,m600:11,m700:1,m800:0,m900:0,m1000:0, v25:385,v50:243,v100:125, m250:null, v250:null, v500:null, v1000:null, secondVolWW:null, hatTrickVolWW:null, pools:null},
  {date:'2025-07-13', wEvents:2106, wPr:319000, wVol:45000, ukEvents:788, ukPr:182000, ukVol:28000, barcodes:22578, newPr:14598, newVol:2100, ukEvChg:-2.1, ukPrChg:-7.6, ukPerChg:-5.6, m25:2259,m50:1292,m100:752,m500:27, m150:528,m200:405,m300:178,m350:108,m400:79,m450:50,m600:8,m700:2,m800:1,m900:0,m1000:0, v25:359,v50:221,v100:141, m250:null, v250:null, v500:null, v1000:null, secondVolWW:null, hatTrickVolWW:null, pools:null},
  {date:'2025-07-20', wEvents:2127, wPr:308000, wVol:45000, ukEvents:801, ukPr:168000, ukVol:28000, barcodes:24459, newPr:14416, newVol:1900, ukEvChg:1.6, ukPrChg:-7.4, ukPerChg:-8.9, m25:2096,m50:1281,m100:763,m500:25, m150:460,m200:388,m300:165,m350:115,m400:89,m450:41,m600:9,m700:2,m800:0,m900:0,m1000:0, v25:337,v50:256,v100:145, m250:null, v250:null, v500:null, v1000:null, secondVolWW:null, hatTrickVolWW:null, pools:null},
  {date:'2025-08-03', wEvents:2115, wPr:340000, wVol:46000, ukEvents:817, ukPr:214000, ukVol:29000, barcodes:49950, newPr:33066, newVol:4100, ukEvChg:2.0, ukPrChg:27.0, ukPerChg:24.6, m25:4756,m50:2841,m100:1532,m500:66, m150:1011,m200:771,m300:397,m350:218,m400:154,m450:73,m600:17,m700:2,m800:1,m900:0,m1000:0, v25:740,v50:485,v100:262, holidayAggregate:true, weeksSpanned:2, m250:null, v250:null, v500:null, v1000:null, secondVolWW:null, hatTrickVolWW:null, pools:null},
  {date:'2025-08-10', wEvents:2128, wPr:344000, wVol:46000, ukEvents:820, ukPr:216000, ukVol:29000, barcodes:25259, newPr:16487, newVol:2100, ukEvChg:0.4, ukPrChg:1.0, ukPerChg:0.6, m25:2428,m50:1473,m100:779,m500:32, m150:535,m200:386,m300:200,m350:128,m400:78,m450:33,m600:9,m700:3,m800:0,m900:2,m1000:0, v25:357,v50:221,v100:130, m250:null, v250:null, v500:null, v1000:null, secondVolWW:null, hatTrickVolWW:null, pools:null},
  {date:'2025-08-17', wEvents:2144, wPr:352000, wVol:46000, ukEvents:822, ukPr:211000, ukVol:29000, barcodes:24038, newPr:16279, newVol:2100, ukEvChg:0.2, ukPrChg:-2.1, ukPerChg:-2.4, m25:2515,m50:1489,m100:813,m500:44, m150:526,m200:382,m300:195,m350:119,m400:94,m450:45,m600:8,m700:3,m800:0,m900:0,m1000:0, v25:383,v50:216,v100:128, m250:null, v250:null, v500:null, v1000:null, secondVolWW:null, hatTrickVolWW:null, pools:null},
  {date:'2025-08-24', wEvents:2134, wPr:362000, wVol:45000, ukEvents:816, ukPr:216000, ukVol:28000, barcodes:25353, newPr:17208, newVol:2100, ukEvChg:-0.7, ukPrChg:2.0, ukPerChg:2.8, m25:2653,m50:1446,m100:815,m500:41, m150:532,m200:418,m300:179,m350:123,m400:80,m450:57,m600:4,m700:0,m800:0,m900:0,m1000:0, v25:360,v50:206,v100:120, m250:null, v250:null, v500:null, v1000:null, secondVolWW:null, hatTrickVolWW:null, pools:null},
  {date:'2025-08-31', wEvents:2155, wPr:363000, wVol:47000, ukEvents:833, ukPr:227000, ukVol:30000, barcodes:26136, newPr:16983, newVol:1900, ukEvChg:2.1, ukPrChg:5.1, ukPerChg:2.9, m25:2653,m50:1512,m100:845,m500:26, m150:591,m200:379,m300:196,m350:110,m400:67,m450:48,m600:3,m700:2,m800:1,m900:0,m1000:0, v25:414,v50:244,v100:133, m250:null, v250:null, v500:null, v1000:null, secondVolWW:null, hatTrickVolWW:null, pools:null},
  {date:'2025-09-07', wEvents:2155, wPr:355000, wVol:48000, ukEvents:832, ukPr:213000, ukVol:30000, barcodes:27569, newPr:16766, newVol:2400, ukEvChg:-0.1, ukPrChg:-6.3, ukPerChg:-6.2, m25:2509,m50:1420,m100:810,m500:27, m150:518,m200:405,m300:184,m350:125,m400:102,m450:44,m600:8,m700:4,m800:0,m900:0,m1000:0, v25:397,v50:221,v100:146, m250:null, v250:null, v500:null, v1000:null, secondVolWW:null, hatTrickVolWW:null, pools:null},
  {date:'2025-09-14', wEvents:2158, wPr:342000, wVol:47000, ukEvents:822, ukPr:194000, ukVol:29000, barcodes:26455, newPr:15954, newVol:2400, ukEvChg:-1.2, ukPrChg:-8.7, ukPerChg:-7.6, m25:2480,m50:1402,m100:805,m500:28, m150:532,m200:347,m300:188,m350:156,m400:59,m450:42,m600:9,m700:1,m800:0,m900:0,m1000:0, v25:349,v50:246,v100:140, m250:null, v250:null, v500:null, v1000:null, secondVolWW:null, hatTrickVolWW:null, pools:null},
  {date:'2025-09-21', wEvents:2183, wPr:346000, wVol:47000, ukEvents:846, ukPr:192000, ukVol:29000, barcodes:26797, newPr:16358, newVol:2300, ukEvChg:2.9, ukPrChg:-0.7, ukPerChg:-3.5, m25:2523,m50:1397,m100:825,m500:24, m150:567,m200:376,m300:173,m350:139,m400:76,m450:44,m600:6,m700:4,m800:1,m900:0,m1000:0, v25:405,v50:230,v100:139, m250:null, v250:null, v500:null, v1000:null, secondVolWW:null, hatTrickVolWW:null, pools:null},
  {date:'2025-09-28', wEvents:2166, wPr:363000, wVol:48000, ukEvents:836, ukPr:204000, ukVol:31000, barcodes:27584, newPr:17706, newVol:2400, ukEvChg:-1.2, ukPrChg:5.7, ukPerChg:7.0, m25:2559,m50:1486,m100:827,m500:34, m150:536,m200:393,m300:202,m350:125,m400:98,m450:51,m600:11,m700:1,m800:0,m900:0,m1000:0, v25:421,v50:250,v100:141, m250:313, v250:46, v500:1, v1000:0, secondVolWW:1621, hatTrickVolWW:1278, pools:{p1_9:5148153,p10_24:928891,p25_49:418519,p50_99:264540,p100_149:111014,p150_199:55125,p200_249:31693,p250_299:21080,p300_349:12683,p350_399:7379,p400_449:4418,p450_499:2403,p500_599:2128,p600_699:507,p700_799:96,p800_899:13,p900_999:4}},
  {date:'2025-10-05', wEvents:1826, wPr:287000, wVol:41000, ukEvents:547, ukPr:130000, ukVol:23000, barcodes:24723, newPr:12237, newVol:2100, ukEvChg:-34.6, ukPrChg:-36.1, ukPerChg:-2.3, m25:2029,m50:1133,m100:646,m500:24, m150:446,m200:335,m300:189,m350:130,m400:77,m450:62,m600:3,m700:2,m800:1,m900:0,m1000:0, v25:331,v50:209,v100:112, m250:264, v250:43, v500:4, v1000:1, secondVolWW:1430, hatTrickVolWW:1066, pools:{p1_9:5156829,p10_24:930423,p25_49:419415,p50_99:265027,p100_149:111214,p150_199:55236,p200_249:31764,p250_299:21155,p300_349:12742,p350_399:7432,p400_449:4433,p450_499:2441,p500_599:2149,p600_699:508,p700_799:97,p800_899:14,p900_999:4}},
  {date:'2025-10-12', wEvents:2192, wPr:366000, wVol:48000, ukEvents:852, ukPr:204000, ukVol:31000, barcodes:28288, newPr:17569, newVol:2400, ukEvChg:55.8, ukPrChg:56.6, ukPerChg:0.5, m25:2633,m50:1464,m100:797,m500:37, m150:530,m200:378,m300:239,m350:145,m400:87,m450:55,m600:5,m700:3,m800:1,m900:0,m1000:0, v25:423,v50:251,v100:121, m250:313, v250:41, v500:7, v1000:0, secondVolWW:1622, hatTrickVolWW:1291, pools:{p1_9:5169560,p10_24:932628,p25_49:420584,p50_99:265694,p100_149:111481,p150_199:55388,p200_249:31829,p250_299:21229,p300_349:12836,p350_399:7490,p400_449:4465,p450_499:2459,p500_599:2181,p600_699:510,p700_799:99,p800_899:15,p900_999:4}},
  {date:'2025-10-19', wEvents:2212, wPr:368000, wVol:48000, ukEvents:853, ukPr:208000, ukVol:30000, barcodes:28632, newPr:17848, newVol:2500, ukEvChg:0.1, ukPrChg:1.8, ukPerChg:1.7, m25:2653,m50:1609,m100:917,m500:34, m150:555,m200:439,m300:216,m350:128,m400:91,m450:55,m600:6,m700:1,m800:0,m900:0,m1000:0, v25:374,v50:227,v100:130, m250:311, v250:40, v500:6, v1000:0, secondVolWW:1722, hatTrickVolWW:1354, pools:{p1_9:5182454,p10_24:934929,p25_49:421628,p50_99:266386,p100_149:111843,p150_199:55504,p200_249:31957,p250_299:21324,p300_349:12924,p350_399:7527,p400_449:4501,p450_499:2480,p500_599:2209,p600_699:515,p700_799:100,p800_899:15,p900_999:4}},
  {date:'2025-10-26', wEvents:2210, wPr:368000, wVol:48000, ukEvents:855, ukPr:205000, ukVol:30000, barcodes:26086, newPr:17037, newVol:2200, ukEvChg:0.2, ukPrChg:-1.4, ukPerChg:-1.6, m25:2706,m50:1655,m100:823,m500:36, m150:562,m200:392,m300:194,m350:128,m400:78,m450:52,m600:8,m700:2,m800:1,m900:0,m1000:0, v25:405,v50:247,v100:124, m250:281, v250:51, v500:2, v1000:0, secondVolWW:1677, hatTrickVolWW:1342, pools:{p1_9:5194690,p10_24:937024,p25_49:422679,p50_99:267218,p100_149:112104,p150_199:55674,p200_249:32068,p250_299:21411,p300_349:12990,p350_399:7577,p400_449:4527,p450_499:2496,p500_599:2237,p600_699:521,p700_799:101,p800_899:16,p900_999:4}},
  {date:'2025-11-02', wEvents:2151, wPr:344000, wVol:48000, ukEvents:838, ukPr:195000, ukVol:31000, barcodes:21625, newPr:13533, newVol:2200, ukEvChg:-2.0, ukPrChg:-5.0, ukPerChg:-3.1, m25:2512,m50:1510,m100:882,m500:37, m150:560,m200:385,m300:217,m350:133,m400:88,m450:52,m600:6,m700:1,m800:0,m900:0,m1000:0, v25:403,v50:252,v100:128, m250:303, v250:42, v500:5, v1000:0, secondVolWW:1512, hatTrickVolWW:1380, pools:{p1_9:5203872,p10_24:938863,p25_49:423681,p50_99:267846,p100_149:112426,p150_199:55849,p200_249:32150,p250_299:21497,p300_349:13074,p350_399:7622,p400_449:4563,p450_499:2511,p500_599:2268,p600_699:526,p700_799:102,p800_899:16,p900_999:4}},
  {date:'2025-11-09', wEvents:2211, wPr:371000, wVol:49000, ukEvents:851, ukPr:215000, ukVol:30000, barcodes:25835, newPr:16532, newVol:2200, ukEvChg:1.6, ukPrChg:10.7, ukPerChg:9.0, m25:2648,m50:1565,m100:941,m500:32, m150:528,m200:440,m300:211,m350:133,m400:90,m450:46,m600:9,m700:0,m800:0,m900:0,m1000:0, v25:370,v50:273,v100:149, m250:313, v250:34, v500:4, v1000:0, secondVolWW:1586, hatTrickVolWW:1313, pools:{p1_9:5215613,p10_24:941006,p25_49:424764,p50_99:268470,p100_149:112839,p150_199:55937,p200_249:32277,p250_299:21599,p300_349:13152,p350_399:7665,p400_449:4607,p450_499:2525,p500_599:2291,p600_699:535,p700_799:102,p800_899:16,p900_999:4}},
  {date:'2025-11-16', wEvents:2076, wPr:319000, wVol:45000, ukEvents:758, ukPr:169000, ukVol:28000, barcodes:23752, newPr:13458, newVol:2100, ukEvChg:-10.9, ukPrChg:-21.6, ukPerChg:-12.0, m25:2406,m50:1405,m100:812,m500:25, m150:530,m200:367,m300:185,m350:138,m400:80,m450:62,m600:13,m700:3,m800:0,m900:0,m1000:0, v25:355,v50:222,v100:138, m250:280, v250:38, v500:2, v1000:0, secondVolWW:1464, hatTrickVolWW:1185, pools:{p1_9:5225146,p10_24:942525,p25_49:425765,p50_99:269063,p100_149:113121,p150_199:56100,p200_249:32364,p250_299:21694,p300_349:13199,p350_399:7723,p400_449:4625,p450_499:2562,p500_599:2303,p600_699:545,p700_799:105,p800_899:16,p900_999:4}},
  {date:'2025-11-23', wEvents:2155, wPr:315000, wVol:47000, ukEvents:803, ukPr:158000, ukVol:29000, barcodes:19371, newPr:11937, newVol:2100, ukEvChg:5.9, ukPrChg:-6.6, ukPerChg:-11.8, m25:2302,m50:1418,m100:820,m500:40, m150:454,m200:399,m300:201,m350:137,m400:96,m450:63,m600:10,m700:3,m800:1,m900:0,m1000:0, v25:352,v50:254,v100:135, m250:333, v250:51, v500:1, v1000:0, secondVolWW:1533, hatTrickVolWW:1240, pools:{p1_9:5233229,p10_24:944077,p25_49:426649,p50_99:269661,p100_149:113487,p150_199:56155,p200_249:32430,p250_299:21826,p300_349:13263,p350_399:7764,p400_449:4658,p450_499:2585,p500_599:2333,p600_699:552,p700_799:107,p800_899:17,p900_999:4}},
  {date:'2025-11-30', wEvents:2170, wPr:294000, wVol:47000, ukEvents:852, ukPr:157000, ukVol:30000, barcodes:18140, newPr:10669, newVol:2100, ukEvChg:6.1, ukPrChg:-0.2, ukPerChg:-5.9, m25:2083,m50:1313,m100:830,m500:27, m150:505,m200:390,m300:196,m350:125,m400:100,m450:59,m600:10,m700:0,m800:0,m900:0,m1000:0, v25:399,v50:261,v100:139, m250:303, v250:51, v500:3, v1000:0, secondVolWW:1487, hatTrickVolWW:1299, pools:{p1_9:5240382,p10_24:945510,p25_49:427419,p50_99:270144,p100_149:113812,p150_199:56270,p200_249:32517,p250_299:21933,p300_349:13334,p350_399:7789,p400_449:4699,p450_499:2617,p500_599:2350,p600_699:562,p700_799:107,p800_899:17,p900_999:4}},
  {date:'2025-12-07', wEvents:2163, wPr:292000, wVol:48000, ukEvents:821, ukPr:149000, ukVol:30000, barcodes:15295, newPr:9741, newVol:2000, ukEvChg:2.2, ukPrChg:-5.6, ukPerChg:-7.7, m25:2128,m50:1356,m100:828,m500:41, m150:501,m200:405,m300:216,m350:148,m400:107,m450:49,m600:10,m700:3,m800:0,m900:0,m1000:0, v25:382,v50:233,v100:115, m250:296, v250:44, v500:7, v1000:0, secondVolWW:1464, hatTrickVolWW:1233, pools:{p1_9:5246733,p10_24:946772,p25_49:428191,p50_99:270672,p100_149:114139,p150_199:56366,p200_249:32626,p250_299:22013,p300_349:13402,p350_399:7830,p400_449:4757,p450_499:2625,p500_599:2381,p600_699:569,p700_799:110,p800_899:17,p900_999:4}},
  {date:'2025-12-14', wEvents:2158, wPr:305000, wVol:48000, ukEvents:846, ukPr:172000, ukVol:30000, barcodes:15661, newPr:9735, newVol:1800, ukEvChg:3.0, ukPrChg:15.4, ukPerChg:12.0, m25:2270,m50:1506,m100:919,m500:33, m150:521,m200:463,m300:242,m350:155,m400:90,m450:48,m600:8,m700:3,m800:0,m900:0,m1000:0, v25:391,v50:246,v100:140, m250:330, v250:42, v500:3, v1000:0, secondVolWW:1329, hatTrickVolWW:1231, pools:{p1_9:5252858,p10_24:948112,p25_49:428955,p50_99:271259,p100_149:114537,p150_199:56424,p200_249:32759,p250_299:22101,p300_349:13489,p350_399:7895,p400_449:4799,p450_499:2640,p500_599:2406,p600_699:574,p700_799:113,p800_899:17,p900_999:4}},
  {date:'2025-12-21', wEvents:2185, wPr:347000, wVol:46000, ukEvents:847, ukPr:190000, ukVol:29000, barcodes:18123, newPr:12260, newVol:1600, ukEvChg:0.1, ukPrChg:10.9, ukPerChg:10.7, m25:2595,m50:1741,m100:1020,m500:35, m150:610,m200:493,m300:221,m350:153,m400:98,m450:66,m600:12,m700:4,m800:1,m900:0,m1000:0, v25:429,v50:280,v100:138, m250:350, v250:49, v500:5, v1000:0, secondVolWW:1358, hatTrickVolWW:1123, pools:{p1_9:5260973,p10_24:949662,p25_49:429809,p50_99:271980,p100_149:114947,p150_199:56541,p200_249:32902,p250_299:22230,p300_349:13557,p350_399:7950,p400_449:4831,p450_499:2671,p500_599:2429,p600_699:582,p700_799:116,p800_899:18,p900_999:4}},
  {date:'2026-01-11', wEvents:1676, wPr:318000, wVol:36000, ukEvents:485, ukPr:140000, ukVol:20000, barcodes:110002, newPr:69301, newVol:6800, ukEvChg:-42.7, ukPrChg:-26.2, ukPerChg:28.8, m25:10590,m50:6579,m100:3904,m500:165, m150:2418,m200:1758,m300:933,m350:616,m400:418,m450:272,m600:37,m700:10,m800:2,m900:1,m1000:0, v25:1314,v50:878,v100:513, holidayAggregate:true, weeksSpanned:3, m250:null, v250:null, v500:null, v1000:null, secondVolWW:null, hatTrickVolWW:null, pools:null},
  {date:'2026-01-18', wEvents:2107, wPr:412000, wVol:50000, ukEvents:823, ukPr:220000, ukVol:32000, barcodes:33738, newPr:21607, newVol:2200, ukEvChg:69.7, ukPrChg:56.5, ukPerChg:-7.8, m25:2807,m50:1577,m100:759,m500:31, m150:594,m200:400,m300:222,m350:154,m400:107,m450:64,m600:12,m700:1,m800:1,m900:0,m1000:0, v25:367,v50:224,v100:151, m250:291, v250:46, v500:5, v1000:0, secondVolWW:1510, hatTrickVolWW:1162, pools:{p1_9:5328895,p10_24:959251,p25_49:435050,p50_99:275473,p100_149:116598,p150_199:57395,p200_249:33478,p250_299:22657,p300_349:13942,p350_399:8195,p400_449:5020,p450_499:2811,p500_599:2576,p600_699:620,p700_799:124,p800_899:20,p900_999:5}},
  {date:'2026-01-25', wEvents:2024, wPr:399000, wVol:37000, ukEvents:803, ukPr:209000, ukVol:20000, barcodes:32808, newPr:21037, newVol:1800, ukEvChg:-2.4, ukPrChg:-4.9, ukPerChg:-2.6, m25:2736,m50:1561,m100:772,m500:38, m150:575,m200:379,m300:222,m350:124,m400:94,m450:64,m600:10,m700:5,m800:1,m900:0,m1000:0, v25:300,v50:154,v100:100, m250:308, v250:37, v500:0, v1000:0, secondVolWW:1262, hatTrickVolWW:996, pools:{p1_9:5344934,p10_24:961513,p25_49:436225,p50_99:276262,p100_149:116795,p150_199:57591,p200_249:33549,p250_299:22743,p300_349:14040,p350_399:8225,p400_449:5050,p450_499:2837,p500_599:2604,p600_699:625,p700_799:128,p800_899:21,p900_999:5}},
  {date:'2026-02-01', wEvents:2046, wPr:386000, wVol:49000, ukEvents:828, ukPr:206000, ukVol:32000, barcodes:28062, newPr:17137, newVol:2600, ukEvChg:3.1, ukPrChg:-1.3, ukPerChg:-4.3, m25:2627,m50:1523,m100:781,m500:41, m150:554,m200:399,m300:226,m350:126,m400:82,m450:63,m600:5,m700:5,m800:0,m900:0,m1000:0, v25:445,v50:294,v100:135, m250:292, v250:61, v500:7, v1000:0, secondVolWW:1860, hatTrickVolWW:1615, pools:{p1_9:5357378,p10_24:963579,p25_49:437329,p50_99:277004,p100_149:117022,p150_199:57746,p200_249:33656,p250_299:22809,p300_349:14140,p350_399:8269,p400_449:5069,p450_499:2859,p500_599:2640,p600_699:625,p700_799:133,p800_899:21,p900_999:5}},
  {date:'2026-02-08', wEvents:2021, wPr:365000, wVol:47000, ukEvents:768, ukPr:176000, ukVol:29000, barcodes:28322, newPr:17584, newVol:2100, ukEvChg:-7.2, ukPrChg:-14.9, ukPerChg:-8.2, m25:2356,m50:1464,m100:780,m500:38, m150:529,m200:371,m300:219,m350:135,m400:79,m450:51,m600:16,m700:1,m800:0,m900:0,m1000:0, v25:368,v50:202,v100:107, m250:294, v250:48, v500:2, v1000:0, secondVolWW:1460, hatTrickVolWW:1218, pools:{p1_9:5370479,p10_24:965706,p25_49:438221,p50_99:277688,p100_149:117273,p150_199:57904,p200_249:33733,p250_299:22884,p300_349:14224,p350_399:8325,p400_449:5097,p450_499:2872,p500_599:2662,p600_699:640,p700_799:134,p800_899:21,p900_999:5}},
  {date:'2026-02-15', wEvents:1926, wPr:333000, wVol:43000, ukEvents:653, ukPr:169000, ukVol:25000, barcodes:23628, newPr:13761, newVol:1900, ukEvChg:-15.0, ukPrChg:-3.9, ukPerChg:13.1, m25:2324,m50:1417,m100:732,m500:35, m150:497,m200:380,m300:209,m350:143,m400:86,m450:51,m600:9,m700:0,m800:2,m900:0,m1000:0, v25:361,v50:194,v100:128, m250:269, v250:42, v500:4, v1000:0, secondVolWW:1276, hatTrickVolWW:1115, pools:{p1_9:5380241,p10_24:967381,p25_49:439128,p50_99:278373,p100_149:117508,p150_199:58021,p200_249:33844,p250_299:22944,p300_349:14290,p350_399:8382,p400_449:5132,p450_499:2888,p500_599:2688,p600_699:649,p700_799:132,p800_899:23,p900_999:5}},
  {date:'2026-02-22', wEvents:2129, wPr:380000, wVol:48000, ukEvents:815, ukPr:200000, ukVol:30000, barcodes:25836, newPr:16938, newVol:2100, ukEvChg:24.8, ukPrChg:18.5, ukPerChg:-5.1, m25:2592,m50:1444,m100:794,m500:35, m150:588,m200:391,m300:212,m350:161,m400:105,m450:68,m600:13,m700:2,m800:0,m900:0,m1000:0, v25:396,v50:233,v100:127, m250:311, v250:38, v500:3, v1000:0, secondVolWW:1446, hatTrickVolWW:1285, pools:{p1_9:5392428,p10_24:969540,p25_49:440276,p50_99:279023,p100_149:117714,p150_199:58218,p200_249:33924,p250_299:23043,p300_349:14341,p350_399:8438,p400_449:5169,p450_499:2921,p500_599:2710,p600_699:660,p700_799:134,p800_899:23,p900_999:5}},
  {date:'2026-03-01', wEvents:2134, wPr:362000, wVol:50000, ukEvents:834, ukPr:194000, ukVol:32000, barcodes:25765, newPr:15735, newVol:2200, ukEvChg:2.3, ukPrChg:-2.9, ukPerChg:-5.1, m25:2568,m50:1535,m100:756,m500:32, m150:567,m200:384,m300:208,m350:159,m400:83,m450:47,m600:9,m700:7,m800:1,m900:0,m1000:0, v25:377,v50:232,v100:124, m250:274, v250:43, v500:6, v1000:0, secondVolWW:1504, hatTrickVolWW:1290, pools:{p1_9:5403728,p10_24:971407,p25_49:441309,p50_99:279802,p100_149:117903,p150_199:58401,p200_249:34034,p250_299:23109,p300_349:14390,p350_399:8514,p400_449:5205,p450_499:2936,p500_599:2733,p600_699:662,p700_799:140,p800_899:24,p900_999:5}},
  {date:'2026-03-08', wEvents:2181, wPr:372000, wVol:51000, ukEvents:864, ukPr:204000, ukVol:33000, barcodes:27326, newPr:16419, newVol:2400, ukEvChg:3.6, ukPrChg:5.1, ukPerChg:1.4, m25:2631,m50:1495,m100:802,m500:48, m150:555,m200:405,m300:205,m350:147,m400:90,m450:63,m600:18,m700:3,m800:0,m900:0,m1000:0, v25:415,v50:255,v100:145, m250:329, v250:39, v500:6, v1000:0, secondVolWW:1562, hatTrickVolWW:1333, pools:{p1_9:5415536,p10_24:973387,p25_49:442445,p50_99:280495,p100_149:118150,p150_199:58551,p200_249:34110,p250_299:23233,p300_349:14448,p350_399:8571,p400_449:5232,p450_499:2951,p500_599:2763,p600_699:677,p700_799:143,p800_899:24,p900_999:5}},
  {date:'2026-03-15', wEvents:2208, wPr:385000, wVol:51000, ukEvents:867, ukPr:211000, ukVol:32000, barcodes:26436, newPr:17152, newVol:2300, ukEvChg:0.3, ukPrChg:3.4, ukPerChg:3.1, m25:2683,m50:1573,m100:817,m500:46, m150:524,m200:443,m300:220,m350:149,m400:116,m450:74,m600:12,m700:3,m800:0,m900:0,m1000:0, v25:373,v50:222,v100:135, m250:322, v250:46, v500:6, v1000:0, secondVolWW:1656, hatTrickVolWW:1296, pools:{p1_9:5427593,p10_24:975799,p25_49:443555,p50_99:281251,p100_149:118443,p150_199:58632,p200_249:34231,p250_299:23335,p300_349:14519,p350_399:8604,p400_449:5274,p450_499:2979,p500_599:2797,p600_699:686,p700_799:146,p800_899:24,p900_999:5}},
  {date:'2026-03-22', wEvents:2235, wPr:390000, wVol:51000, ukEvents:876, ukPr:218000, ukVol:32000, barcodes:29934, newPr:18348, newVol:2300, ukEvChg:1.0, ukPrChg:3.4, ukPerChg:2.3, m25:2764,m50:1546,m100:857,m500:39, m150:613,m200:412,m300:223,m350:152,m400:112,m450:54,m600:14,m700:3,m800:1,m900:0,m1000:0, v25:418,v50:239,v100:147, m250:312, v250:40, v500:6, v1000:0, secondVolWW:1530, hatTrickVolWW:1352, pools:{p1_9:5440629,p10_24:978347,p25_49:444773,p50_99:281940,p100_149:118687,p150_199:58833,p200_249:34331,p250_299:23424,p300_349:14590,p350_399:8644,p400_449:5332,p450_499:2994,p500_599:2822,p600_699:697,p700_799:148,p800_899:25,p900_999:5}},
  {date:'2026-03-29', wEvents:2200, wPr:377000, wVol:50000, ukEvents:876, ukPr:217000, ukVol:32000, barcodes:27296, newPr:17136, newVol:2200, ukEvChg:0.0, ukPrChg:-0.7, ukPerChg:-0.7, m25:2614,m50:1590,m100:794,m500:30, m150:582,m200:417,m300:220,m350:161,m400:92,m450:57,m600:14,m700:3,m800:0,m900:0,m1000:0, v25:381,v50:243,v100:147, m250:294, v250:43, v500:6, v1000:0, secondVolWW:1623, hatTrickVolWW:1204, pools:{p1_9:5452856,p10_24:980642,p25_49:445797,p50_99:282736,p100_149:118899,p150_199:58998,p200_249:34454,p250_299:23498,p300_349:14649,p350_399:8713,p400_449:5367,p450_499:3021,p500_599:2838,p600_699:708,p700_799:151,p800_899:25,p900_999:5}},
  {date:'2026-04-06', wEvents:2243, wPr:439000, wVol:52000, ukEvents:875, ukPr:241000, ukVol:33000, barcodes:null, newPr:22516, newVol:2300, ukEvChg:-0.1, ukPrChg:11.1, ukPerChg:11.2, m25:3196,m50:1695,m100:919,m500:44, m150:658,m200:483,m300:251,m350:168,m400:108,m450:77,m600:14,m700:5,m800:1,m900:0,m1000:0, v25:351,v50:262,v100:156, m250:338, v250:61, v500:5, v1000:0, secondVolWW:1434, hatTrickVolWW:1264, pools:{p1_9:5469475,p10_24:983343,p25_49:447298,p50_99:283512,p100_149:119160,p150_199:59173,p200_249:34599,p250_299:23585,p300_349:14732,p350_399:8773,p400_449:5398,p450_499:3054,p500_599:2868,p600_699:717,p700_799:155,p800_899:26,p900_999:5}},
  {date:'2026-04-12', wEvents:2269, wPr:395000, wVol:51000, ukEvents:878, ukPr:208000, ukVol:33000, barcodes:27391, newPr:18988, newVol:2100, ukEvChg:0.3, ukPrChg:-13.5, ukPerChg:-13.8, m25:2821,m50:1612,m100:828,m500:43, m150:596,m200:449,m300:239,m350:144,m400:103,m450:78,m600:8,m700:3,m800:0,m900:0,m1000:0, v25:389,v50:252,v100:137, m250:279, v250:35, v500:5, v1000:0, secondVolWW:1528, hatTrickVolWW:1223, pools:{p1_9:5483188,p10_24:985797,p25_49:448507,p50_99:284296,p100_149:119392,p150_199:59320,p200_249:34769,p250_299:23625,p300_349:14827,p350_399:8814,p400_449:5423,p450_499:3089,p500_599:2903,p600_699:722,p700_799:158,p800_899:26,p900_999:5}},
  {date:'2026-04-19', wEvents:2255, wPr:407000, wVol:53000, ukEvents:883, ukPr:235000, ukVol:34000, barcodes:33303, newPr:19946, newVol:2500, ukEvChg:0.6, ukPrChg:12.8, ukPerChg:12.2, m25:2912,m50:1589,m100:856,m500:37, m150:632,m200:444,m300:247,m350:154,m400:93,m450:59,m600:15,m700:4,m800:0,m900:0,m1000:0, v25:426,v50:224,v100:155, m250:302, v250:53, v500:7, v1000:0, secondVolWW:1599, hatTrickVolWW:1320, pools:{p1_9:5497673,p10_24:988346,p25_49:449830,p50_99:285029,p100_149:119616,p150_199:59508,p200_249:34911,p250_299:23680,p300_349:14920,p350_399:8875,p400_449:5457,p450_499:3111,p500_599:2925,p600_699:733,p700_799:162,p800_899:26,p900_999:5}},
  {date:'2026-04-26', wEvents:2164, wPr:399000, wVol:52000, ukEvents:876, ukPr:236000, ukVol:34000, barcodes:32904, newPr:19614, newVol:2400, ukEvChg:-0.8, ukPrChg:0.7, ukPerChg:1.5, m25:2906,m50:1591,m100:897,m500:34, m150:574,m200:441,m300:247,m350:167,m400:96,m450:70,m600:12,m700:4,m800:0,m900:0,m1000:0, v25:451,v50:237,v100:135, m250:303, v250:38, v500:6, v1000:0, secondVolWW:1565, hatTrickVolWW:1309, pools:{p1_9:5511907,p10_24:990820,p25_49:451145,p50_99:285723,p100_149:119939,p150_199:59641,p200_249:35049,p250_299:23736,p300_349:15000,p350_399:8946,p400_449:5483,p450_499:3147,p500_599:2947,p600_699:741,p700_799:166,p800_899:26,p900_999:5}},
  {date:'2026-05-03', wEvents:2269, wPr:431000, wVol:54000, ukEvents:874, ukPr:247000, ukVol:34000, barcodes:36807, newPr:20985, newVol:2400, ukEvChg:-0.2, ukPrChg:4.5, ukPerChg:4.7, m25:3006,m50:1739,m100:895,m500:43, m150:654,m200:466,m300:239,m350:184,m400:116,m450:69,m600:9,m700:1,m800:1,m900:0,m1000:0, v25:453,v50:269,v100:141, m250:331, v250:55, v500:6, v1000:0, secondVolWW:1644, hatTrickVolWW:1442, pools:{p1_9:5527110,p10_24:993596,p25_49:452412,p50_99:286567,p100_149:120180,p150_199:59829,p200_249:35184,p250_299:23828,p300_349:15055,p350_399:9014,p400_449:5530,p450_499:3173,p500_599:2981,p600_699:749,p700_799:166,p800_899:27,p900_999:5}},
  {date:'2026-05-10', wEvents:2265, wPr:403000, wVol:53000, ukEvents:872, ukPr:239000, ukVol:33000, barcodes:35471, newPr:19930, newVol:2500, ukEvChg:-0.2, ukPrChg:-3.4, ukPerChg:-3.2, m25:2745,m50:1718,m100:864,m500:47, m150:622,m200:440,m300:247,m350:159,m400:107,m450:58,m600:14,m700:1,m800:2,m900:0,m1000:0, v25:367,v50:246,v100:150, m250:307, v250:51, v500:4, v1000:0, secondVolWW:1592, hatTrickVolWW:1377, pools:{p1_9:5541620,p10_24:996271,p25_49:453439,p50_99:287421,p100_149:120422,p150_199:60011,p200_249:35317,p250_299:23888,p300_349:15143,p350_399:9066,p400_449:5579,p450_499:3184,p500_599:3014,p600_699:762,p700_799:165,p800_899:29,p900_999:5}},
  {date:'2026-05-17', wEvents:2266, wPr:407000, wVol:52000, ukEvents:860, ukPr:236000, ukVol:33000, barcodes:34459, newPr:20266, newVol:2600, ukEvChg:-1.4, ukPrChg:-1.2, ukPerChg:0.2, m25:2872,m50:1699,m100:895,m500:43, m150:640,m200:427,m300:229,m350:181,m400:90,m450:81,m600:13,m700:4,m800:1,m900:0,m1000:0, v25:431,v50:260,v100:134, m250:336, v250:34, v500:5, v1000:0, secondVolWW:1587, hatTrickVolWW:1311, pools:{p1_9:5556444,p10_24:998841,p25_49:454612,p50_99:288225,p100_149:120677,p150_199:60224,p200_249:35408,p250_299:23995,p300_349:15191,p350_399:9157,p400_449:5588,p450_499:3222,p500_599:3044,p600_699:771,p700_799:168,p800_899:30,p900_999:5}},
  {date:'2026-05-24', wEvents:2276, wPr:403000, wVol:52000, ukEvents:867, ukPr:237000, ukVol:32000, barcodes:30199, newPr:18792, newVol:2400, ukEvChg:0.8, ukPrChg:0.3, ukPerChg:-0.5, m25:2813,m50:1707,m100:889,m500:57, m150:591,m200:417,m300:238,m350:147,m400:83,m450:70,m600:13,m700:3,m800:1,m900:0,m1000:0, v25:432,v50:250,v100:145, m250:296, v250:43, v500:3, v1000:0, secondVolWW:1552, hatTrickVolWW:1277, pools:{p1_9:5570003,p10_24:1001261,p25_49:455718,p50_99:289043,p100_149:120975,p150_199:60398,p200_249:35529,p250_299:24053,p300_349:15282,p350_399:9221,p400_449:5601,p450_499:3235,p500_599:3088,p600_699:781,p700_799:170,p800_899:31,p900_999:5}},
  {date:'2026-05-31', wEvents:2282, wPr:417000, wVol:54000, ukEvents:882, ukPr:245000, ukVol:34000, barcodes:28762, newPr:19075, newVol:2400, ukEvChg:1.7, ukPrChg:3.4, ukPerChg:1.6, m25:2886,m50:1730,m100:937,m500:44, m150:603,m200:429,m300:239,m350:198,m400:106,m450:64,m600:10,m700:0,m800:1,m900:0,m1000:1, v25:432,v50:248,v100:137, m250:326, v250:41, v500:4, v1000:0, secondVolWW:1654, hatTrickVolWW:1320, pools:{p1_9:5583687,p10_24:1003766,p25_49:456874,p50_99:289836,p100_149:121309,p150_199:60572,p200_249:35632,p250_299:24140,p300_349:15323,p350_399:9313,p400_449:5643,p450_499:3255,p500_599:3122,p600_699:791,p700_799:169,p800_899:32,p900_999:4}},
  {date:'2026-06-07', wEvents:2250, wPr:361000, wVol:53000, ukEvents:862, ukPr:198000, ukVol:34000, barcodes:30054, newPr:16278, newVol:2300, ukEvChg:-2.3, ukPrChg:-18.9, ukPerChg:-17.1, m25:2503,m50:1412,m100:857,m500:55, m150:527,m200:383,m300:222,m350:147,m400:103,m450:60,m600:8,m700:4,m800:1,m900:0,m1000:0, v25:448,v50:253,v100:129, m250:325, v250:67, v500:10, v1000:0, secondVolWW:1558, hatTrickVolWW:1350, pools:{p1_9:5595223,p10_24:1006005,p25_49:457965,p50_99:290391,p100_149:121639,p150_199:60716,p200_249:35690,p250_299:24243,p300_349:15398,p350_399:9357,p400_449:5686,p450_499:3260,p500_599:3169,p600_699:795,p700_799:172,p800_899:33,p900_999:4}},
  {date:'2026-06-14', wEvents:2273, wPr:388000, wVol:52000, ukEvents:853, ukPr:228000, ukVol:32000, barcodes:29165, newPr:17442, newVol:2300, ukEvChg:-1.0, ukPrChg:15.1, ukPerChg:16.3, m25:2605,m50:1644,m100:855,m500:38, m150:568,m200:417,m300:244,m350:152,m400:89,m450:66,m600:14,m700:2,m800:0,m900:0,m1000:0, v25:418,v50:233,v100:147, m250:339, v250:55, v500:6, v1000:0, secondVolWW:1544, hatTrickVolWW:1308, pools:{p1_9:5607658,p10_24:1008407,p25_49:458926,p50_99:291180,p100_149:121926,p150_199:60867,p200_249:35768,p250_299:24338,p300_349:15490,p350_399:9420,p400_449:5709,p450_499:3288,p500_599:3193,p600_699:807,p700_799:174,p800_899:33,p900_999:4}},
  {date:'2026-06-21', wEvents:2222, wPr:368000, wVol:51000, ukEvents:840, ukPr:217000, ukVol:32000, barcodes:26675, newPr:15719, newVol:2300, ukEvChg:-1.5, ukPrChg:-5.1, ukPerChg:-3.6, m25:2611,m50:1571,m100:867,m500:43, m150:564,m200:446,m300:227,m350:166,m400:114,m450:69,m600:15,m700:1,m800:0,m900:0,m1000:0, v25:406,v50:262,v100:129, m250:290, v250:56, v500:8, v1000:0, secondVolWW:1510, hatTrickVolWW:1257, pools:{p1_9:5618794,p10_24:1010379,p25_49:459966,p50_99:291884,p100_149:122229,p150_199:60985,p200_249:35924,p250_299:24401,p300_349:15551,p350_399:9472,p400_449:5754,p450_499:3314,p500_599:3221,p600_699:821,p700_799:175,p800_899:33,p900_999:4}},
  {date:'2026-06-28', wEvents:2185, wPr:336000, wVol:50000, ukEvents:834, ukPr:188000, ukVol:32000, barcodes:22208, newPr:13163, newVol:2300, ukEvChg:-0.7, ukPrChg:-13.3, ukPerChg:-12.7, m25:2343,m50:1476,m100:850,m500:32, m150:579,m200:415,m300:218,m350:139,m400:108,m450:69,m600:13,m700:3,m800:2,m900:0,m1000:0, v25:412,v50:214,v100:120, m250:313, v250:40, v500:2, v1000:0, secondVolWW:1565, hatTrickVolWW:1117, pools:{p1_9:5627946,p10_24:1012047,p25_49:460833,p50_99:292510,p100_149:122500,p150_199:61149,p200_249:36026,p250_299:24496,p300_349:15630,p350_399:9503,p400_449:5793,p450_499:3351,p500_599:3240,p600_699:831,p700_799:176,p800_899:35,p900_999:4}},
  {date:'2026-07-05', wEvents:2249, wPr:369000, wVol:51000, ukEvents:852, ukPr:216000, ukVol:32000, barcodes:26932, newPr:16743, newVol:2300, ukEvChg:2.2, ukPrChg:14.9, ukPerChg:12.5, m25:2612,m50:1529,m100:806,m500:26, m150:582,m200:403,m300:221,m350:179,m400:115,m450:69,m600:11,m700:2,m800:0,m900:1,m1000:0, v25:377,v50:259,v100:146, m250:309, v250:37, v500:3, v1000:0, secondVolWW:1480, hatTrickVolWW:1268, pools:{p1_9:5639997,p10_24:1014127,p25_49:461916,p50_99:293233,p100_149:122724,p150_199:61328,p200_249:36120,p250_299:24584,p300_349:15672,p350_399:9567,p400_449:5839,p450_499:3394,p500_599:3255,p600_699:840,p700_799:178,p800_899:34,p900_999:5}},
  {date:'2026-07-12', wEvents:2283, wPr:369000, wVol:51000, ukEvents:857, ukPr:202000, ukVol:32000, barcodes:25064, newPr:16579, newVol:2400, ukEvChg:0.6, ukPrChg:-6.5, ukPerChg:-7.0, m25:2555,m50:1542,m100:830,m500:48, v25:393,v50:268,v100:172, m150:566,m200:413,m300:239,m350:133,m400:97,m450:65,m600:15,m700:2,m800:1,m900:0,m1000:0, m250:335, v250:53, v500:4, v1000:0, secondVolWW:1603, hatTrickVolWW:1232, pools:{p1_9:5652043,p10_24:1016105,p25_49:462929,p50_99:293945,p100_149:122988,p150_199:61481,p200_249:36198,p250_299:24680,p300_349:15778,p350_399:9603,p400_449:5871,p450_499:3411,p500_599:3288,p600_699:853,p700_799:179,p800_899:35,p900_999:5}},
];

const biggest = [
  ['Bushy Park', 1482], ['Battersea', 952], ['Nonsuch', 883], ['Hove Promenade', 856],
  ['Southampton', 786], ['Heaton Park', 747], ['Clapham Common', 726], ['Burgess', 714],
  ['Birkenhead', 712], ['Tooting Common', 708]
];

const labels = weeks.map(w=>{
  const d = new Date(w.date+'T00:00:00');
  return d.toLocaleDateString('en-GB',{day:'2-digit',month:'short'});
});

// palette
const PINE = '#14F195', CLAY = '#9945FF', MIST='#5B8DEF', CLAY2='#FF4FA0', MIST2='#FFC93C';
Chart.defaults.font.family = "'SFMono-Regular',Consolas,'Liberation Mono',Menlo,monospace";
Chart.defaults.color = '#8B8FA6';
Chart.defaults.font.size = 11;

function baseGrid(){
  return { color:'rgba(255,255,255,0.06)' };
}

// HERO BIBS
const last = weeks[weeks.length-1];
const first = weeks[0];
document.getElementById('heroBibs').innerHTML = `
  <div class="bib"><div class="num">${last.wPr.toLocaleString()}</div><div class="lbl">Worldwide runners · ${labels[labels.length-1]}</div></div>
  <div class="bib"><div class="num">${last.ukPr.toLocaleString()}</div><div class="lbl">UK runners · ${labels[labels.length-1]}</div></div>
  <div class="bib"><div class="num">${last.ukEvents}</div><div class="lbl">UK events staged</div></div>
  <div class="bib"><div class="num">${last.wVol.toLocaleString()}</div><div class="lbl">Worldwide volunteers</div></div>
`;

// 01 Attendance chart
const attCtx = document.getElementById('attendanceChart');
const ukPrRaw = weeks.map(w=>w.ukPr);
const rowPrRaw = weeks.map(w=> w.wPr - w.ukPr);
const attChart = new Chart(attCtx, {
  type:'bar',
  data:{
    labels,
    datasets:[
      {label:'UK parkrunners', data:ukPrRaw, backgroundColor:CLAY, borderRadius:2, barPercentage:0.7},
      {label:'Rest-of-world parkrunners', data:rowPrRaw, backgroundColor:PINE, borderRadius:2, barPercentage:0.7}
    ]
  },
  options:{
    responsive:true,
    interaction:{mode:'index', intersect:false},
    plugins:{
      legend:{labels:{boxWidth:12, boxHeight:12}},
      tooltip:{callbacks:{
        label:(item)=> `${item.dataset.label}: ${item.raw.toLocaleString()}`,
        footer:(items)=> `Total: ${items.reduce((s,i)=>s+i.raw,0).toLocaleString()}`
      }}
    },
    scales:{
      x:{stacked:true, grid:{display:false}},
      y:{stacked:true, grid:baseGrid(), title:{display:true, text:'Parkrunners'}}
    }
  }
});

document.querySelectorAll('#trendsSection .toggle-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('#trendsSection .toggle-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const scope = btn.dataset.scope;
    attChart.data.datasets[0].hidden = scope==='world';
    attChart.data.datasets[1].hidden = scope==='uk';
    attChart.update();
  });
});

// 02 Events chart
const ukEventsRaw = weeks.map(w=>w.ukEvents);
const rowEventsRaw = weeks.map(w=>w.wEvents - w.ukEvents);
const ukEventsPct = weeks.map(w=> w.wEvents ? (w.ukEvents / w.wEvents * 100) : null);
const rowEventsPct = weeks.map(w=> w.wEvents ? ((w.wEvents - w.ukEvents) / w.wEvents * 100) : null);
const eventsChart = new Chart(document.getElementById('eventsChart'), {
  type:'bar',
  data:{
    labels,
    datasets:[
      {label:'UK events', data:ukEventsRaw, backgroundColor:CLAY2, borderRadius:2, barPercentage:0.7},
      {label:'Rest-of-world events', data:rowEventsRaw, backgroundColor:MIST2, borderRadius:2, barPercentage:0.7}
    ]
  },
  options:{
    responsive:true,
    plugins:{
      legend:{labels:{boxWidth:12,boxHeight:12}},
      tooltip:{callbacks:{label:(item)=> `${item.dataset.label}: ${item.raw.toLocaleString()}`}}
    },
    scales:{ x:{stacked:true, grid:{display:false}}, y:{stacked:true, grid:baseGrid()} }
  }
});

document.querySelectorAll('#eventsControls .toggle-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('#eventsControls .toggle-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const mode = btn.dataset.mode;
    if(mode === 'percent'){
      eventsChart.data.datasets[0].data = ukEventsPct;
      eventsChart.data.datasets[1].data = rowEventsPct;
      eventsChart.options.scales.y.max = 100;
      eventsChart.options.scales.y.ticks = { callback:(v)=> v + '%' };
      eventsChart.options.plugins.tooltip.callbacks.label = (item)=> `${item.dataset.label}: ${item.raw.toFixed(1)}%`;
    } else {
      eventsChart.data.datasets[0].data = ukEventsRaw;
      eventsChart.data.datasets[1].data = rowEventsRaw;
      eventsChart.options.scales.y.max = undefined;
      eventsChart.options.scales.y.ticks = {};
      eventsChart.options.plugins.tooltip.callbacks.label = (item)=> `${item.dataset.label}: ${item.raw.toLocaleString()}`;
    }
    eventsChart.update();
  });
});


// 03 Newcomers
const aggIndices = weeks.reduce((acc,w,i)=>{ if(w.holidayAggregate) acc.push(i); return acc; },[]);
const aggRadii = weeks.map((w,i)=> aggIndices.includes(i) ? 6 : 1.5);
const aggStyle = weeks.map((w,i)=> aggIndices.includes(i) ? 'rectRot' : 'circle');
new Chart(document.getElementById('newcomersChart'), {
  type:'line',
  data:{
    labels,
    datasets:[
      {label:'New barcodes (WW)', data:weeks.map(w=>w.barcodes), borderColor:PINE, backgroundColor:'rgba(20,241,149,0.10)', fill:true, tension:0.35, pointRadius:aggRadii, pointStyle:aggStyle, borderWidth:2},
      {label:'New parkrunners (WW)', data:weeks.map(w=>w.newPr), borderColor:CLAY, borderDash:[4,3], fill:false, tension:0.35, pointRadius:aggRadii, pointStyle:aggStyle, borderWidth:2},
      {label:'New volunteers (WW)', data:weeks.map(w=>w.newVol), borderColor:MIST, fill:false, tension:0.35, pointRadius:aggRadii, pointStyle:aggStyle, borderWidth:2}
    ]
  },
  options:{
    responsive:true,
    plugins:{
      legend:{labels:{boxWidth:12,boxHeight:12, font:{size:10}}},
      tooltip:{callbacks:{afterBody:(items)=>{
        if(!items[0]) return [];
        const w = weeks[items[0].dataIndex];
        return w && w.holidayAggregate ? [`⬥ ${w.weeksSpanned}-week combined total (site was on a break)`] : [];
      }}}
    },
    scales:{ y:{grid:baseGrid()}, x:{grid:{display:false}, ticks:{maxTicksLimit:8}} }
  }
});

// 04 Milestones
const aggBorder = weeks.map((w,i)=> aggIndices.includes(i) ? '#E7E8ED' : 'rgba(0,0,0,0)');
new Chart(document.getElementById('milestoneChart'), {
  type:'bar',
  data:{
    labels,
    datasets:[
      {label:'Joined 25 club', data:weeks.map(w=>w.m25), backgroundColor:PINE, borderColor:aggBorder, borderWidth:2},
      {label:'Joined 50 club', data:weeks.map(w=>w.m50), backgroundColor:CLAY, borderColor:aggBorder, borderWidth:2},
      {label:'Joined 100 club', data:weeks.map(w=>w.m100), backgroundColor:MIST, borderColor:aggBorder, borderWidth:2},
      {label:'Joined 500 club', data:weeks.map(w=>w.m500), backgroundColor:CLAY2, borderColor:aggBorder, borderWidth:2}
    ]
  },
  options:{
    responsive:true,
    plugins:{
      legend:{labels:{boxWidth:12,boxHeight:12, font:{size:10}}},
      tooltip:{callbacks:{afterBody:(items)=>{
        if(!items[0]) return [];
        const w = weeks[items[0].dataIndex];
        return w && w.holidayAggregate ? [`⬥ ${w.weeksSpanned}-week combined total (site was on a break)`] : [];
      }}}
    },
    scales:{ x:{stacked:false, grid:{display:false}, ticks:{maxTicksLimit:8}}, y:{grid:baseGrid()} }
  }
});

// 05 The pipeline over time — pool sizes by parkrun-count bracket
const poolKeys = ['p1_9','p10_24','p25_49','p50_99','p100_149','p150_199','p200_249','p250_299','p300_349','p350_399','p400_449','p450_499','p500_599','p600_699','p700_799','p800_899','p900_999'];
const poolLabelsMap = {p1_9:'1-9',p10_24:'10-24',p25_49:'25-49',p50_99:'50-99',p100_149:'100-149',p150_199:'150-199',p200_249:'200-249',p250_299:'250-299',p300_349:'300-349',p350_399:'350-399',p400_449:'400-449',p450_499:'450-499',p500_599:'500-599',p600_699:'600-699',p700_799:'700-799',p800_899:'800-899',p900_999:'900-999'};
const poolPalette = [PINE, CLAY, MIST, CLAY2, MIST2, '#00D4FF', '#FF6B4A', '#7CFF6B', '#C77DFF', '#FF8FA3', '#4ADEDE', '#FFAB4C', '#6BCB77', '#FF5D8F', '#8C7AE6', '#40C4FF', '#FFD93D'];
new Chart(document.getElementById('cumulativeMilestoneChart'), {
  type:'line',
  data:{
    labels,
    datasets: poolKeys.map((k,i)=>({
      label: poolLabelsMap[k],
      data: weeks.map(w=> w.pools ? w.pools[k] : null),
      borderColor: poolPalette[i % poolPalette.length],
      fill:false, tension:0.3, pointRadius:0, borderWidth:1.75, spanGaps:false
    }))
  },
  options:{
    responsive:true,
    interaction:{mode:'index', intersect:false},
    plugins:{
      legend:{labels:{boxWidth:10,boxHeight:10, font:{size:9}}},
      tooltip:{callbacks:{afterBody:(items)=>{
        if(!items[0]) return [];
        const w = weeks[items[0].dataIndex];
        if(w && !w.pools) return ['No pool-size data published for this week'];
        return w && w.holidayAggregate ? [`⬥ ${w.weeksSpanned}-week combined total (site was on a break)`] : [];
      }}}
    },
    scales:{
      y:{type:'logarithmic', grid:baseGrid(), title:{display:true, text:'People in bracket (log scale, worldwide)'}},
      x:{grid:{display:false}, ticks:{maxTicksLimit:10}}
    }
  }
});

// 06 Week on week % changes
new Chart(document.getElementById('wowChart'), {
  type:'bar',
  data:{
    labels,
    datasets:[
      {label:'Events %Δ', data:weeks.map(w=>w.ukEvChg), backgroundColor:PINE},
      {label:'Parkrunners %Δ', data:weeks.map(w=>w.ukPrChg), backgroundColor:CLAY},
      {label:'Parkrunners-per-event %Δ', data:weeks.map(w=>w.ukPerChg), backgroundColor:MIST}
    ]
  },
  options:{
    responsive:true,
    plugins:{legend:{labels:{boxWidth:12,boxHeight:12}}},
    scales:{ x:{grid:{display:false}, ticks:{maxTicksLimit:10}}, y:{grid:baseGrid(), title:{display:true, text:'% change vs prior week'}} }
  }
});

// 07 Biggest table
const tbody = document.querySelector('#biggestTable tbody');
const maxFin = Math.max(...biggest.map(b=>b[1]));
biggest.forEach((row,i)=>{
  const pct = (row[1]/maxFin*100).toFixed(0);
  const tr = document.createElement('tr');
  tr.innerHTML = `<td>${i+1}</td><td class="bar-cell"><div class="bar-fill" style="width:${pct}%"></div><span class="bar-text">${row[0]}</span></td><td style="text-align:right">${row[1].toLocaleString()}</td>`;
  tbody.appendChild(tr);
});

// 08 Volunteer milestones over time
new Chart(document.getElementById('volunteerMilestoneChart'), {
  type:'line',
  data:{
    labels,
    datasets:[
      {label:'Joined volunteer 25 club', data:weeks.map(w=>w.v25), borderColor:PINE, fill:false, tension:0.3, pointRadius:1.5, borderWidth:2},
      {label:'Joined volunteer 50 club', data:weeks.map(w=>w.v50), borderColor:CLAY, fill:false, tension:0.3, pointRadius:1.5, borderWidth:2},
      {label:'Joined volunteer 100 club', data:weeks.map(w=>w.v100), borderColor:MIST, fill:false, tension:0.3, pointRadius:1.5, borderWidth:2},
      {label:'Joined volunteer 250 club', data:weeks.map(w=>w.v250), borderColor:CLAY2, fill:false, tension:0.3, pointRadius:1.5, borderWidth:2},
      {label:'Joined volunteer 500 club', data:weeks.map(w=>w.v500), borderColor:MIST2, fill:false, tension:0.3, pointRadius:1.5, borderWidth:2},
      {label:'Joined volunteer 1000 club', data:weeks.map(w=>w.v1000), borderColor:'#00D4FF', fill:false, tension:0.3, pointRadius:1.5, borderWidth:2, borderDash:[2,2]}
    ]
  },
  options:{
    responsive:true,
    interaction:{mode:'index', intersect:false},
    plugins:{
      legend:{labels:{boxWidth:12,boxHeight:12, font:{size:10}}},
      tooltip:{callbacks:{afterBody:(items)=>{
        if(!items[0]) return [];
        const w = weeks[items[0].dataIndex];
        if(w && w.holidayAggregate) return [`⬥ ${w.weeksSpanned}-week combined total (site was on a break)`];
        if(w && w.v250===null) return ['No club-tier breakdown published for this week'];
        return [];
      }}}
    },
    scales:{ x:{grid:{display:false}, ticks:{maxTicksLimit:10}}, y:{grid:baseGrid()} }
  }
});

// 09 Deeper milestones — the long-tail running tiers
const deepTiers = [
  ['m150','150 club',PINE], ['m200','200 club',CLAY], ['m250','250 club',MIST],
  ['m300','300 club',CLAY2], ['m350','350 club',MIST2], ['m400','400 club','#00D4FF'],
  ['m450','450 club','#FF6B4A'], ['m600','600 club','#7CFF6B'], ['m700','700 club','#C77DFF'],
  ['m800','800 club','#FF8FA3'], ['m900','900 club','#4ADEDE'], ['m1000','1000 club','#FFAB4C']
];
new Chart(document.getElementById('deepMilestoneChart'), {
  type:'line',
  data:{
    labels,
    datasets: deepTiers.map(([key,label,color])=>({
      label, data: weeks.map(w=>w[key]), borderColor:color,
      fill:false, tension:0.3, pointRadius:0, borderWidth:1.75
    }))
  },
  options:{
    responsive:true,
    interaction:{mode:'index', intersect:false},
    plugins:{
      legend:{labels:{boxWidth:10,boxHeight:10, font:{size:9}}},
      tooltip:{callbacks:{afterBody:(items)=>{
        if(!items[0]) return [];
        const w = weeks[items[0].dataIndex];
        if(w && w.m250===null) return ['250/etc club breakdown not published for this week'];
        return w && w.holidayAggregate ? [`⬥ ${w.weeksSpanned}-week combined total (site was on a break)`] : [];
      }}}
    },
    scales:{ y:{grid:baseGrid(), title:{display:true, text:'Club joins (worldwide)'}}, x:{grid:{display:false}, ticks:{maxTicksLimit:10}} }
  }
});

// 10 Volunteer engagement — repeat and hat-trick volunteering
new Chart(document.getElementById('volunteerEngagementChart'), {
  type:'line',
  data:{
    labels,
    datasets:[
      {label:'Doing their 2nd-ever volunteer shift', data:weeks.map(w=>w.secondVolWW), borderColor:CLAY, backgroundColor:'rgba(153,69,255,0.12)', fill:true, tension:0.3, pointRadius:0, borderWidth:2},
      {label:'Completed a volunteer hat-trick', data:weeks.map(w=>w.hatTrickVolWW), borderColor:PINE, backgroundColor:'rgba(20,241,149,0.10)', fill:true, tension:0.3, pointRadius:0, borderWidth:2}
    ]
  },
  options:{
    responsive:true,
    interaction:{mode:'index', intersect:false},
    plugins:{
      legend:{labels:{boxWidth:12,boxHeight:12, font:{size:10}}},
      tooltip:{callbacks:{afterBody:(items)=>{
        if(!items[0]) return [];
        const w = weeks[items[0].dataIndex];
        if(w && w.secondVolWW===null) return ['Not published for this week'];
        return w && w.holidayAggregate ? [`⬥ ${w.weeksSpanned}-week combined total (site was on a break)`] : [];
      }}}
    },
    scales:{ y:{grid:baseGrid(), title:{display:true, text:'People (worldwide)'}}, x:{grid:{display:false}, ticks:{maxTicksLimit:10}} }
  }
});

// 11 Volunteers — UK vs rest of world, stacked
new Chart(document.getElementById('volunteersUkWorldChart'), {
  type:'bar',
  data:{
    labels,
    datasets:[
      {label:'UK volunteers', data:weeks.map(w=>w.ukVol), backgroundColor:CLAY, borderRadius:2, barPercentage:0.7},
      {label:'Rest-of-world volunteers', data:weeks.map(w=> w.wVol - w.ukVol), backgroundColor:PINE, borderRadius:2, barPercentage:0.7}
    ]
  },
  options:{
    responsive:true,
    interaction:{mode:'index', intersect:false},
    plugins:{
      legend:{labels:{boxWidth:12,boxHeight:12}},
      tooltip:{callbacks:{
        label:(item)=> `${item.dataset.label}: ${item.raw.toLocaleString()}`,
        footer:(items)=> `Total: ${items.reduce((s,i)=>s+i.raw,0).toLocaleString()}`
      }}
    },
    scales:{ x:{stacked:true, grid:{display:false}}, y:{stacked:true, grid:baseGrid(), title:{display:true, text:'Volunteers'}} }
  }
});

