export const getBackground = (conditionCode, isDay) => {
    if (conditionCode) {
        const data = {
            1000: {
                0: {
                    image: '/images/night/image_1.png',
                    y: 0
                },
                1: {
                    image: '/images/day/image_1.png',
                    y: 0
                }
            },
            1003: {
                0: {
                    image: '/images/night/image_2.png',
                    y: 0
                },
                1: {
                    image: '/images/day/image_2.png',
                    y: 0
                }
            },
            1006: {
                0: {
                    image: '/images/night/image_2.png',
                    y: 0
                },
                1: {
                    image: '/images/day/image_2.png',
                    y: 0
                }
            },
            1009: {
                0: {
                    image: '/images/night/image_3.png',
                    y: 0
                },
                1: {
                    image: '/images/day/image_3.png',
                    y: 0
                }
            },
            1030: {
                0: {
                    image: '/images/night/image_4.png',
                    y: 0
                },
                1: {
                    image: '/images/day/image_4.png',
                    y: -220
                }
            },
            1063: {
                0: {
                    image: '/images/night/image_5.png',
                    y: -100
                },
                1: {
                    image: '/images/day/image_5.png',
                    y: 0
                }
            },
            1066: {
                0: {
                    image: '/images/night/image_6.png',
                    y: -1300
                },
                1: {
                    image: '/images/day/image_6.png',
                    y: 0
                }
            },
            1069: {
                0: {
                    image: '/images/night/image_7.png',
                    y: 0
                },
                1: {
                    image: '/images/day/image_7.png',
                    y: -750
                }
            },
            1072: {
                0: {
                    image: '/images/night/image_8.png',
                    y: -1050
                },
                1: {
                    image: '/images/day/image_8.png',
                    y: -850
                }
            },
            1087: {
                0: {
                    image: '/images/night/image_9.png',
                    y: 0
                },
                1: {
                    image: '/images/day/image_9.png',
                    y: 0
                }
            },
            1114: {
                0: {
                    image: '/images/night/image_10.png',
                    y: 0
                },
                1: {
                    image: '/images/day/image_10.png',
                    y: 0
                }
            },
            1117: {
                0: {
                    image: '/images/night/image_11.png',
                    y: 0
                },
                1: {
                    image: '/images/day/image_11.png',
                    y: 0
                }
            },
            1135: {
                0: {
                    image: '/images/night/image_12.png',
                    y: -770
                },
                1: {
                    image: '/images/day/image_12.png',
                    y: 0
                }
            },
            1147: {
                0: {
                    image: '/images/night/image_13.png',
                    y: 0
                },
                1: {
                    image: '/images/day/image_13.png',
                    y: -870
                }
            },
            1150: {
                0: {
                    image: '/images/night/image_5.png',
                    y: -100
                },
                1: {
                    image: '/images/day/image_5.png',
                    y: 0
                }
            },
            1153: {
                0: {
                    image: '/images/night/image_5.png',
                    y: -100
                },
                1: {
                    image: '/images/day/image_5.png',
                    y: 0
                }
            },
            1168: {
                0: {
                    image: '/images/night/image_8.png',
                    y: -1050
                },
                1: {
                    image: '/images/day/image_8.png',
                    y: -850
                }
            },
            1171: {
                0: {
                    image: '/images/night/image_15.png',
                    y: -950
                },
                1: {
                    image: '/images/day/image_15.png',
                    y: -950
                }
            },
            1180: {
                0: {
                    image: '/images/night/image_5.png',
                    y: -100
                },
                1: {
                    image: '/images/day/image_5.png',
                    y: 0
                }
            },
            1183: {
                0: {
                    image: '/images/night/image_5.png',
                    y: -100
                },
                1: {
                    image: '/images/day/image_5.png',
                    y: 0
                }
            },
            1186: {
                0: {
                    image: '/images/night/image_14.png',
                    y: 0
                },
                1: {
                    image: '/images/day/image_14.png',
                    y: 0
                }
            },
            1189: {
                0: {
                    image: '/images/night/image_14.png',
                    y: 0
                },
                1: {
                    image: '/images/day/image_14.png',
                    y: 0
                }
            },
            1192: {
                0: {
                    image: '/images/night/image_15.png',
                    y: -950
                },
                1: {
                    image: '/images/day/image_15.png',
                    y: -950
                }
            },
            1195: {
                0: {
                    image: '/images/night/image_15.png',
                    y: -950
                },
                1: {
                    image: '/images/day/image_15.png',
                    y: -950
                }
            },
            1198: {
                0: {
                    image: '/images/night/image_8.png',
                    y: -1050
                },
                1: {
                    image: '/images/day/image_8.png',
                    y: -850
                }
            },
            1201: {
                0: {
                    image: '/images/night/image_15.png',
                    y: -950
                },
                1: {
                    image: '/images/day/image_15.png',
                    y: -950
                }
            },
            1204: {
                0: {
                    image: '/images/night/image_7.png',
                    y: 0
                },
                1: {
                    image: '/images/day/image_7.png',
                    y: -750
                }
            },
            1207: {
                0: {
                    image: '/images/night/image_15.png',
                    y: -950
                },
                1: {
                    image: '/images/day/image_15.png',
                    y: -950
                }
            },
            1213: {
                0: {
                    image: '/images/night/image_6.png',
                    y: -1300
                },
                1: {
                    image: '/images/day/image_6.png',
                    y: 0
                }
            },
            1216: {
                0: {
                    image: '/images/night/image_6.png',
                    y: -1300
                },
                1: {
                    image: '/images/day/image_6.png',
                    y: 0
                }
            },
            1219: {
                0: {
                    image: '/images/night/image_6.png',
                    y: -1300
                },
                1: {
                    image: '/images/day/image_6.png',
                    y: 0
                }
            },
            1222: {
                0: {
                    image: '/images/night/image_16.png',
                    y: 0
                },
                1: {
                    image: '/images/day/image_16.png',
                    y: -500
                }
            },
            1225: {
                0: {
                    image: '/images/night/image_16.png',
                    y: 0
                },
                1: {
                    image: '/images/day/image_16.png',
                    y: -500
                }
            },
            1237: {
                0: {
                    image: '/images/night/image_17.png',
                    y: -250
                },
                1: {
                    image: '/images/day/image_17.png',
                    y: -750
                }
            },
            1240: {
                0: {
                    image: '/images/night/image_5.png',
                    y: -100
                },
                1: {
                    image: '/images/day/image_5.png',
                    y: 0
                }
            },
            1243: {
                0: {
                    image: '/images/night/image_15.png',
                    y: -950
                },
                1: {
                    image: '/images/day/image_15.png',
                    y: -950
                }
            },
            1246: {
                0: {
                    image: '/images/night/image_15.png',
                    y: -950
                },
                1: {
                    image: '/images/day/image_15.png',
                    y: -950
                }
            },
            1249: {
                0: {
                    image: '/images/night/image_7.png',
                    y: 0
                },
                1: {
                    image: '/images/day/image_7.png',
                    y: -750
                }
            },
            1252: {
                0: {
                    image: '/images/night/image_7.png',
                    y: 0
                },
                1: {
                    image: '/images/day/image_7.png',
                    y: -750
                }
            },
            1255: {
                0: {
                    image: '/images/night/image_6.png',
                    y: -1300
                },
                1: {
                    image: '/images/day/image_6.png',
                    y: 0
                }
            },
            1258: {
                0: {
                    image: '/images/night/image_16.png',
                    y: 0
                },
                1: {
                    image: '/images/day/image_16.png',
                    y: -500
                }
            },
            1261: {
                0: {
                    image: '/images/night/image_17.png',
                    y: -250
                },
                1: {
                    image: '/images/day/image_17.png',
                    y: -750
                }
            },
            1264: {
                0: {
                    image: '/images/night/image_17.png',
                    y: -250
                },
                1: {
                    image: '/images/day/image_17.png',
                    y: -750
                }
            },
        }
        return data[conditionCode][isDay]
    }
    else {
        return {
            image: 'none',
            y: 0
        }
    }
}