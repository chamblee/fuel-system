import React from 'react';
import './fuel_system_app.css';
import StaticSVG from './StaticSVG'
import Manifold from './Manifold'
import RotaryValve from './RotaryValve'
import SpringValve from './SpringValve'
import FuelPump from './FuelPump'
import PressureSwitch from './PressureSwitch'
import ToggleSwitch from './ToggleSwitch'
import RotarySwitch from './RotarySwitch'
import QuantityIndicator from './QuantityIndicator'

class App extends React.Component {
    state = {
        manifolds: [
                {
                    id: "tank_3_boost_line1",
                    points: "477.01 186.16 477.01 182.97 490.67 182.97 490.67 140.78 472.8 140.78 472.8 160.06 469.7 160.06 469.7 137.46 490.8 137.46 490.8 128.97 493.65 128.97 493.65 186.16 477.01 186.16",
                    fuelPresent: false,
                    fuelSources: ["pump_3_boost"]
                },
                {
                    id: "tank_3_boost_line2",
                    points: "493.62 118.42 490.78 118.42 490.78 89.02 493.62 89.02 493.62 95.35 513.1 95.35 513.1 98.51 493.62 98.51 493.62 118.42",
                    fuelPresent: false,
                    fuelSources: ["pump_3_boost", "crossfeed_3_valve"]
                },
                {
                    id: "tank_3_boost_line3",
                    points: "511.89 17.6 511.89 16.95 493.61 16.93 493.52 80.54 490.56 80.54 490.56 42.24 490.56 16.93 472.67 16.91 472.67 13.97 534.27 13.97 534.27 16.97 514.89 16.96 514.89 17.6 514.83 22.84 511.89 22.84 511.89 17.6",
                    fuelPresent: false,
                    fuelSources: ["engine_3_valve"],
                    connectedPressureSwitch: "engine_3_pressureSwitch"
                },
                {
                    id: "tank_3_boost_line4",
                    points: "514.65 45.12 511.72 45.12 511.72 37.36 514.72 37.36 514.65 45.12",
                    fuelPresent: false,
                    fuelSources: []
                },
                {
                    id: "tank_3_dump_line1",
                    points: "520.19 182.51 523.25 182.51 523.25 192.06 520.2 192.06 520.19 182.51",
                    fuelPresent: false,
                    fuelSources: ["pump_3_dump"]
                },
                {
                    id: "tank_3_dump_line2",
                    points: "523.16 220.14 520.19 220.14 520.19 202.71 520.19 200.66 523.16 200.66 523.16 220.14",
                    fuelPresent: false,
                    fuelSources: ["pump_3_dump"]
                },
                {
                    id: "tank_4_boost_line1",
                    points: "607.48 128.04 610.38 128.04 610.38 174.64 570.27 174.64 570.27 171.47 607.41 171.47 607.41 140.76 565.74 140.76 565.74 152.53 562.66 152.53 562.66 137.53 607.41 137.53 607.48 128.04",
                    fuelPresent: false,
                    fuelSources: ["pump_4_boost"]
                },
                {
                    id: "tank_4_boost_line2",
                    points: "594.04 108.6 594.04 105.3 607.48 105.3 607.48 89.48 610.31 89.48 610.31 118.94 607.53 118.94 607.53 108.4 594.04 108.6",
                    fuelPresent: false,
                    fuelSources: ["pump_4_boost", "crossfeed_4_valve"]
                },
                {
                    id: "tank_4_boost_line3",
                    points: "628.47 17.6 628.47 16.95 610.19 16.93 610.1 80.54 607.13 80.54 607.13 42.24 607.13 16.93 589.24 16.91 589.24 13.97 650.85 13.97 650.85 16.97 631.47 16.96 631.47 17.6 631.4 22.84 628.47 22.84 628.47 17.6",
                    fuelPresent: false,
                    fuelSources: ["engine_4_valve"],
                    connectedPressureSwitch: "engine_4_pressureSwitch"
                },
                {
                    id: "tank_4_boost_line4",
                    points: "631.23 45.12 628.29 45.12 628.29 37.36 631.29 37.36 631.23 45.12",
                    fuelPresent: false,
                    fuelSources: []
                },
                {
                    id: "tank_4_dump_line1",
                    points: "680.28 183.28 683.12 183.28 683.12 178.29 683.12 172.84 680.28 172.84 680.28 183.28",
                    fuelPresent: false,
                    fuelSources: ["pump_4_dump"]
                },
                {
                    id: "tank_4_dump_line2",
                    points: "680.16 207.93 683.18 207.93 683.18 193.1 680.22 193.1 680.16 207.93",
                    fuelPresent: false,
                    fuelSources: ["pump_4_dump"]
                },
                {
                    id: "right_AUX_line1",
                    points: "429.48 173.16 429.48 169.98 446.43 169.98 446.43 173.16 443 173.16 429.48 173.16",
                    fuelPresent: false,
                    fuelSources: ["pump_right_AUX"]
                },
                {
                    id: "right_AUX_line2",
                    points: "455.3 169.98 455.3 173.17 459.76 173.17 459.76 198.74 462.74 198.74 462.74 121.55 459.58 121.55 459.58 134.61 453.75 134.61 453.75 137.81 459.64 137.81 459.64 152.29 455.05 152.29 455.05 155.56 459.76 155.56 459.76 170.05 455.3 169.98",
                    fuelPresent: false,
                    fuelSources: ["pump_right_AUX","right_bypass_valve","crossfeed_right_AUX_valve"],
                    connectedPressureSwitch: "right_AUX_line_pressureSwitch"
                },
                {
                    id: "right_EXT_main_line",
                    points: "542 264.68 542 261.48 551.93 261.48 551.93 244.71 443.92 244.71 443.92 214.69 440.3 214.69 440.3 217.62 437.37 217.62 437.37 127.71 426.42 127.71 426.42 124.44 437.43 124.44 437.43 120.19 440.42 120.19 440.42 134.63 447.64 134.63 447.64 137.89 440.36 137.89 440.36 211.5 450.19 211.5 450.19 214.76 446.83 214.76 446.83 241.58 554.94 241.58 554.94 261.55 565.21 261.55 565.21 264.81 554.88 264.81 554.88 270.4 551.89 270.4 551.89 264.81 542 264.68",
                    fuelPresent: false,
                    fuelSources: ["pump_right_EXT_FWD", "pump_right_EXT_AFT","right_bypass_valve", "right_refuel_manifold_springValve","crossfeed_right_EXT_valve"],
                    connectedPressureSwitch: "right_EXT_main_pressureSwitch"
                },
                {
                    id: "right_EXT_FWD_line",
                    points: "526.02 276.98 523.1 276.98 523.1 261.48 533.65 261.48 533.65 264.8 526.02 264.8 526.02 276.98",
                    fuelPresent: false,
                    fuelSources: ["pump_right_EXT_FWD"]
                },
                {
                    id: "right_EXT_AFT_line",
                    points: "583.02 277.1 586.01 277.1 586.01 261.55 574.14 261.55 574.14 264.81 582.9 264.81 583.02 277.1",
                    fuelPresent: false,
                    fuelSources: ["pump_right_EXT_AFT"]
                },
                {
                    id: "refuel_line",
                    points: "377.5 232.32 377.5 220.35 380.46 220.35 380.46 232.32 398.47 232.32 398.47 176.3 401.3 176.3 401.3 232.25 437.39 232.25 437.39 226.33 440.46 226.33 440.46 232.39 459.65 232.39 459.65 214.57 456.38 214.57 456.38 211.54 459.77 211.54 459.77 205.89 462.66 205.89 462.66 232.38 500.72 232.38 500.72 183.73 503.74 183.73 503.74 209.37 650.69 209.37 650.69 198.44 642.06 198.44 642.06 195.21 650.69 195.21 650.69 173.06 653.65 173.06 653.65 234.69 680.22 234.69 680.22 214.46 683.24 214.46 683.24 234.69 699.76 234.69 699.76 237.99 520.25 237.99 520.25 227.44 523.27 227.44 523.27 234.69 650.69 234.69 650.69 212.41 503.73 212.41 503.73 235.42 380.5 235.42 380.5 246.82 377.54 246.82 377.54 235.42",
                    fuelPresent: false,
                    fuelSources: ["tank_3_dump_valve", "tank_4_dump_valve", "right_AUX_dump_valve", "right_EXT_dump_valve"]
                },
                {
                    id: "crossfeed_line2",
                    points: "369.49 108.43 369.49 105.22 448.91 105.22 448.91 93.61 451.86 93.61 451.86 105.29 534.66 105.29 534.66 98.27 518.71 98.27 518.71 94.99 537.67 94.99 537.67 105.35 589.24 105.35 589.24 108.7 462.65 108.7 462.65 113.75 459.71 113.75 459.71 108.3 440.39 108.3 440.39 114.14 437.26 114.14 437.26 108.3 380.53 108.3 380.53 212.97 377.58 212.97 377.58 108.47 369.49 108.43",
                    fuelPresent: false,
                    fuelSources: ["crossfeed_3_valve", "crossfeed_4_valve", "crossfeed_right_AUX_valve", "crossfeed_right_EXT_valve", "crossfeed_separation_valve"],
                    fuelTrap: ["crossfeed_2_valve", "crossfeed_3_valve", "crossfeed_4_valve", "crossfeed_right_AUX_valve", "crossfeed_right_EXT_valve"],
                    fuelTrapped: false
                },
                {
                    id: "right_dump_line",
                    points: "717.76 256.64 714.8 256.64 714.8 237.79 705.55 237.79 705.55 234.43 711.97 234.43 711.97 151.12 697.42 151.12 697.42 147.83 714.92 147.83 714.92 234.56 717.82 234.56 717.76 256.64",
                    fuelPresent: false,
                    fuelSources: ["right_dump_valve"]
                }
        ],
        rotaryValves: [
                {
                    id: "engine_3_valve",
                    open: true,
                    failed: false,
                    fuelSources: ["tank_3_boost_line2"],
                    fuelPresent: false,
                    path_1_d: "M502,98.55a5.3,5.3,0,0,1-10.6,0h0a5.3,5.3,0,0,1,10.6,0Z",
                    path_2_d: "M501.62,93.62a7,7,0,1,0,0,9.86A7,7,0,0,0,501.62,93.62Zm-9.1.77a5.82,5.82,0,0,1,4.16-1.73,5.92,5.92,0,0,1,3.3,1l-8.18,8.18a5.92,5.92,0,0,1-1-3.3A5.86,5.86,0,0,1,492.52,94.39Zm8.32,8.32a5.86,5.86,0,0,1-4.16,1.73,5.92,5.92,0,0,1-3.3-1l8.18-8.18A5.89,5.89,0,0,1,500.84,102.71Z",
                    lineX1: "488.5",
                    lineY1: "84",
                    lineX2: "495.9",
                    lineY2: "84"
                },
                {
                    id: "engine_4_valve",
                    open: true,
                    failed: false,
                    fuelSources: ["tank_4_boost_line2"],
                    fuelPresent: false,
                    path_1_d: "M618.71,98.55a5.31,5.31,0,0,1-10.61,0h0a5.31,5.31,0,0,1,10.61,0Z",
                    path_2_d: "M618.34,93.62a7,7,0,1,0,0,9.86A6.93,6.93,0,0,0,618.34,93.62Zm-9.1.77a5.84,5.84,0,0,1,4.17-1.73,5.92,5.92,0,0,1,3.3,1l-8.18,8.18a5.89,5.89,0,0,1,.71-7.46Zm8.33,8.32a5.88,5.88,0,0,1-7.46.72l8.17-8.18A5.89,5.89,0,0,1,617.57,102.71Z",
                    lineX1: "605",
                    lineY1: "84",
                    lineX2: "612.5",
                    lineY2: "84"
                },
                {
                    id: "tank_3_dump_valve",
                    open: false,
                    failed: false,
                    fuelSources: ["tank_3_dump_line2"],
                    fuelPresent: false,
                    path_1_d: "M526.19,232.6a5.31,5.31,0,0,1,0,10.61h0a5.31,5.31,0,0,1,0-10.61Z",
                    path_2_d: "M521.26,242.85a7,7,0,1,0,0-9.87A6.94,6.94,0,0,0,521.26,242.85Zm9.09-.78a5.88,5.88,0,0,1-7.46.72l8.18-8.18a5.92,5.92,0,0,1,1,3.3A5.86,5.86,0,0,1,530.35,242.07ZM522,233.75a5.86,5.86,0,0,1,4.16-1.73,5.92,5.92,0,0,1,3.3,1l-8.18,8.18A5.89,5.89,0,0,1,522,233.75Z",
                    lineX1: "525.34",
                    lineY1: "223.31",
                    lineX2: "518.01",
                    lineY2: "223.31"
                },
                {
                    id: "tank_4_dump_valve",
                    open: false,
                    failed: false,
                    fuelSources: ["tank_4_dump_line2"],
                    fuelPresent: false,
                    path_1_d: "M686,221a5.3,5.3,0,1,1,0,10.6h0a5.3,5.3,0,1,1,0-10.6Z",
                    path_2_d: "M681.09,231.21a7,7,0,1,0,0-9.87A7,7,0,0,0,681.09,231.21Zm9.1-.77a5.89,5.89,0,0,1-7.46.71l8.18-8.17a5.88,5.88,0,0,1-.72,7.46Zm-8.32-8.33a5.89,5.89,0,0,1,7.46-.71l-8.18,8.17A5.89,5.89,0,0,1,681.87,222.11Z",
                    lineX1: "685.18",
                    lineY1: "211.68",
                    lineX2: "677.85",
                    lineY2: "211.68"
                },
                {
                    id: "right_AUX_dump_valve",
                    open: false,
                    failed: false,
                    fuelSources: ["right_AUX_line2"],
                    fuelPresent: false,
                    path_1_d: "M465.77,210.42a5.31,5.31,0,0,1,0,10.61h0a5.31,5.31,0,0,1,0-10.61Z",
                    path_2_d: "M460.84,220.66a7,7,0,1,0,0-9.86A6.91,6.91,0,0,0,460.84,220.66Zm9.09-.77a5.82,5.82,0,0,1-4.16,1.73,5.92,5.92,0,0,1-3.3-1l8.18-8.18a5.92,5.92,0,0,1,1,3.3A5.82,5.82,0,0,1,469.93,219.89Zm-8.32-8.32a5.86,5.86,0,0,1,4.16-1.73,5.92,5.92,0,0,1,3.3,1L460.89,219A5.89,5.89,0,0,1,461.61,211.57Z",
                    lineX1: "464.92",
                    lineY1: "201.13",
                    lineX2: "457.59",
                    lineY2: "201.13"
                },
                {
                    id: "right_EXT_dump_valve",
                    open: false,
                    failed: false,
                    fuelSources: ["right_EXT_main_line", "refuel_line"],
                    fuelPresent: false,
                    path_1_d: "M451.2,227.57a5.31,5.31,0,0,1,10.61,0h0a5.31,5.31,0,0,1-10.61,0Z",
                    path_2_d: "M461.44,222.64a7,7,0,1,0,0,9.87A6.93,6.93,0,0,0,461.44,222.64Zm-9.09.77a5.86,5.86,0,0,1,4.16-1.73,5.92,5.92,0,0,1,3.3,1l-8.18,8.18a5.88,5.88,0,0,1,.72-7.46Zm8.32,8.32a5.88,5.88,0,0,1-7.46.72l8.18-8.18A5.9,5.9,0,0,1,460.67,231.73Z",
                    lineX1: "451.99",
                    lineY1: "209.31",
                    lineX2: "451.99",
                    lineY2: "216.63"
                },
                {
                    id: "right_dump_valve",
                    open: false,
                    failed: false,
                    fuelSources: ["refuel_line"],
                    fuelPresent: false,
                    path_1_d: "M711.83,250.77a5.3,5.3,0,0,1-10.6,0h0a5.3,5.3,0,0,1,10.6,0Z",
                    path_2_d: "M711.46,245.84a7,7,0,1,0,0,9.87A6.91,6.91,0,0,0,711.46,245.84Zm-9.09.77a5.86,5.86,0,0,1,4.16-1.73,5.92,5.92,0,0,1,3.3,1l-8.18,8.18a5.92,5.92,0,0,1-1-3.3A5.86,5.86,0,0,1,702.37,246.61Zm8.32,8.32a5.88,5.88,0,0,1-7.46.72l8.18-8.18A5.89,5.89,0,0,1,710.69,254.93Z",
                    lineX1: "702.01",
                    lineY1: "239.83",
                    lineX2: "702.01",
                    lineY2: "232.51"
                },
                {
                    id: "crossfeed_3_valve",
                    open: false,
                    failed: false,
                    fuelSources: ["tank_3_boost_line1", "crossfeed_line2"],
                    fuelPresent: false,
                    path_1_d: "M525.13,111.06a5.31,5.31,0,0,1-10.61,0h0a5.31,5.31,0,0,1,10.61,0Z",
                    path_2_d: "M524.76,106.13a7,7,0,1,0,0,9.86A6.93,6.93,0,0,0,524.76,106.13Zm-9.1.77a5.89,5.89,0,0,1,7.47-.72L515,114.36a5.89,5.89,0,0,1,.71-7.46Zm8.33,8.32a5.88,5.88,0,0,1-7.46.72l8.17-8.18A5.89,5.89,0,0,1,524,115.22Z",
                    lineX1: "515.31",
                    lineY1: "100.12",
                    lineX2: "515.31",
                    lineY2: "92.8"
                },
                {
                    id: "crossfeed_4_valve",
                    open: false,
                    failed: false,
                    fuelSources: ["tank_4_boost_line1", "crossfeed_line2"],
                    fuelPresent: false,
                    path_1_d: "M601.29,121.34a5.3,5.3,0,1,1-10.6,0h0a5.3,5.3,0,1,1,10.6,0Z",
                    path_2_d: "M600.93,116.4a7,7,0,1,0,0,9.87A7,7,0,0,0,600.93,116.4Zm-9.1.77a5.89,5.89,0,0,1,7.46-.71l-8.18,8.17a5.88,5.88,0,0,1,.72-7.46Zm8.33,8.33a5.91,5.91,0,0,1-7.47.71l8.18-8.17A5.9,5.9,0,0,1,600.16,125.5Z",
                    lineX1: "591.47",
                    lineY1: "110.4",
                    lineX2: "591.47",
                    lineY2: "103.07"
                },
                {
                    id: "crossfeed_separation_valve",
                    open: false,
                    failed: false,
                    fuelSources: ["crossfeed_line2"],
                    fuelPresent: false,
                    path_1_d: "M365.91,122.05a5.31,5.31,0,0,1,10.61,0h0a5.31,5.31,0,1,1-10.61,0Z",
                    path_2_d: "M376.15,117.12a7,7,0,1,0,0,9.87A6.94,6.94,0,0,0,376.15,117.12Zm-9.09.77a5.89,5.89,0,0,1,7.46-.71l-8.18,8.17a5.88,5.88,0,0,1,.72-7.46Zm8.32,8.33a5.89,5.89,0,0,1-7.46.71l8.18-8.17A5.89,5.89,0,0,1,375.38,126.22Z",
                    lineX1: "366.71",
                    lineY1: "103.79",
                    lineX2: "366.71",
                    lineY2: "111.11"
                },
                {
                    id: "crossfeed_right_EXT_valve",
                    open: false,
                    failed: false,
                    fuelSources: ["right_EXT_main_line","crossfeed_line2"],
                    fuelPresent: false,
                    path_1_d: "M443.25,126.3a5.3,5.3,0,1,1,0,10.6h0a5.3,5.3,0,1,1,0-10.6Z",
                    path_2_d: "M438.31,136.54a7,7,0,1,0,0-9.87A7,7,0,0,0,438.31,136.54Zm9.1-.77a5.89,5.89,0,0,1-7.46.71l8.17-8.17a5.78,5.78,0,0,1,1,3.29A5.85,5.85,0,0,1,447.41,135.77Zm-8.33-8.33a5.87,5.87,0,0,1,4.17-1.72,5.78,5.78,0,0,1,3.29,1l-8.17,8.17A5.9,5.9,0,0,1,439.08,127.44Z",
                    lineX1: "442.39",
                    lineY1: "117",
                    lineX2: "435.07",
                    lineY2: "117"
                },
                {
                    id: "crossfeed_right_AUX_valve",
                    open: false,
                    failed: false,
                    fuelSources: ["right_AUX_line2","crossfeed_line2"],
                    fuelPresent: false,
                    path_1_d: "M465.77,126.3a5.3,5.3,0,1,1,0,10.6h0a5.3,5.3,0,1,1,0-10.6Z",
                    path_2_d: "M460.84,136.54a7,7,0,1,0,0-9.87A6.94,6.94,0,0,0,460.84,136.54Zm9.09-.77a5.89,5.89,0,0,1-7.46.71l8.18-8.17a5.88,5.88,0,0,1-.72,7.46Zm-8.32-8.33a5.89,5.89,0,0,1,7.46-.71l-8.18,8.17A5.89,5.89,0,0,1,461.61,127.44Z",
                    lineX1: "464.92",
                    lineY1: "117",
                    lineX2: "457.59",
                    lineY2: "117"
                },
                {
                    id: "right_bypass_valve",
                    open: false,
                    failed: false,
                    fuelSources: ["right_AUX_line2","right_EXT_main_line"],
                    fuelPresent: false,
                    path_1_d: "M449.2,151.24a5.31,5.31,0,0,1,10.61,0h0a5.31,5.31,0,1,1-10.61,0Z",
                    path_2_d: "M459.44,146.31a7,7,0,1,0,0,9.87A7,7,0,0,0,459.44,146.31Zm-9.09.77a5.89,5.89,0,0,1,7.46-.71l-8.18,8.17a5.88,5.88,0,0,1,.72-7.46Zm8.32,8.33a5.89,5.89,0,0,1-7.46.71l8.18-8.17A5.9,5.9,0,0,1,458.67,155.41Z",
                    lineX1: "449.99",
                    lineY1: "132.98",
                    lineX2: "449.99",
                    lineY2: "140.31"
                },
                {
                    id: "spr_valve_1",
                    open: false,
                    failed: false,
                    fuelSources: [],
                    fuelPresent: false,
                    path_1_d: "M378.19,263.62a5.3,5.3,0,0,1,10.6,0h0a5.3,5.3,0,0,1-10.6,0Z",
                    path_2_d: "M388.43,258.69a7,7,0,1,0,0,9.86A6.93,6.93,0,0,0,388.43,258.69Zm-9.1.77a5.88,5.88,0,0,1,7.46-.72l-8.17,8.18a5.89,5.89,0,0,1,.71-7.46Zm8.33,8.32a5.88,5.88,0,0,1-7.46.72l8.17-8.18A5.9,5.9,0,0,1,387.66,267.78Z",
                    lineX1: "375.32",
                    lineY1: "249.02",
                    lineX2: "382.64",
                    lineY2: "249.02"
                },
                {
                    id: "spr_valve_3",
                    open: false,
                    failed: false,
                    fuelSources: [],
                    fuelPresent: false,
                    path_1_d: "M383.49,225.29a5.31,5.31,0,1,1,0,10.61h0a5.31,5.31,0,0,1,0-10.61Z",
                    path_2_d: "M378.56,235.53a7,7,0,1,0,0-9.86A6.93,6.93,0,0,0,378.56,235.53Zm9.1-.77a5.88,5.88,0,0,1-7.46.72l8.17-8.18a5.89,5.89,0,0,1-.71,7.46Zm-8.33-8.32a5.88,5.88,0,0,1,7.46-.72l-8.17,8.18A5.9,5.9,0,0,1,379.33,226.44Z",
                    lineX1: "382.64",
                    lineY1: "216",
                    lineX2: "375.32",
                    lineY2: "216"
                }
        ],
        springValves: [
                {
                    id: "tank_3_boost_springValve",
                    fuelPresent: false,
                    rectX: "488.5",
                    rectY: "112.5",
                    springClasses: "spring topCenter",
                    circX: "492.16",
                    circY: "125.19",
                    pathD: "M497.71,137.47s-3.7-.3-3.53-1.27c.29-1.62,4.36-1.52,4.36-1.52s-5,.64-4.39-.79c.52-1.15,4.39-1.35,4.39-1.35s-5.19.59-4.47-.88,4.71-1.35,4.71-1.35-5.78.4-4.48-1.13c.87-1,4.48-1.17,4.48-1.17"
                },
                {
                    id: "tank_3_dump_springValve",
                    fuelPresent: false,
                    rectX: "518.16",
                    rectY: "189.28",
                    springClasses: "spring bottomCenter",
                    circX: "521.68",
                    circY: "192.85",
                    pathD: "M525.15,209.77s3.71.3,3.53,1.27c-.29,1.63-4.35,1.53-4.35,1.53s5-.64,4.38.79c-.52,1.14-4.38,1.35-4.38,1.35s5.18-.59,4.47.87-4.72,1.35-4.72,1.35,5.79-.39,4.48,1.13c-.86,1-4.48,1.18-4.48,1.18"
                },
                {
                    id: "tank_4_boost_springValve",
                    fuelPresent: false,
                    rectX: "605.5",
                    rectY: "112.5",
                    springClasses: "spring topCenter",
                    circX: "608.89",
                    circY: "125.19",
                    pathD: "M614.44,137.47s-3.7-.3-3.53-1.27c.3-1.62,4.36-1.52,4.36-1.52s-5,.64-4.38-.79c.51-1.15,4.38-1.35,4.38-1.35s-5.19.59-4.47-.88,4.71-1.35,4.71-1.35-5.78.4-4.48-1.13c.87-1,4.48-1.17,4.48-1.17"
                },
                {
                    id: "tank_4_dump_springValve",
                    fuelPresent: false,
                    rectX: "678",
                    rectY: "178.95",
                    springClasses: "spring bottomCenter",
                    circX: "681.51",
                    circY: "182.53",
                    pathD: "M685,199.45s3.71.3,3.53,1.27c-.29,1.63-4.36,1.53-4.36,1.53s5-.65,4.39.79c-.52,1.14-4.39,1.35-4.39,1.35s5.19-.59,4.48.87-4.72,1.35-4.72,1.35,5.79-.39,4.48,1.13c-.86,1-4.48,1.17-4.48,1.17"
                },
                {
                    id: "right_AUX_springValve",
                    fuelPresent: false,
                    rectX: "442.5",
                    rectY: "167.5",
                    springClasses: "spring horizontal leftCenter",
                    circX: "445.52",
                    circY: "171.32",
                    pathD: "M452.35,187s.3-3.7,1.27-3.53c1.63.3,1.53,4.36,1.53,4.36s-.64-5,.79-4.38c1.14.52,1.35,4.38,1.35,4.38s-.59-5.19.88-4.47,1.35,4.71,1.35,4.71-.4-5.78,1.13-4.48c1,.87,1.17,4.48,1.17,4.48"
                },
                {
                    id: "right_EXT_FWD_springValve",
                    fuelPresent: false,
                    rectX: "527.88",
                    rectY: "258.93",
                    springClasses: "spring horizontal leftCenter",
                    circX: "531.46",
                    circY: "262.44",
                    pathD: "M538.29,278.07s.3-3.7,1.27-3.52c1.63.29,1.53,4.35,1.53,4.35s-.65-5,.79-4.38c1.14.52,1.35,4.38,1.35,4.38s-.59-5.18.87-4.47,1.35,4.72,1.35,4.72-.39-5.79,1.13-4.48c1,.86,1.18,4.48,1.18,4.48"
                },
                {
                    id: "right_EXT_AFT_springValve",
                    fuelPresent: false,
                    rectX: "560.88",
                    rectY: "258.93",
                    springClasses: "spring horizontal rightCenter",
                    circX: "572.64",
                    circY: "262.44",
                    pathD: "M574.84,276s-.3,3.7-1.27,3.52c-1.63-.29-1.53-4.35-1.53-4.35s.65,5-.79,4.38c-1.14-.52-1.35-4.38-1.35-4.38s.59,5.18-.87,4.47-1.35-4.71-1.35-4.71.39,5.78-1.13,4.47c-1-.86-1.18-4.47-1.18-4.47"
                },
                {
                    id: "right_refuel_manifold_springValve",
                    fuelPresent: false,
                    rectX: "435.3",
                    rectY: "215.26",
                    springClasses: "spring topCenter",
                    circX: "438.81",
                    circY: "227.78",
                    pathD: "M444.36,240.07s-3.7-.3-3.53-1.27c.3-1.63,4.36-1.53,4.36-1.53s-5,.64-4.38-.79c.52-1.14,4.38-1.35,4.38-1.35s-5.19.59-4.47-.88,4.71-1.35,4.71-1.35-5.78.4-4.48-1.13c.87-1,4.48-1.17,4.48-1.17"
                }
        ],
        fuelPumps: [
                {
                    id: "pump_3_boost",
                    transform: "translate(316, 12)",
                    connectedSpringValve: "tank_3_boost_springValve",
                    connectedToggleSwitch: "tank_3_boostSwitch",
                    fuelPresent: false,
                    failed: false
                },
                {
                    id: "pump_3_dump",
                    connectedSpringValve: "tank_3_dump_springValve",
                    connectedToggleSwitch: "tank_3_dumpSwitch",
                    transform: "translate(361, 8)",
                    fuelPresent: false,
                    failed: false
                },
                {
                    id: "pump_4_boost",
                    transform: "translate(410, 2)",
                    connectedSpringValve: "tank_4_boost_springValve",
                    connectedToggleSwitch: "tank_4_boostSwitch",
                    fuelPresent: false,
                    failed: false
                },
                {
                    id: "pump_4_dump",
                    connectedSpringValve: "tank_4_dump_springValve",
                    connectedToggleSwitch: "tank_4_dumpSwitch",
                    transform: "translate(522, -3)",
                    fuelPresent: false,
                    failed: false
                },
                {
                    id: "pump_right_AUX",
                    transform: "translate(262, 2)",
                    connectedSpringValve: "right_AUX_springValve",
                    connectedToggleSwitch: "right_AUX_boostSwitch",
                    fuelPresent: false,
                    failed: false,
                    emptyLightStatus: 'flash'
                },
                {
                    id: "pump_right_EXT_FWD",
                    transform: "translate(365, 110)",
                    connectedSpringValve: "right_EXT_FWD_springValve",
                    connectedToggleSwitch: "right_EXT_FWD_boostSwitch",
                    fuelPresent: false,
                    failed: false,
                    emptyLightStatus: 'flash'
                },
                {
                    id: "pump_right_EXT_AFT",
                    transform: "translate(425, 110)",
                    connectedSpringValve: "right_EXT_AFT_springValve",
                    connectedToggleSwitch: "right_EXT_AFT_boostSwitch",
                    fuelPresent: false,
                    failed: false,
                    emptyLightStatus: 'flash'
                }
        ],
        pressureSwitches: [
                {
                    id: "engine_3_pressureSwitch",
                    transform: "rotate(180, 300, 16)",
                    fuelPresent: false
                },
                {
                    id: "engine_4_pressureSwitch",
                    transform: "rotate(180, 360, 16)",
                    fuelPresent: false
                },
                {
                    id: "right_AUX_line_pressureSwitch",
                    transform: "rotate(180, 279, 83) scale(0.8)",
                    fuelPresent: false
                },
                {
                    id: "right_EXT_main_pressureSwitch",
                    transform: "rotate(180, 278, 70)",
                    fuelPresent: false
                }
        ],
        toggleSwitches: [
                {
                    id: "tank_3_boostSwitch",
                    transform: "translate(546, 0)",
                    connectedPump: "pump_3_boost",
                    switchedOn: false
                },
                {
                    id: "tank_4_boostSwitch",
                    transform: "translate(623, 0)",
                    connectedPump: "pump_4_boost",
                    switchedOn: false
                },
                {
                    id: "right_AUX_boostSwitch",
                    transform: "translate(474, 0)",
                    connectedPump: "pump_right_AUX",
                    switchedOn: false
                },
                {
                    id: "right_EXT_FWD_boostSwitch",
                    transform: "translate(418, -17)",
                    connectedPump: "pump_right_EXT_FWD",
                    switchedOn: false
                },
                {
                    id: "right_EXT_AFT_boostSwitch",
                    transform: "translate(375, -17)",
                    connectedPump: "pump_right_EXT_AFT",
                    switchedOn: false
                },
                {
                    id: "tank_3_dumpSwitch",
                    transform: "translate(530, -120)",
                    connectedPump: "pump_3_dump",
                    connectedDumpValve: "tank_3_dump_valve",
                    switchedOn: false
                },
                {
                    id: "tank_4_dumpSwitch",
                    transform: "translate(572, -120)",
                    connectedPump: "pump_4_dump",
                    connectedDumpValve: "tank_4_dump_valve",
                    switchedOn: false
                },
                {
                    id: "right_AUX_dumpSwitch",
                    transform: "translate(458, -120)",
                    connectedPump: "pump_right_AUX",
                    connectedDumpValve: "right_AUX_dump_valve",
                    switchedOn: false
                },
                {
                    id: "right_EXT_dumpSwitch",
                    transform: "translate(396, -120)",
                    connectedPump: "pump_right_EXT_AFT",
                    connectedDumpValve: "right_EXT_dump_valve",
                    switchedOn: false
                },
                {
                    id: "right_dump_valveSwitch",
                    transform: "translate(658, -10), scale(0.75)",
                    connectedPump: "",
                    connectedDumpValve: "right_dump_valve",
                    switchedOn: false
                }

        ],
        rotarySwitches: [
                {
                    id: "crossfeed_switch_tank_3",
                    connectedValve: "crossfeed_3_valve",
                    transform: "translate(491, 0)",
                    switchedOn: false
                },
                {
                    id: "crossfeed_switch_tank_4",
                    connectedValve: "crossfeed_4_valve",
                    transform: "translate(568, 0)",
                    switchedOn: false
                },
                {
                    id: "crossfeed_switch_right_AUX",
                    connectedValve: "crossfeed_right_AUX_valve",
                    transform: "translate(446, 0)",
                    switchedOn: false
                },
                {
                    id: "bypass_switch_right",
                    connectedValve: "right_bypass_valve",
                    transform: "translate(408, -20)",
                    switchedOn: false
                },
                {
                    id: "crossfeed_switch_right_EXT",
                    connectedValve: "crossfeed_right_EXT_valve",
                    transform: "translate(369, 0)",
                    switchedOn: false
                }
        ],
        quantityIndicators: [
            {
                id: 'tank_3_indicator_needle',
                points: '599.78 378.36 601.85 379.12 595.96 395.88 592.72 401.52 593.89 395.14 599.78 378.36',
                quantity: 7000,
                maxQuantity: 9000,
                minQuantity: 1800,
                dumping: "no"
            },
            {
                id: 'tank_4_indicator_needle',
                points: '676.69 378.36 678.76 379.12 672.77 395.85 669.51 401.49 670.71 395.11 676.69 378.36',
                quantity: 6000,
                maxQuantity: 10000,
                minQuantity: 2100,
                dumping: "no"
            },
            {
                id: 'right_AUX_indicator_needle',
                points: '528.01 378.36 530.11 379.12 524.15 395.88 520.89 401.52 522.09 395.11 528.01 378.36',
                quantity: 6000,
                maxQuantity: 7000,
                minQuantity: 0,
                dumping: "no"
            },
            {
                id: 'right_EXT_indicator_needle',
                points: '451.45 378.36 453.51 379.12 447.56 395.88 444.3 401.52 445.49 395.11 451.45 378.36',
                quantity: 5000,
                maxQuantity: 10000,
                minQuantity: 0,
                dumping: "no"
            },
            {
                id: 'total_quan_needle',
                points: '364.71 356.16 366.77 356.9 360.82 373.65 357.56 379.29 358.75 372.89 364.71 356.16',
                quantity: 0,
                maxQuantity: 70000,
                minQuantity: 0,
                dumping: "no"
            }
        ],
        leftGuardVisible: true,
        rightGuardVisible: true,
        systemPSI: 0,
        systemPSI_fluxCounter: 0,
        stateTestVal: 0
    };

    /* 
    ----------------------------------------------------------------
    Event Handlers
    ----------------------------------------------------------------
    */

    handleFailEvent = (id, itemType) => {
        let newFuelPumps = [...this.state.fuelPumps];
        let newRotaryValves = [...this.state.rotaryValves];
        let newSpringValves = [...this.state.springValves];
        let newToggleSwitches = [...this.state.toggleSwitches];
        let stateTest = this.state.stateTestVal;

        //is failed item a fuel pump or rotary valve
        if (itemType === "fuelPumps") {
            const fuelPumpIndex = this.state.fuelPumps.findIndex(fuelPump => fuelPump.id === id);
            
            //get indexes of connected spring valve and toggle switch
            const springValveIndex = newSpringValves.findIndex(valve => valve.id === newFuelPumps[fuelPumpIndex].connectedSpringValve);
            const toggleSwitchIndex = newToggleSwitches.findIndex(sw => sw.id === newFuelPumps[fuelPumpIndex].connectedToggleSwitch);
            
            //toggle fuel pump failed status
            newFuelPumps[fuelPumpIndex] = {...newFuelPumps[fuelPumpIndex], failed: !newFuelPumps[fuelPumpIndex].failed};
            
            //if pump is not failed and toggle switch is on then fuel is present
            if (newFuelPumps[fuelPumpIndex].failed) {
                newFuelPumps[fuelPumpIndex].fuelPresent = false;
                newSpringValves[springValveIndex].fuelPresent = false;
            } else if (newToggleSwitches[toggleSwitchIndex].switchedOn) {
                newFuelPumps[fuelPumpIndex].fuelPresent = true;
                newSpringValves[springValveIndex].fuelPresent = true;
            }
        } else if (itemType === "rotaryValves") {
            //toggle rotary valve failed status
            const rotaryValveIndex = this.state.rotaryValves.findIndex(valve => valve.id === id);
            newRotaryValves[rotaryValveIndex] = {...newRotaryValves[rotaryValveIndex], failed: !newRotaryValves[rotaryValveIndex].failed};
        }

        this.setState( () => {
            return {
                fuelPumps: newFuelPumps,
                rotaryValves: newRotaryValves,
                springValves: newSpringValves,
                stateTestVal: stateTest + 1
            };
        });
    }
    
    handleToggleSwitch = (id) => {
        let newToggleSwitches = [...this.state.toggleSwitches];
        let newFuelPumps = [...this.state.fuelPumps];
        let newSpringValves = [...this.state.springValves];
        let newRotaryValves = [...this.state.rotaryValves];
        let stateTest = this.state.stateTestVal;
        
        //toggle switch status
        const toggleSwitchIndex = newToggleSwitches.findIndex(toggleSwitch => toggleSwitch.id === id);
        newToggleSwitches[toggleSwitchIndex] = {...newToggleSwitches[toggleSwitchIndex], switchedOn: !newToggleSwitches[toggleSwitchIndex].switchedOn};

        //get connected fuel pump
        const connectedFuelPump = newToggleSwitches[toggleSwitchIndex].connectedPump;
        const fuelPumpIndex = newFuelPumps.findIndex(fuelPump => fuelPump.id === connectedFuelPump);

        //get connected spring valve
        const connectedSpringValve = connectedFuelPump ? newFuelPumps[fuelPumpIndex].connectedSpringValve : '';
        const springValveIndex = newSpringValves.findIndex(valve => valve.id === connectedSpringValve);
        
        //get connected dump valve
        const connectedDumpValve = newToggleSwitches[toggleSwitchIndex].connectedDumpValve;
        const dumpValveIndex = newRotaryValves.findIndex(valve => valve.id === connectedDumpValve);

        //if no connected pump then continue as valve-only switch
        if (!connectedFuelPump) {
            newRotaryValves[dumpValveIndex] = {...newRotaryValves[dumpValveIndex], fuelPresent: !newRotaryValves[dumpValveIndex].fuelPresent, open: !newRotaryValves[dumpValveIndex].open}
            this.setState( () => {
                return {
                    toggleSwitches: newToggleSwitches,
                    rotaryValves: newRotaryValves,
                    stateTestVal: stateTest + 1
                };
            });
            return;
        }

        //if targeted pump is not failed then toggle pump on/off
        if (!this.state.fuelPumps[fuelPumpIndex].failed) {
            newFuelPumps[fuelPumpIndex] = {...newFuelPumps[fuelPumpIndex], fuelPresent: !newFuelPumps[fuelPumpIndex].fuelPresent};

            if (connectedSpringValve) {
                newSpringValves[springValveIndex] = {...newSpringValves[springValveIndex], fuelPresent: !newSpringValves[springValveIndex].fuelPresent};
            }

            if (connectedDumpValve && !newRotaryValves[dumpValveIndex].failed) {
                newRotaryValves[dumpValveIndex] = {...newRotaryValves[dumpValveIndex], fuelPresent: !newRotaryValves[dumpValveIndex].fuelPresent, open: !newRotaryValves[dumpValveIndex].open}
            }

            if ((newFuelPumps[fuelPumpIndex].id.indexOf('AUX') > -1 || newFuelPumps[fuelPumpIndex].id.indexOf('EXT') > -1) && id.indexOf('dump') > -1) {
                newFuelPumps[fuelPumpIndex] = {...newFuelPumps[fuelPumpIndex], emptyLightStatus: 'no flash'};
            }
            
        }

        this.setState( () => {
            return {
                toggleSwitches: newToggleSwitches,
                fuelPumps: newFuelPumps,
                springValves: newSpringValves,
                rotaryValves: newRotaryValves,
                stateTestVal: stateTest + 1
            };
        });
    }

    handleRotarySwitch = (id) => {
        let stateTest = this.state.stateTestVal;
        
        //track state changes that will trigger pressure flucuations in the Manifold component
        let fluxCounter = this.state.systemPSI_fluxCounter;
        const crossfeed_manifold_2 = this.state.manifolds.find(manifold => manifold.id === 'crossfeed_line2');
        
        //toggle switch status
        const rotarySwitchIndex = this.state.rotarySwitches.findIndex(rotaryswitch => rotaryswitch.id === id);
        let newRotarySwitches = [...this.state.rotarySwitches];
        newRotarySwitches[rotarySwitchIndex] = {...newRotarySwitches[rotarySwitchIndex], switchedOn: !newRotarySwitches[rotarySwitchIndex].switchedOn};

        //target rotary valves connected to this rotary switch
        const connectedRotaryValve = this.state.rotarySwitches[rotarySwitchIndex].connectedValve;
        const rotaryValveIndex = this.state.rotaryValves.findIndex(valve => valve.id === connectedRotaryValve);
        let newRotaryValves = [...this.state.rotaryValves];

        //if targeted valve is not failed then toggle valve open/closed
        if (!this.state.rotaryValves[rotaryValveIndex].failed) {
            newRotaryValves[rotaryValveIndex] = {...newRotaryValves[rotaryValveIndex], open: !newRotaryValves[rotaryValveIndex].open};
            
            //increment pressure flucuation event counter
            if (newRotaryValves[rotaryValveIndex].open && crossfeed_manifold_2.fuelPresent) {
                fluxCounter += 1;
            }
        }

        this.setState( () => {
            return {
                rotarySwitches: newRotarySwitches,
                rotaryValves: newRotaryValves,
                systemPSI_fluxCounter: fluxCounter,
                stateTestVal: stateTest + 1
            };
        });
    }
    
    setTankQuantity = (e) => {
        let newQuantityIndicators = [...this.state.quantityIndicators];
        const quantityIndicatorNeedleID = e.currentTarget.id + "_needle";
        const quantityIndicatorIndex = newQuantityIndicators.findIndex(indicator => indicator.id === quantityIndicatorNeedleID);
        const currentTankQuantity = newQuantityIndicators[quantityIndicatorIndex].quantity;
        let promptText = "Fuel Quantity (" + e.currentTarget.id.replace('_indicator', '') + ")";
        let tankQuantity = Number(prompt(promptText, currentTankQuantity));
        let stateTest = this.state.stateTestVal;

        if (Number.isNaN(tankQuantity)) {
            alert("You've entered an invalid fuel quantity.")
            tankQuantity = currentTankQuantity;
        }

        newQuantityIndicators[quantityIndicatorIndex] = {...newQuantityIndicators[quantityIndicatorIndex], quantity: tankQuantity};
        this.setState( () => {
            return {
                quantityIndicators: newQuantityIndicators,
                stateTestVal: stateTest + 1
            }
        })

    }

    handleGuardVisibility = (e) => {
        let stateTest = this.state.stateTestVal;
        let newToggleSwitches = [...this.state.toggleSwitches];
        let newRotaryValves = [...this.state.rotaryValves];
        let newRightGuardVisibility = !this.state.rightGuardVisible;
        const dumpSwitchIndex = newToggleSwitches.findIndex(toggleSwitch => toggleSwitch.id === 'right_dump_valveSwitch');
        const connectedDumpValve = newToggleSwitches[dumpSwitchIndex].connectedDumpValve;
        const dumpValveIndex = newRotaryValves.findIndex(valve => valve.id === connectedDumpValve);
        if (newRightGuardVisibility) {
            newToggleSwitches[dumpSwitchIndex].switchedOn = false;
            newRotaryValves[dumpValveIndex].open = false;
        }
        this.setState( () => {
            return {
                rightGuardVisible: newRightGuardVisibility,
                toggleSwitches: newToggleSwitches,
                rotaryValves: newRotaryValves,
                stateTestVal: stateTest + 1
            };
        })
    }

    /* 
    -------------------------------------------------------------------------------
    Methods
    -------------------------------------------------------------------------------
    */

    calculateTotalFuel () {
        let allTankQuantities = this.state.quantityIndicators.slice(0,this.state.quantityIndicators.length-1);
        let totalFuel = allTankQuantities.reduce((a,b) => (
                {
                    quantity: a.quantity + b.quantity
                }
            )
        );
        return totalFuel.quantity;
    }

    calculateNeedleRotation (indicator) {
        let quantity = indicator.id === 'total_quan_needle' ? this.calculateTotalFuel() : indicator.quantity;
        let rotationIncrement = indicator.maxQuantity === 70000 ? .468 : indicator.maxQuantity === 7000 ? 4.68 : indicator.maxQuantity === 9000 ? 3.5 : 3.2;
        return quantity / 100 * rotationIncrement;
    }

    readTankQuantity(id, rotationDeg) {
        let newQuantityIndicators = this.state.quantityIndicators;
        let indicator = newQuantityIndicators.find(indicator => indicator.id === id);
        let indicatorIndex = newQuantityIndicators.findIndex(indicator => indicator.id === id);
        let rotationIncrement = indicator.maxQuantity === 70000 ? .468 : indicator.maxQuantity === 7000 ? 4.68 : indicator.maxQuantity === 9000 ? 3.5 : 3.2;
        let newQuantity = (rotationDeg / rotationIncrement * 100).toFixed(2);
        newQuantityIndicators[indicatorIndex].quantity = newQuantity;
        this.setState( () => {
            return {
                quantityIndicators: newQuantityIndicators
            };
        });
    }

    fuelDumping() {
        let dumpingStatuses = {
            tank_3: false,
            tank_4: false,
            right_AUX: false,
            right_EXT: false
        }
        let newQuantityIndicators = this.state.quantityIndicators;
        let stateTest = this.state.stateTestVal;

        if (this.state.manifolds.find(manifold => manifold.id === 'right_dump_line').fuelPresent) {
            dumpingStatuses.tank_3 = this.state.fuelPumps.find(pump => pump.id === 'pump_3_dump').fuelPresent && this.state.rotaryValves.find(valve => valve.id === 'tank_3_dump_valve').open;
            dumpingStatuses.tank_4 = this.state.fuelPumps.find(pump => pump.id === 'pump_4_dump').fuelPresent && this.state.rotaryValves.find(valve => valve.id === 'tank_4_dump_valve').open;
            dumpingStatuses.right_AUX = this.state.fuelPumps.find(pump => pump.id === 'pump_right_AUX').fuelPresent && this.state.rotaryValves.find(valve => valve.id === 'right_AUX_dump_valve').open;
            dumpingStatuses.right_EXT = this.state.fuelPumps.find(pump => pump.id === 'pump_right_EXT_AFT').fuelPresent && this.state.rotaryValves.find(valve => valve.id === 'right_EXT_dump_valve').open;
        }

        for (const property in dumpingStatuses) {
            let indicatorIndex = newQuantityIndicators.findIndex(indicator => indicator.id.indexOf(property) > -1);
            if (dumpingStatuses[property]) {
                newQuantityIndicators[indicatorIndex] = {...newQuantityIndicators[indicatorIndex], quantity: newQuantityIndicators[indicatorIndex].minQuantity, dumping: "yes"};
            } else if (newQuantityIndicators[indicatorIndex].dumping === 'yes') {
                newQuantityIndicators[indicatorIndex].dumping = 'stop';
            } else if (newQuantityIndicators[indicatorIndex].dumping === 'stop') {
                newQuantityIndicators[indicatorIndex].dumping = 'has stopped';
            }
        }

        this.setState((prevState) => {
            if (prevState.quantityIndicators !== this.state.quantityIndicators) {
                return {
                    quantityIndicators: newQuantityIndicators,
                    stateTestVal: stateTest + 1
                };
            }
        })
    }

    componentDidUpdate (prevProps, prevState) {
        let newFuelPumps = this.state.fuelPumps;
        let newManifolds = this.state.manifolds;
        let newRotaryValves = this.state.rotaryValves;
        let newSpringValves = this.state.springValves;
        let newPressureSwitches = this.state.pressureSwitches;
        let newSystemPSI = this.state.systemPSI;
        let stateTest = this.state.stateTestVal;

        if ((this.state.stateTestVal === 0) || (prevState.stateTestVal !== this.state.stateTestVal)) {
            /* ----------------------------------
            REFUEL LINE SPRING VALVES FUEL PRESENCE
            ---------------------------------- */
            let refuelManifoldIndex = newManifolds.findIndex(manifold => manifold.id === 'refuel_line');
            let rightRefuelSpringValveIndex = newSpringValves.findIndex(spring => spring.id === 'right_refuel_manifold_springValve');
            newSpringValves[rightRefuelSpringValveIndex].fuelPresent = newManifolds[refuelManifoldIndex].fuelPresent;

            //Target relevant manifolds, pumps, and valves
            let crossfeed_left_manifold = newManifolds.find(line => line.id === 'crossfeed_line1');
            let crossfeed_right_manifold = newManifolds.find(line => line.id === 'crossfeed_line2');
            let tank_3_Pump = newFuelPumps.find(pump => pump.id === 'pump_3_boost');
            let tank_4_Pump = newFuelPumps.find(pump => pump.id === 'pump_4_boost');
            let tank_3_CrossfeedValve = newRotaryValves.find(valve => valve.id === 'crossfeed_3_valve');
            let tank_4_CrossfeedValve = newRotaryValves.find(valve => valve.id === 'crossfeed_4_valve');
            let right_AUX_Pump = newFuelPumps.find(pump => pump.id === 'pump_right_AUX');
            let right_EXT_Pumps = newFuelPumps.filter((pump) => {
                return pump.id.indexOf('right_EXT') > -1;
            });
            let right_AUX_CrossfeedValve = newRotaryValves.find(valve => valve.id === 'crossfeed_right_AUX_valve');
            let right_EXT_CrossfeedValve = newRotaryValves.find(valve => valve.id === 'crossfeed_right_EXT_valve');
            let right_BypassValve = newRotaryValves.find(valve => valve.id === 'right_bypass_valve');
            let crossfeed_SeparationValve = newRotaryValves.find(valve => valve.id === 'crossfeed_separation_valve');
            let dump_Pumps = newFuelPumps.filter((pump) => {
                return pump.id.indexOf('dump') > -1;
            });

            //Check status of external pumps and dump pumps
            let right_EXT_Pump_ON = right_EXT_Pumps.some((pump) => {
                return pump.fuelPresent;
            });
            let any_dump_Pumps_ON = dump_Pumps.some((pump) => {
                return pump.fuelPresent;
            });

            //Check if crossfeed manifolds are pump fed
            let crossfeed_line2_pumpfed = (tank_3_Pump.fuelPresent && tank_3_CrossfeedValve.open) || 
            (tank_4_Pump.fuelPresent && tank_4_CrossfeedValve.open) || 
            (right_AUX_Pump.fuelPresent && right_AUX_CrossfeedValve.open) || 
            (right_AUX_Pump.fuelPresent && right_BypassValve.open && right_EXT_CrossfeedValve.open) || 
            (right_EXT_Pump_ON && right_EXT_CrossfeedValve.open) || 
            (right_EXT_Pump_ON && right_AUX_CrossfeedValve.open && right_BypassValve.open) ||
            (any_dump_Pumps_ON && (right_EXT_CrossfeedValve.open || 
            (right_BypassValve.open && right_AUX_CrossfeedValve.open)));

            /* ----------------------------------
            MANIFOLD FUEL PRESENCE and PRESSURE
            ---------------------------------- */
                newManifolds.forEach((manifold) => {
                    let initfuelstate = manifold.fuelPresent;
                    let fuelpresent = false;
                    let fueltrapped = false;
                    
                    //Check manifold fuel sources
                    manifold.fuelSources.forEach((fuelsource)  => {
                        let pumpindex = newFuelPumps.findIndex(pump => pump.id === fuelsource);
                        let valveindex = newRotaryValves.findIndex(valve => valve.id === fuelsource);
                        let springindex = newSpringValves.findIndex(spring => spring.id === fuelsource);

                        if (pumpindex > -1 && newFuelPumps[pumpindex].fuelPresent) {
                            fuelpresent = true;
                        }
        
                        if (valveindex > -1 && (newRotaryValves[valveindex].fuelPresent && newRotaryValves[valveindex].open)) {
                            fuelpresent= true;
                        }

                        if (springindex > -1 && newSpringValves[springindex].fuelPresent) {
                            fuelpresent = true;
                        }
                    });

                    //Check if manifold has trapped fuel
                    if (manifold.fuelTrap) {
                        let trapValves = newRotaryValves.filter((valve) => {
                            return manifold.fuelTrap.toString().match(valve.id);
                        });

                        fueltrapped = trapValves.every((valve) => {
                            return !valve.open && (manifold.fuelPresent || 
                                (crossfeed_SeparationValve.open && 
                                    (crossfeed_left_manifold.fuelPresent || crossfeed_right_manifold.fuelPresent)));
                        });

                        manifold.fuelTrapped = fueltrapped;
                    }

                    if (manifold.id === 'crossfeed_line2') {
                        if (fueltrapped) {
                            fuelpresent = true;
                        } else if (!fueltrapped && !crossfeed_line2_pumpfed){
                            fuelpresent = false;
                        }
                    }

                    //Set manifold fuel presence
                    manifold.fuelPresent = fuelpresent;

                    //Check if manifold contains pressure switch and set fuel presence of switch
                    if (manifold.connectedPressureSwitch) {
                        let pressureSwitchIndex = newPressureSwitches.findIndex(pressSwitch => pressSwitch.id === manifold.connectedPressureSwitch);
                        newPressureSwitches[pressureSwitchIndex].fuelPresent = fuelpresent;
                    }

                    //Determine PSI to be displayed on Pressure Indicator
                    if (manifold.id === 'crossfeed_line2' && manifold.fuelPresent) {
                        if ((right_AUX_Pump.fuelPresent && right_AUX_CrossfeedValve.open) || (right_AUX_Pump.fuelPresent && right_BypassValve.open && right_EXT_CrossfeedValve.open) || (right_EXT_Pump_ON && right_EXT_CrossfeedValve.open) || (right_EXT_Pump_ON && right_AUX_CrossfeedValve.open && right_BypassValve.open)) {
                            newSystemPSI= 35;
                        } else {
                            newSystemPSI = 19;
                        }
                    } else if (manifold.id === 'crossfeed_line2' && !manifold.fuelPresent)  {
                        newSystemPSI = 0;
                    }

                    //increment state test
                    if (fuelpresent !== initfuelstate) {
                        stateTest += 1;
                    }
                });

            /* ----------------------
            ROTARY VALVE FUEL PRESENCE
            ------------------------- */
                newRotaryValves.forEach((valve) => {
                    let initfuelstate = valve.fuelPresent;
                    let fuelpresent = false;
                    valve.fuelSources.forEach((fuelsource)  => {
                        let manifoldindex = newManifolds.findIndex(manifold => manifold.id === fuelsource);

                        if (
                            (valve.id === "crossfeed_separation_valve" && newManifolds[manifoldindex].fuelPresent) || 
                            (fuelsource.indexOf('crossfeed_line2') > -1 && crossfeed_line2_pumpfed) ||
                            (fuelsource.indexOf('crossfeed') < 0 && newManifolds[manifoldindex].fuelPresent)
                        ) {
                            fuelpresent = true;
                        }

                    });
                    valve.fuelPresent = fuelpresent;
                    if (fuelpresent !== initfuelstate) {
                        stateTest += 1;
                    }
                });
            

            this.setState( () => {
                return {
                    manifolds: newManifolds,
                    rotaryValves: newRotaryValves,
                    pressureSwitches: newPressureSwitches,
                    systemPSI: newSystemPSI,
                    stateTestVal: stateTest
                };
            }, () => {
                this.fuelDumping();
            });
        } else {
            console.log('state has stablizied');
        }
    }
    
    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="270 0 500 600">
                <defs>
                    <radialGradient id="radial-gradient" cx="680.9" cy="397.24" r="24.03" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#5e5e5e"/>
                      <stop offset="0.44" stopColor="#555"/>
                      <stop offset="1" stopColor="#515151"/>
                    </radialGradient>
                    <radialGradient id="radial-gradient-2" cx="680.9" cy="397.24" fx="672.4772905362203" fy="383.2143661696446" r="22.43" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#5e5e5e"/>
                      <stop offset="0.07" stopColor="#545454"/>
                      <stop offset="0.3" stopColor="#373737"/>
                      <stop offset="0.54" stopColor="#232323"/>
                      <stop offset="0.77" stopColor="#161616"/>
                      <stop offset="1" stopColor="#121212"/>
                    </radialGradient>
                    <radialGradient id="radial-gradient-3" cx="604.01" cy="397.24" r="24.03" xlinkHref="#radial-gradient"/>
                    <radialGradient id="radial-gradient-4" cx="604.01" cy="397.24" fx="595.5875200284053" fy="383.2143661696435" r="22.43" xlinkHref="#radial-gradient-2"/>
                    <radialGradient id="radial-gradient-5" cx="532.24" cy="397.24" r="24.03" xlinkHref="#radial-gradient"/>
                    <radialGradient id="radial-gradient-6" cx="532.24" cy="397.24" fx="523.8143114102448" fy="383.2143661696435" r="22.43" xlinkHref="#radial-gradient-2"/>
                    <radialGradient id="radial-gradient-7" cx="455.98" cy="396.56" r="24.03" xlinkHref="#radial-gradient"/>
                    <radialGradient id="radial-gradient-8" cx="455.98" cy="396.56" fx="447.55724257117515" fy="382.53637233990486" r="22.43" xlinkHref="#radial-gradient-2"/>
                    <radialGradient id="radial-gradient-9" cx="368.92" cy="446.77" r="24.03" xlinkHref="#radial-gradient"/>
                    <radialGradient id="radial-gradient-10" cx="368.92" cy="446.77" fx="360.4961809170818" fy="432.75210115499675" r="22.43" xlinkHref="#radial-gradient-2"/>
                    <radialGradient id="radial-gradient-11" cx="368.57" cy="374.99" r="24.03" xlinkHref="#radial-gradient"/>
                    <radialGradient id="radial-gradient-12" cx="368.57" cy="374.99" fx="360.14184131747027" fy="360.964701863004" r="22.43" xlinkHref="#radial-gradient-2"/>
                    <radialGradient id="radial-gradient-13" cx="282.17" cy="397.24" r="24.03" xlinkHref="#radial-gradient"/>
                    <radialGradient id="radial-gradient-14" cx="282.17" cy="397.24" fx="273.74186267976745" fy="383.2143661696412" r="22.43" xlinkHref="#radial-gradient-2"/>
                    <radialGradient id="radial-gradient-15" cx="205.75" cy="397.42" r="24.03" xlinkHref="#radial-gradient"/>
                    <radialGradient id="radial-gradient-16" cx="205.75" cy="397.42" fx="197.3198045743034" fy="383.3939748120958" r="22.43" xlinkHref="#radial-gradient-2"/>
                    <radialGradient id="radial-gradient-17" cx="133.82" cy="397.24" r="24.03" xlinkHref="#radial-gradient"/>
                    <radialGradient id="radial-gradient-18" cx="133.82" cy="397.24" fx="125.39067402010417" fy="383.2143661696429" r="22.43" xlinkHref="#radial-gradient-2"/>
                    <radialGradient id="radial-gradient-19" cx="56.93" cy="397.24" r="24.03" xlinkHref="#radial-gradient"/>
                    <radialGradient id="radial-gradient-20" cx="56.93" cy="397.24" fx="48.500911141691205" fy="383.2143661696452" r="22.43" xlinkHref="#radial-gradient-2"/>
                    <radialGradient id="radial-gradient-21" cx="325.54" cy="492.94" r="9.68" gradientUnits="userSpaceOnUse">
                      <stop offset="0.13" stopColor="#696969"/>
                      <stop offset="0.28" stopColor="#525252"/>
                      <stop offset="0.6" stopColor="#262626"/>
                      <stop offset="0.85" stopColor="#0a0a0a"/>
                      <stop offset="1"/>
                    </radialGradient>
                    <radialGradient id="radial-gradient-22" cx="642.34" cy="408.49" r="9.68" xlinkHref="#radial-gradient-21"/>
                    <radialGradient id="radial-gradient-23" cx="568.06" cy="408.29" r="9.68" xlinkHref="#radial-gradient-21"/>
                    <radialGradient id="radial-gradient-24" cx="493.96" cy="396.37" r="9.68" xlinkHref="#radial-gradient-21"/>
                    <radialGradient id="radial-gradient-25" cx="412.29" cy="396.37" r="9.68" xlinkHref="#radial-gradient-21"/>
                    <radialGradient id="radial-gradient-26" cx="325.54" cy="396.37" r="9.68" xlinkHref="#radial-gradient-21"/>
                    <radialGradient id="radial-gradient-27" cx="243.88" cy="396.37" r="9.68" xlinkHref="#radial-gradient-21"/>
                    <radialGradient id="radial-gradient-28" cx="170.24" cy="408.63" r="9.68" xlinkHref="#radial-gradient-21"/>
                    <radialGradient id="radial-gradient-29" cx="95.38" cy="408.63" r="9.68" xlinkHref="#radial-gradient-21"/>
                    <radialGradient id="radial-gradient-30" cx="700.29" cy="377.47" r="3.76" gradientUnits="userSpaceOnUse">
                      <stop offset="0.15" stopColor="#3b3b3b"/>
                      <stop offset="1"/>
                    </radialGradient>
                    <radialGradient id="radial-gradient-31" cx="622.96" cy="377.44" r="3.76" xlinkHref="#radial-gradient-30"/>
                    <radialGradient id="radial-gradient-32" cx="551.16" cy="377.41" r="3.76" xlinkHref="#radial-gradient-30"/>
                    <radialGradient id="radial-gradient-33" cx="474.65" cy="377.58" r="3.76" xlinkHref="#radial-gradient-30"/>
                    <radialGradient id="radial-gradient-34" cx="301.06" cy="377.5" r="3.76" xlinkHref="#radial-gradient-30"/>
                    <radialGradient id="radial-gradient-35" cx="224.72" cy="377.5" r="3.76" gradientUnits="userSpaceOnUse">
                      <stop offset="0.28" stopColor="#3b3b3b"/>
                      <stop offset="1"/>
                    </radialGradient>
                    <radialGradient id="radial-gradient-36" cx="152.87" cy="377.47" r="3.76" xlinkHref="#radial-gradient-30"/>
                    <radialGradient id="radial-gradient-37" cx="75.89" cy="377.47" r="3.76" xlinkHref="#radial-gradient-30"/>
                    <radialGradient id="radial-gradient-38" cx="626.19" cy="328.53" r="8.43" gradientUnits="userSpaceOnUse">
                      <stop offset="0.09" stopColor="#bfbfbf"/>
                      <stop offset="0.1" stopColor="#bdbdbd"/>
                      <stop offset="0.66" stopColor="#757575"/>
                      <stop offset="0.92" stopColor="#595959"/>
                    </radialGradient>
                    <radialGradient id="radial-gradient-39" cx="434.5" cy="-838.99" r="8.18" gradientTransform="translate(-169.45 837.96) rotate(30)" gradientUnits="userSpaceOnUse">
                      <stop offset="0.09" stopColor="#bfbfbf"/>
                      <stop offset="0.48" stopColor="#a3a3a3"/>
                      <stop offset="0.92" stopColor="#878787"/>
                    </radialGradient>
                    <radialGradient id="radial-gradient-40" cx="626.19" cy="328.55" r="7.38" gradientUnits="userSpaceOnUse">
                      <stop offset="0.09" stopColor="#d1d1d1"/>
                      <stop offset="0.64" stopColor="#919191"/>
                      <stop offset="0.92" stopColor="#757575"/>
                    </radialGradient>
                    <radialGradient id="radial-gradient-41" cx="626.19" cy="328.58" r="6.17" gradientUnits="userSpaceOnUse">
                      <stop offset="0.09" stopColor="#d1d1d1"/>
                      <stop offset="0.44" stopColor="#bababa"/>
                      <stop offset="0.92" stopColor="#9e9e9e"/>
                    </radialGradient>
                    <radialGradient id="radial-gradient-42" cx="626.3" cy="328.68" r="4.79" gradientUnits="userSpaceOnUse">
                      <stop offset="0.09" stopColor="#e88e75"/>
                      <stop offset="0.11" stopColor="#e78e75"/>
                      <stop offset="0.92" stopColor="#cb8070"/>
                    </radialGradient>
                    <radialGradient id="radial-gradient-43" cx="630.77" cy="336.1" r="4.76" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#fff"/>
                      <stop offset="0.09" stopColor="#f6f6f6"/>
                      <stop offset="0.25" stopColor="#dcdcdc"/>
                      <stop offset="0.45" stopColor="#b2b2b2"/>
                      <stop offset="0.68" stopColor="#797979"/>
                      <stop offset="0.8" stopColor="#595959"/>
                    </radialGradient>
                    <radialGradient id="radial-gradient-44" cx="-3269.2" cy="349.35" r="4.76" gradientTransform="translate(-2638.57 699.03) rotate(180)" xlinkHref="#radial-gradient-43"/>
                    <radialGradient id="radial-gradient-45" cx="583.84" cy="328.53" r="8.43" xlinkHref="#radial-gradient-38"/>
                    <radialGradient id="radial-gradient-46" cx="397.83" cy="-817.82" r="8.18" xlinkHref="#radial-gradient-39"/>
                    <radialGradient id="radial-gradient-47" cx="583.84" cy="328.55" r="7.38" xlinkHref="#radial-gradient-40"/>
                    <radialGradient id="radial-gradient-48" cx="583.84" cy="328.58" r="6.17" xlinkHref="#radial-gradient-41"/>
                    <radialGradient id="radial-gradient-49" cx="583.95" cy="328.68" r="4.79" xlinkHref="#radial-gradient-42"/>
                    <radialGradient id="radial-gradient-50" cx="588.42" cy="336.1" r="4.76" xlinkHref="#radial-gradient-43"/>
                    <radialGradient id="radial-gradient-51" cx="-3226.85" cy="349.35" r="4.76" gradientTransform="translate(-2638.57 699.03) rotate(180)" xlinkHref="#radial-gradient-43"/>
                    <radialGradient id="radial-gradient-52" cx="511.65" cy="328.53" r="8.43" xlinkHref="#radial-gradient-38"/>
                    <radialGradient id="radial-gradient-53" cx="335.31" cy="-781.73" r="8.18" xlinkHref="#radial-gradient-39"/>
                    <radialGradient id="radial-gradient-54" cx="511.65" cy="328.55" r="7.38" xlinkHref="#radial-gradient-40"/>
                    <radialGradient id="radial-gradient-55" cx="511.65" cy="328.58" r="6.17" xlinkHref="#radial-gradient-41"/>
                    <radialGradient id="radial-gradient-56" cx="511.76" cy="328.68" r="4.79" xlinkHref="#radial-gradient-42"/>
                    <radialGradient id="radial-gradient-57" cx="516.23" cy="336.1" r="4.76" xlinkHref="#radial-gradient-43"/>
                    <radialGradient id="radial-gradient-58" cx="-3154.67" cy="349.35" r="4.76" gradientTransform="translate(-2638.57 699.03) rotate(180)" xlinkHref="#radial-gradient-43"/>
                    <radialGradient id="radial-gradient-59" cx="451.47" cy="328.53" r="8.43" xlinkHref="#radial-gradient-38"/>
                    <radialGradient id="radial-gradient-60" cx="283.19" cy="-751.63" r="8.18" xlinkHref="#radial-gradient-39"/>
                    <radialGradient id="radial-gradient-61" cx="451.47" cy="328.55" r="7.38" xlinkHref="#radial-gradient-40"/>
                    <radialGradient id="radial-gradient-62" cx="451.47" cy="328.58" r="6.17" xlinkHref="#radial-gradient-41"/>
                    <radialGradient id="radial-gradient-63" cx="451.58" cy="328.68" r="4.79" xlinkHref="#radial-gradient-42"/>
                    <radialGradient id="radial-gradient-64" cx="456.05" cy="336.1" r="4.76" xlinkHref="#radial-gradient-43"/>
                    <radialGradient id="radial-gradient-65" cx="-3094.48" cy="349.35" r="4.76" gradientTransform="translate(-2638.57 699.03) rotate(180)" xlinkHref="#radial-gradient-43"/>
                    <radialGradient id="radial-gradient-66" cx="277.5" cy="328.53" r="8.43" xlinkHref="#radial-gradient-38"/>
                    <radialGradient id="radial-gradient-67" cx="132.53" cy="-664.65" r="8.18" xlinkHref="#radial-gradient-39"/>
                    <radialGradient id="radial-gradient-68" cx="277.5" cy="328.55" r="7.38" xlinkHref="#radial-gradient-40"/>
                    <radialGradient id="radial-gradient-69" cx="277.5" cy="328.58" r="6.17" xlinkHref="#radial-gradient-41"/>
                    <radialGradient id="radial-gradient-70" cx="277.61" cy="328.68" r="4.79" xlinkHref="#radial-gradient-42"/>
                    <radialGradient id="radial-gradient-71" cx="282.07" cy="336.1" r="4.76" xlinkHref="#radial-gradient-43"/>
                    <radialGradient id="radial-gradient-72" cx="-2920.51" cy="349.35" r="4.76" gradientTransform="translate(-2638.57 699.03) rotate(180)" xlinkHref="#radial-gradient-43"/>
                    <radialGradient id="radial-gradient-73" cx="216.86" cy="328.53" r="8.43" xlinkHref="#radial-gradient-38"/>
                    <radialGradient id="radial-gradient-74" cx="80.02" cy="-634.33" r="8.18" xlinkHref="#radial-gradient-39"/>
                    <radialGradient id="radial-gradient-75" cx="216.86" cy="328.55" r="7.38" xlinkHref="#radial-gradient-40"/>
                    <radialGradient id="radial-gradient-76" cx="216.86" cy="328.58" r="6.17" xlinkHref="#radial-gradient-41"/>
                    <radialGradient id="radial-gradient-77" cx="216.97" cy="328.68" r="4.79" xlinkHref="#radial-gradient-42"/>
                    <radialGradient id="radial-gradient-78" cx="221.44" cy="336.1" r="4.76" xlinkHref="#radial-gradient-43"/>
                    <radialGradient id="radial-gradient-79" cx="-2859.88" cy="349.35" r="4.76" gradientTransform="translate(-2638.57 699.03) rotate(180)" xlinkHref="#radial-gradient-43"/>
                    <radialGradient id="radial-gradient-80" cx="144.96" cy="328.53" r="8.43" xlinkHref="#radial-gradient-38"/>
                    <radialGradient id="radial-gradient-81" cx="17.75" cy="-598.38" r="8.18" xlinkHref="#radial-gradient-39"/>
                    <radialGradient id="radial-gradient-82" cx="144.96" cy="328.55" r="7.38" xlinkHref="#radial-gradient-40"/>
                    <radialGradient id="radial-gradient-83" cx="144.96" cy="328.58" r="6.17" xlinkHref="#radial-gradient-41"/>
                    <radialGradient id="radial-gradient-84" cx="145.07" cy="328.68" r="4.79" xlinkHref="#radial-gradient-42"/>
                    <radialGradient id="radial-gradient-85" cx="149.54" cy="336.1" r="4.76" xlinkHref="#radial-gradient-43"/>
                    <radialGradient id="radial-gradient-86" cx="-2787.98" cy="349.35" r="4.76" gradientTransform="translate(-2638.57 699.03) rotate(180)" xlinkHref="#radial-gradient-43"/>
                    <radialGradient id="radial-gradient-87" cx="102.61" cy="328.53" r="8.43" xlinkHref="#radial-gradient-38"/>
                    <radialGradient id="radial-gradient-88" cx="-18.93" cy="-577.21" r="8.18" xlinkHref="#radial-gradient-39"/>
                    <radialGradient id="radial-gradient-89" cx="102.61" cy="328.55" r="7.38" xlinkHref="#radial-gradient-40"/>
                    <radialGradient id="radial-gradient-90" cx="102.61" cy="328.58" r="6.17" xlinkHref="#radial-gradient-41"/>
                    <radialGradient id="radial-gradient-91" cx="102.72" cy="328.68" r="4.79" xlinkHref="#radial-gradient-42"/>
                    <radialGradient id="radial-gradient-92" cx="107.19" cy="336.1" r="4.76" xlinkHref="#radial-gradient-43"/>
                    <radialGradient id="radial-gradient-93" cx="-2745.63" cy="349.35" r="4.76" gradientTransform="translate(-2638.57 699.03) rotate(180)" xlinkHref="#radial-gradient-43"/>
                    <radialGradient id="radial-gradient-94" cx="676.37" cy="448.53" r="8.43" xlinkHref="#radial-gradient-38"/>
                    <radialGradient id="radial-gradient-95" cx="537.96" cy="-760.17" r="8.18" xlinkHref="#radial-gradient-39"/>
                    <radialGradient id="radial-gradient-96" cx="676.37" cy="448.55" r="7.38" xlinkHref="#radial-gradient-40"/>
                    <radialGradient id="radial-gradient-97" cx="676.37" cy="448.58" r="6.17" xlinkHref="#radial-gradient-41"/>
                    <radialGradient id="radial-gradient-98" cx="676.48" cy="448.68" r="4.79" xlinkHref="#radial-gradient-42"/>
                    <radialGradient id="radial-gradient-99" cx="680.95" cy="456.1" r="4.76" xlinkHref="#radial-gradient-43"/>
                    <radialGradient id="radial-gradient-100" cx="-3319.39" cy="229.35" r="4.76" gradientTransform="translate(-2638.57 699.03) rotate(180)" xlinkHref="#radial-gradient-43"/>
                    <radialGradient id="radial-gradient-101" cx="599.5" cy="448.53" r="8.43" xlinkHref="#radial-gradient-38"/>
                    <radialGradient id="radial-gradient-102" cx="471.39" cy="-721.73" r="8.18" xlinkHref="#radial-gradient-39"/>
                    <radialGradient id="radial-gradient-103" cx="599.5" cy="448.55" r="7.38" xlinkHref="#radial-gradient-40"/>
                    <radialGradient id="radial-gradient-104" cx="599.5" cy="448.58" r="6.17" xlinkHref="#radial-gradient-41"/>
                    <radialGradient id="radial-gradient-105" cx="599.61" cy="448.68" r="4.79" xlinkHref="#radial-gradient-42"/>
                    <radialGradient id="radial-gradient-106" cx="604.08" cy="456.1" r="4.76" xlinkHref="#radial-gradient-43"/>
                    <radialGradient id="radial-gradient-107" cx="-3242.51" cy="229.35" r="4.76" gradientTransform="translate(-2638.57 699.03) rotate(180)" xlinkHref="#radial-gradient-43"/>
                    <radialGradient id="radial-gradient-108" cx="527.76" cy="448.53" r="8.43" xlinkHref="#radial-gradient-38"/>
                    <radialGradient id="radial-gradient-109" cx="409.26" cy="-685.86" r="8.18" xlinkHref="#radial-gradient-39"/>
                    <radialGradient id="radial-gradient-110" cx="527.76" cy="448.55" r="7.38" xlinkHref="#radial-gradient-40"/>
                    <radialGradient id="radial-gradient-111" cx="527.76" cy="448.58" r="6.17" xlinkHref="#radial-gradient-41"/>
                    <radialGradient id="radial-gradient-112" cx="527.87" cy="448.68" r="4.79" xlinkHref="#radial-gradient-42"/>
                    <radialGradient id="radial-gradient-113" cx="532.34" cy="456.1" r="4.76" xlinkHref="#radial-gradient-43"/>
                    <radialGradient id="radial-gradient-114" cx="-3170.77" cy="229.35" r="4.76" gradientTransform="translate(-2638.57 699.03) rotate(180)" xlinkHref="#radial-gradient-43"/>
                    <radialGradient id="radial-gradient-115" cx="472.97" cy="431.1" r="8.43" xlinkHref="#radial-gradient-38"/>
                    <radialGradient id="radial-gradient-116" cx="353.09" cy="-673.56" r="8.18" xlinkHref="#radial-gradient-39"/>
                    <radialGradient id="radial-gradient-117" cx="472.97" cy="431.12" r="7.38" xlinkHref="#radial-gradient-40"/>
                    <radialGradient id="radial-gradient-118" cx="472.97" cy="431.14" r="6.17" xlinkHref="#radial-gradient-41"/>
                    <radialGradient id="radial-gradient-119" cx="473.08" cy="431.25" r="4.79" xlinkHref="#radial-gradient-42"/>
                    <radialGradient id="radial-gradient-120" cx="477.55" cy="438.67" r="4.76" xlinkHref="#radial-gradient-43"/>
                    <radialGradient id="radial-gradient-121" cx="-3115.98" cy="246.79" r="4.76" gradientTransform="translate(-2638.57 699.03) rotate(180)" xlinkHref="#radial-gradient-43"/>
                    <radialGradient id="radial-gradient-122" cx="429.87" cy="431.1" r="8.43" xlinkHref="#radial-gradient-38"/>
                    <radialGradient id="radial-gradient-123" cx="315.77" cy="-652.01" r="8.18" xlinkHref="#radial-gradient-39"/>
                    <radialGradient id="radial-gradient-124" cx="429.87" cy="431.12" r="7.38" xlinkHref="#radial-gradient-40"/>
                    <radialGradient id="radial-gradient-125" cx="429.87" cy="431.14" r="6.17" xlinkHref="#radial-gradient-41"/>
                    <radialGradient id="radial-gradient-126" cx="429.98" cy="431.25" r="4.79" xlinkHref="#radial-gradient-42"/>
                    <radialGradient id="radial-gradient-127" cx="434.45" cy="438.67" r="4.76" xlinkHref="#radial-gradient-43"/>
                    <radialGradient id="radial-gradient-128" cx="-3072.89" cy="246.79" r="4.76" gradientTransform="translate(-2638.57 699.03) rotate(180)" xlinkHref="#radial-gradient-43"/>
                    <radialGradient id="radial-gradient-129" cx="300.08" cy="431.1" r="8.43" xlinkHref="#radial-gradient-38"/>
                    <radialGradient id="radial-gradient-130" cx="203.36" cy="-587.11" r="8.18" xlinkHref="#radial-gradient-39"/>
                    <radialGradient id="radial-gradient-131" cx="300.08" cy="431.12" r="7.38" xlinkHref="#radial-gradient-40"/>
                    <radialGradient id="radial-gradient-132" cx="300.08" cy="431.14" r="6.17" xlinkHref="#radial-gradient-41"/>
                    <radialGradient id="radial-gradient-133" cx="300.19" cy="431.25" r="4.79" xlinkHref="#radial-gradient-42"/>
                    <radialGradient id="radial-gradient-134" cx="304.65" cy="438.67" r="4.76" xlinkHref="#radial-gradient-43"/>
                    <radialGradient id="radial-gradient-135" cx="-2943.09" cy="246.79" r="4.76" gradientTransform="translate(-2638.57 699.03) rotate(180)" xlinkHref="#radial-gradient-43"/>
                    <radialGradient id="radial-gradient-136" cx="256.2" cy="431.1" r="8.43" xlinkHref="#radial-gradient-38"/>
                    <radialGradient id="radial-gradient-137" cx="165.36" cy="-565.17" r="8.18" xlinkHref="#radial-gradient-39"/>
                    <radialGradient id="radial-gradient-138" cx="256.2" cy="431.12" r="7.38" xlinkHref="#radial-gradient-40"/>
                    <radialGradient id="radial-gradient-139" cx="256.2" cy="431.14" r="6.17" xlinkHref="#radial-gradient-41"/>
                    <radialGradient id="radial-gradient-140" cx="256.3" cy="431.25" r="4.79" xlinkHref="#radial-gradient-42"/>
                    <radialGradient id="radial-gradient-141" cx="260.77" cy="438.67" r="4.76" xlinkHref="#radial-gradient-43"/>
                    <radialGradient id="radial-gradient-142" cx="-2899.21" cy="246.79" r="4.76" gradientTransform="translate(-2638.57 699.03) rotate(180)" xlinkHref="#radial-gradient-43"/>
                    <radialGradient id="radial-gradient-143" cx="201.09" cy="448.49" r="8.43" xlinkHref="#radial-gradient-38"/>
                    <radialGradient id="radial-gradient-144" cx="126.33" cy="-522.56" r="8.18" xlinkHref="#radial-gradient-39"/>
                    <radialGradient id="radial-gradient-145" cx="201.09" cy="448.51" r="7.38" xlinkHref="#radial-gradient-40"/>
                    <radialGradient id="radial-gradient-146" cx="201.09" cy="448.53" r="6.17" xlinkHref="#radial-gradient-41"/>
                    <radialGradient id="radial-gradient-147" cx="201.2" cy="448.64" r="4.79" xlinkHref="#radial-gradient-42"/>
                    <radialGradient id="radial-gradient-148" cx="205.67" cy="456.06" r="4.76" xlinkHref="#radial-gradient-43"/>
                    <radialGradient id="radial-gradient-149" cx="-2844.1" cy="229.39" r="4.76" gradientTransform="translate(-2638.57 699.03) rotate(180)" xlinkHref="#radial-gradient-43"/>
                    <radialGradient id="radial-gradient-150" cx="129.74" cy="448.49" r="8.43" xlinkHref="#radial-gradient-38"/>
                    <radialGradient id="radial-gradient-151" cx="64.54" cy="-486.89" r="8.18" xlinkHref="#radial-gradient-39"/>
                    <radialGradient id="radial-gradient-152" cx="129.74" cy="448.51" r="7.38" xlinkHref="#radial-gradient-40"/>
                    <radialGradient id="radial-gradient-153" cx="129.74" cy="448.53" r="6.17" xlinkHref="#radial-gradient-41"/>
                    <radialGradient id="radial-gradient-154" cx="129.85" cy="448.64" r="4.79" xlinkHref="#radial-gradient-42"/>
                    <radialGradient id="radial-gradient-155" cx="134.32" cy="456.06" r="4.76" xlinkHref="#radial-gradient-43"/>
                    <radialGradient id="radial-gradient-156" cx="-2772.76" cy="229.39" r="4.76" gradientTransform="translate(-2638.57 699.03) rotate(180)" xlinkHref="#radial-gradient-43"/>
                    <radialGradient id="radial-gradient-157" cx="52.43" cy="448.49" r="8.43" xlinkHref="#radial-gradient-38"/>
                    <radialGradient id="radial-gradient-158" cx="-2.41" cy="-448.23" r="8.18" xlinkHref="#radial-gradient-39"/>
                    <radialGradient id="radial-gradient-159" cx="52.43" cy="448.51" r="7.38" xlinkHref="#radial-gradient-40"/>
                    <radialGradient id="radial-gradient-160" cx="52.43" cy="448.53" r="6.17" xlinkHref="#radial-gradient-41"/>
                    <radialGradient id="radial-gradient-161" cx="52.54" cy="448.64" r="4.79" xlinkHref="#radial-gradient-42"/>
                    <radialGradient id="radial-gradient-162" cx="57.01" cy="456.06" r="4.76" xlinkHref="#radial-gradient-43"/>
                    <radialGradient id="radial-gradient-163" cx="-2695.44" cy="229.39" r="4.76" gradientTransform="translate(-2638.57 699.03) rotate(180)" xlinkHref="#radial-gradient-43"/>
                    <linearGradient id="linear-gradient" x1="702.17" y1="330.41" x2="702.17" y2="365.95" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#363636"/>
                      <stop offset="1"/>
                    </linearGradient>
                    <radialGradient id="radial-gradient-164" cx="697.51" cy="327.57" r="6.64" xlinkHref="#radial-gradient-38"/>
                    <radialGradient id="radial-gradient-165" cx="495.75" cy="-875.48" r="6.45" xlinkHref="#radial-gradient-39"/>
                    <radialGradient id="radial-gradient-166" cx="697.51" cy="327.59" r="5.82" xlinkHref="#radial-gradient-40"/>
                    <radialGradient id="radial-gradient-167" cx="697.51" cy="327.61" r="4.87" xlinkHref="#radial-gradient-41"/>
                    <radialGradient id="radial-gradient-168" cx="697.59" cy="327.69" r="3.77" xlinkHref="#radial-gradient-42"/>
                    <radialGradient id="radial-gradient-169" cx="702.07" cy="336.63" r="3.75" xlinkHref="#radial-gradient-43"/>
                    <radialGradient id="radial-gradient-170" cx="-3340.53" cy="351.69" r="3.75" gradientTransform="translate(-2638.57 699.03) rotate(180)" xlinkHref="#radial-gradient-43"/>
                    <linearGradient id="linear-gradient-2" x1="711.1" y1="332" x2="692.77" y2="363.74" xlinkHref="#linear-gradient"/>
                    <linearGradient id="linear-gradient-3" x1="35.67" y1="330.41" x2="35.67" y2="365.95" xlinkHref="#linear-gradient"/>
                    <radialGradient id="radial-gradient-171" cx="31.01" cy="327.57" r="6.64" xlinkHref="#radial-gradient-38"/>
                    <radialGradient id="radial-gradient-172" cx="-81.45" cy="-542.24" r="6.45" xlinkHref="#radial-gradient-39"/>
                    <radialGradient id="radial-gradient-173" cx="31.01" cy="327.59" r="5.82" xlinkHref="#radial-gradient-40"/>
                    <radialGradient id="radial-gradient-174" cx="31.01" cy="327.61" r="4.87" xlinkHref="#radial-gradient-41"/>
                    <radialGradient id="radial-gradient-175" cx="31.1" cy="327.69" r="3.77" xlinkHref="#radial-gradient-42"/>
                    <radialGradient id="radial-gradient-176" cx="35.58" cy="336.63" r="3.75" xlinkHref="#radial-gradient-43"/>
                    <radialGradient id="radial-gradient-177" cx="-2674.04" cy="351.69" r="3.75" gradientTransform="translate(-2638.57 699.03) rotate(180)" xlinkHref="#radial-gradient-43"/>
                    <linearGradient id="linear-gradient-4" x1="44.6" y1="332" x2="26.27" y2="363.74" xlinkHref="#linear-gradient"/>
                    <linearGradient id="linear-gradient-5" x1="476.36" y1="285.35" x2="656.08" y2="285.35" gradientUnits="userSpaceOnUse">
                      <stop offset="0.03" stopColor="#828282"/>
                      <stop offset="0.04" stopColor="#828282"/>
                      <stop offset="0.16" stopColor="#929292"/>
                      <stop offset="0.31" stopColor="#9b9b9b"/>
                      <stop offset="0.52" stopColor="#9e9e9e"/>
                      <stop offset="0.75" stopColor="#9c9c9c"/>
                      <stop offset="0.84" stopColor="#959595"/>
                      <stop offset="0.9" stopColor="#8a8a8a"/>
                      <stop offset="0.94" stopColor="#797979"/>
                      <stop offset="0.99" stopColor="#636363"/>
                      <stop offset="1" stopColor="#5c5c5c"/>
                    </linearGradient>
                    <linearGradient id="linear-gradient-6" x1="27.86" y1="157.41" x2="168.91" y2="157.41" xlinkHref="#linear-gradient-5"/>
                    <linearGradient id="linear-gradient-7" x1="196.69" y1="162.96" x2="261.18" y2="162.96" xlinkHref="#linear-gradient-5"/>
                    <linearGradient id="linear-gradient-8" x1="291.68" y1="164.51" x2="340.47" y2="164.51" xlinkHref="#linear-gradient-5"/>
                    <linearGradient id="linear-gradient-9" x1="386.53" y1="164.51" x2="436.04" y2="164.51" xlinkHref="#linear-gradient-5"/>
                    <linearGradient id="linear-gradient-10" x1="557.05" y1="157.54" x2="698.59" y2="157.54" xlinkHref="#linear-gradient-5"/>
                    <linearGradient id="linear-gradient-11" x1="77.53" y1="285.35" x2="259.66" y2="285.35" xlinkHref="#linear-gradient-5"/>
                    <linearGradient id="linear-gradient-12" x1="468.82" y1="177.56" x2="533.79" y2="177.56" xlinkHref="#linear-gradient-5"/>
                    <linearGradient id="linear-gradient-13" x1="436.35" y1="196.55" x2="436.35" y2="150.43" gradientTransform="matrix(-1, 0, 0, 1, 1068.68, 0)" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#0c6835"/>
                      <stop offset="1" stopColor="#00ce9e"/>
                    </linearGradient>
                    <linearGradient id="linear-gradient-14" x1="438.32" y1="306.04" x2="438.32" y2="270.6" gradientTransform="matrix(-1, 0, 0, 1, 1004.64, 0)" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#006756"/>
                      <stop offset="1" stopColor="#00ce9e"/>
                    </linearGradient>
                    <linearGradient id="linear-gradient-15" x1="233.01" y1="206.55" x2="233.01" y2="149.51" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-14"/>
                    <linearGradient id="linear-gradient-16" x1="375.64" y1="209.01" x2="375.64" y2="150.22" gradientTransform="matrix(-1, 0, 0, 1, 791.28, 0)" xlinkHref="#linear-gradient-14"/>
                    <linearGradient id="linear-gradient-17" x1="320.42" y1="209.01" x2="320.42" y2="150.22" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-14"/>
                    <linearGradient id="linear-gradient-18" x1="457.28" y1="206.55" x2="457.28" y2="149.51" gradientTransform="matrix(-1, 0, 0, 1, 958.56, 0)" xlinkHref="#linear-gradient-14"/>
                    <linearGradient id="linear-gradient-19" x1="168.67" y1="306.04" x2="168.67" y2="270.6" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-14"/>
                    <linearGradient id="linear-gradient-20" x1="102.9" y1="195.55" x2="102.9" y2="150.43" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#linear-gradient-13"/>
                    <linearGradient id="linear-gradient-21" x1="155.6" y1="152.95" x2="167.91" y2="152.95" xlinkHref="#linear-gradient-5"/>
                    <linearGradient id="linear-gradient-22" x1="247.88" y1="160.39" x2="260.19" y2="160.39" xlinkHref="#linear-gradient-5"/>
                    <linearGradient id="linear-gradient-23" x1="465.08" y1="160.39" x2="477.39" y2="160.39" xlinkHref="#linear-gradient-5"/>
                    <linearGradient id="linear-gradient-24" x1="158.84" y1="146.31" x2="165.19" y2="146.31" xlinkHref="#linear-gradient-5"/>
                    <linearGradient id="linear-gradient-25" x1="557.06" y1="152.95" x2="569.37" y2="152.95" xlinkHref="#linear-gradient-5"/>
                    <linearGradient id="linear-gradient-26" x1="560.72" y1="146.31" x2="567.06" y2="146.31" xlinkHref="#linear-gradient-5"/>
                    <linearGradient id="linear-gradient-27" x1="250.96" y1="153.44" x2="257.3" y2="153.44" xlinkHref="#linear-gradient-5"/>
                    <linearGradient id="linear-gradient-28" x1="468.11" y1="153.44" x2="474.46" y2="153.44" xlinkHref="#linear-gradient-5"/>
                </defs>
                
                {/* 
                *************************************************
                ------------ Render Static SVG ----------------
                *************************************************
                */}

                <StaticSVG />

                {/* 
                *************************************************
                ------------ Dynamic App Component SVG --------
                *************************************************
                */}

                <g id="indicators">
                    <g id="tank_3_indicator" onDoubleClick={this.setTankQuantity}>
                        <g id="tank_3_indicator_back">
                            <path d="M604,373.2a24,24,0,1,1-24,24.05,24.07,24.07,0,0,1,24-24.05Zm0,21.93a2.11,2.11,0,1,1,0,4.21,2.11,2.11,0,0,1,0-4.21Z" transform="translate(-4.51 -14.6)" fillRule="evenodd" fill="url(#radial-gradient-3)"/>
                            <path d="M604,374.81a22.43,22.43,0,1,1-22.42,22.44A22.44,22.44,0,0,1,604,374.81Zm0,20.46a2,2,0,1,1,0,3.93,2,2,0,0,1,0-3.93Z" transform="translate(-4.51 -14.6)" fillRule="evenodd" fill="url(#radial-gradient-4)"/>
                        </g>
                        <g id="tank_3_indicator_screws">
                            <g>
                            <polygon points="609.76 382.19 610.36 381.33 609.65 383.94 609.08 383.77 609.76 382.19" fill="#595959" fillRule="evenodd"/>
                            <path d="M613.06,397.86a1.4,1.4,0,0,1,.51-1.87,1.36,1.36,0,0,1,.73-.2l-.71,2.58a1.51,1.51,0,0,1-.53-.51Zm1.81-1.93a1.89,1.89,0,0,1,.28.23,1.39,1.39,0,0,1-1,2.38Z" transform="translate(-4.51 -14.6)" fill="#2f2f2f" fillRule="evenodd"/>
                            </g>
                            <g>
                            <polygon points="589.96 382.19 590.56 381.33 589.85 383.94 589.28 383.77 589.96 382.19" fill="#595959" fillRule="evenodd"/>
                            <path d="M593.26,397.86a1.4,1.4,0,0,1,1.25-2.07l-.71,2.58a1.45,1.45,0,0,1-.54-.51Zm1.81-1.93a1.94,1.94,0,0,1,.29.23,1.39,1.39,0,0,1-1,2.38Z" transform="translate(-4.51 -14.6)" fill="#2f2f2f" fillRule="evenodd"/>
                            </g>
                        </g>
                        <g id="tank_3_indicator_nos">
                            <text transform="translate(596.46 374.22)" fontSize="3.06" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">FUEL</text>
                            <text transform="translate(592.64 378.05)" fontSize="3.06" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">QUANTITY</text>
                            <text transform="translate(591.87 387.99)" fontSize="3.06" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">LBS X 1000</text>
                            <text transform="translate(593.39 397.94)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">0</text>
                            <text transform="translate(586.52 393.35)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">1</text>
                            <text transform="translate(583.46 384.17)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">2</text>
                            <text transform="translate(586.52 374.99)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">3</text>
                            <text transform="translate(593.39 369.62)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">4</text>
                            <text transform="translate(602.58 369.62)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">5</text>
                            <text transform="translate(610.99 374.22)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">6</text>
                            <text transform="translate(614.82 382.64)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">7</text>
                            <text transform="translate(612.52 391.82)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">8</text>
                        </g>
                        <g id="tank_3_indicator_marks">
                            <line x1="585.16" y1="372.49" x2="581.92" y2="370.22" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="582.01" y1="382.52" x2="578.04" y2="382.52" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="585.16" y1="392.56" x2="581.92" y2="394.83" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="580.79" y1="384.74" x2="578.21" y2="385.08" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="580.82" y1="380.14" x2="578.21" y2="379.83" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="581.24" y1="377.88" x2="578.72" y2="377.25" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="581.92" y1="375.69" x2="579.51" y2="374.76" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="582.89" y1="373.59" x2="580.59" y2="372.38" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="585.55" y1="369.82" x2="583.6" y2="368.07" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="587.2" y1="368.21" x2="585.5" y2="366.25" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="589.04" y1="366.82" x2="587.57" y2="364.67" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="591.02" y1="365.66" x2="589.83" y2="363.33" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="595.33" y1="364.07" x2="594.77" y2="361.55" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="597.63" y1="363.7" x2="597.34" y2="361.12" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="599.92" y1="363.62" x2="599.98" y2="361.01" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="602.22" y1="363.79" x2="602.59" y2="361.21" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="606.67" y1="365.01" x2="607.63" y2="362.6" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="608.74" y1="366" x2="610.02" y2="363.73" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="610.7" y1="367.25" x2="612.23" y2="365.15" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="612.45" y1="368.72" x2="614.24" y2="366.82" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="615.4" y1="372.23" x2="617.58" y2="370.82" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="616.54" y1="374.25" x2="618.89" y2="373.11" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="617.41" y1="376.37" x2="619.88" y2="375.55" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="618.04" y1="378.61" x2="620.56" y2="378.07" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="618.41" y1="383.2" x2="621.01" y2="383.29" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="618.18" y1="385.5" x2="620.76" y2="385.9" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="617.7" y1="387.74" x2="620.19" y2="388.45" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="616.9" y1="389.92" x2="619.31" y2="390.94" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="614.61" y1="393.89" x2="616.68" y2="395.45" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="613.11" y1="395.65" x2="614.98" y2="397.46" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="611.4" y1="397.21" x2="613.02" y2="399.22" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="609.51" y1="398.54" x2="610.89" y2="400.75" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="593.52" y1="398.97" x2="592.16" y2="402.68" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="614.66" y1="391.28" x2="618.09" y2="393.24" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="616.93" y1="380.99" x2="620.87" y2="380.65" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="612.91" y1="371.27" x2="615.94" y2="368.72" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="604.03" y1="365.63" x2="605.06" y2="361.8" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="593.52" y1="366.08" x2="592.16" y2="362.37" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="590.94" y1="399.31" x2="589.75" y2="401.63" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="588.95" y1="398.11" x2="587.48" y2="400.27" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="587.11" y1="396.73" x2="585.41" y2="398.68" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="585.5" y1="395.08" x2="583.54" y2="396.84" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="582.86" y1="391.31" x2="580.56" y2="392.53" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="581.9" y1="389.21" x2="579.46" y2="390.15" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="581.22" y1="387" x2="578.69" y2="387.65" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                        </g>
                        
                    </g>

                    <g id="tank_4_indicator" onDoubleClick={this.setTankQuantity}>
                        <g id="tank_4_indicator_back">
                            <path d="M680.89,373.2a24,24,0,1,1-24,24.05,24.07,24.07,0,0,1,24-24.05Zm0,21.93a2.11,2.11,0,1,1,0,4.21,2.11,2.11,0,0,1,0-4.21Z" transform="translate(-4.51 -14.6)" fillRule="evenodd" fill="url(#radial-gradient)"/>
                            <path d="M680.89,374.81a22.43,22.43,0,1,1-22.42,22.44,22.44,22.44,0,0,1,22.42-22.44Zm0,20.46a2,2,0,1,1,0,3.93,2,2,0,0,1,0-3.93Z" transform="translate(-4.51 -14.6)" fillRule="evenodd" fill="url(#radial-gradient-2)"/>
                        </g>
                        <g id="tank_4_indicator_screws">
                            <g>
                            <polygon points="686.65 382.19 687.25 381.33 686.54 383.94 685.97 383.77 686.65 382.19" fill="#595959" fillRule="evenodd"/>
                            <path d="M690,397.86a1.4,1.4,0,0,1,.51-1.87,1.36,1.36,0,0,1,.73-.2l-.71,2.58a1.51,1.51,0,0,1-.53-.51Zm1.81-1.93a1.89,1.89,0,0,1,.28.23,1.39,1.39,0,0,1-1,2.38Z" transform="translate(-4.51 -14.6)" fill="#2f2f2f" fillRule="evenodd"/>
                            </g>
                            <g>
                            <polygon points="666.85 382.19 667.45 381.33 666.74 383.94 666.17 383.77 666.85 382.19" fill="#595959" fillRule="evenodd"/>
                            <path d="M670.15,397.86a1.41,1.41,0,0,1,.51-1.87,1.37,1.37,0,0,1,.74-.2l-.71,2.58a1.45,1.45,0,0,1-.54-.51Zm1.81-1.93a1.94,1.94,0,0,1,.29.23,1.39,1.39,0,0,1-1,2.38Z" transform="translate(-4.51 -14.6)" fill="#2f2f2f" fillRule="evenodd"/>
                            </g>
                        </g>
                        <g id="tank_4_indicator_nos">
                            <text transform="translate(672.93 374.22)" fontSize="3.06" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">FUEL</text>
                            <text transform="translate(669.11 378.05)" fontSize="3.06" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">QUANTITY</text>
                            <text transform="translate(668.35 387.99)" fontSize="3.06" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">LBS X 1000</text>
                            <text transform="translate(670.64 397.94)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">0</text>
                            <text transform="translate(663 393.35)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">1</text>
                            <text transform="translate(660.7 385.7)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">2</text>
                            <text transform="translate(661.46 376.51)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">3</text>
                            <text transform="translate(668.35 370.39)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">4</text>
                            <text transform="translate(676 368.85)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">5</text>
                            <text transform="translate(684.41 371.17)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">6</text>
                            <text transform="translate(689.76 376.51)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">7</text>
                            <text transform="translate(692.06 385.7)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">8</text>
                            <text transform="translate(688.23 393.35)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">9</text>
                        </g>
                        <g id="tank_4_indicator_marks">
                            <line x1="692.11" y1="374.84" x2="695.68" y2="373.11" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="693.78" y1="384.34" x2="697.72" y2="384.76" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="690.18" y1="393.3" x2="693.3" y2="395.73" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="668.32" y1="365.43" x2="667.19" y2="363.08" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="670.25" y1="364.64" x2="669.4" y2="362.17" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="672.29" y1="364.07" x2="671.73" y2="361.52" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="674.36" y1="363.7" x2="674.08" y2="361.12" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="678.59" y1="363.73" x2="678.87" y2="361.15" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="680.66" y1="364.07" x2="681.25" y2="361.55" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="682.7" y1="364.67" x2="683.55" y2="362.2" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="684.62" y1="365.49" x2="685.76" y2="363.14" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="688.2" y1="367.73" x2="689.81" y2="365.69" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="689.78" y1="369.12" x2="691.6" y2="367.27" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="691.17" y1="370.7" x2="693.21" y2="369.06" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="692.42" y1="372.4" x2="694.6" y2="371.02" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="694.23" y1="376.2" x2="696.7" y2="375.32" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="694.83" y1="378.22" x2="697.38" y2="377.62" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="695.2" y1="380.28" x2="697.78" y2="380" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="695.31" y1="382.41" x2="697.92" y2="382.38" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="694.89" y1="386.58" x2="697.41" y2="387.14" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="694.29" y1="388.62" x2="696.76" y2="389.47" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="693.5" y1="390.57" x2="695.85" y2="391.68" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="692.5" y1="392.42" x2="694.71" y2="393.78" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="689.9" y1="395.73" x2="691.77" y2="397.55" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="688.34" y1="397.15" x2="689.98" y2="399.16" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="686.64" y1="398.4" x2="688.03" y2="400.58" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="684.79" y1="399.42" x2="685.96" y2="401.77" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="670.39" y1="398.97" x2="669.06" y2="402.68" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="662.6" y1="393.3" x2="659.48" y2="395.73" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="658.97" y1="384.37" x2="655.06" y2="384.76" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="660.67" y1="374.84" x2="657.1" y2="373.11" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="667.11" y1="367.67" x2="665.01" y2="364.33" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="676.37" y1="365.03" x2="676.37" y2="361.07" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="685.67" y1="367.67" x2="687.77" y2="364.33" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="667.98" y1="399.39" x2="666.85" y2="401.71" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="666.17" y1="398.34" x2="664.75" y2="400.52" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="664.47" y1="397.09" x2="662.83" y2="399.11" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="662.91" y1="395.68" x2="661.04" y2="397.49" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="660.33" y1="392.36" x2="658.12" y2="393.72" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="659.34" y1="390.49" x2="656.96" y2="391.59" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="658.54" y1="388.53" x2="656.08" y2="389.38" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="657.98" y1="386.49" x2="655.43" y2="387.06" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="657.55" y1="382.33" x2="654.94" y2="382.3" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="657.69" y1="380.2" x2="655.09" y2="379.89" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="658.06" y1="378.13" x2="655.51" y2="377.54" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="658.66" y1="376.12" x2="656.19" y2="375.24" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="660.5" y1="372.32" x2="658.32" y2="370.93" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="661.75" y1="370.62" x2="659.71" y2="369" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="663.17" y1="369.06" x2="661.32" y2="367.22" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="664.72" y1="367.67" x2="663.11" y2="365.63" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                        </g>
                        
                    </g>

                    <g id="right_AUX_indicator" onDoubleClick={this.setTankQuantity}>
                        <g id="right_AUX_indicator_back">
                            <path d="M532.22,373.2a24,24,0,1,1-24,24.05,24.06,24.06,0,0,1,24-24.05Zm0,21.93a2.11,2.11,0,1,1,0,4.21,2.11,2.11,0,0,1,0-4.21Z" transform="translate(-4.51 -14.6)" fillRule="evenodd" fill="url(#radial-gradient-5)"/>
                            <path d="M532.23,374.81a22.43,22.43,0,1,1-22.42,22.44,22.44,22.44,0,0,1,22.42-22.44Zm0,20.46a2,2,0,1,1,0,3.93,2,2,0,0,1,0-3.93Z" transform="translate(-4.51 -14.6)" fillRule="evenodd" fill="url(#radial-gradient-6)"/>
                        </g>
                        <g id="right_AUX_indicator_screws">
                            <g>
                            <polygon points="537.99 382.19 538.58 381.33 537.87 383.94 537.31 383.77 537.99 382.19" fill="#595959" fillRule="evenodd"/>
                            <path d="M541.28,397.86a1.4,1.4,0,0,1,1.25-2.07l-.71,2.58a1.45,1.45,0,0,1-.54-.51Zm1.82-1.93a1.89,1.89,0,0,1,.28.23,1.39,1.39,0,0,1-.26,2.18,1.36,1.36,0,0,1-.73.2Z" transform="translate(-4.51 -14.6)" fill="#2f2f2f" fillRule="evenodd"/>
                            </g>
                            <g>
                            <polygon points="518.19 382.19 518.78 381.33 518.08 383.94 517.51 383.77 518.19 382.19" fill="#595959" fillRule="evenodd"/>
                            <path d="M521.48,397.86A1.4,1.4,0,0,1,522,396a1.36,1.36,0,0,1,.73-.2l-.71,2.58a1.62,1.62,0,0,1-.54-.51Zm1.82-1.93a1.89,1.89,0,0,1,.28.23,1.39,1.39,0,0,1-1,2.38Z" transform="translate(-4.51 -14.6)" fill="#2f2f2f" fillRule="evenodd"/>
                            </g>
                        </g>
                        <g id="right_AUX_indicator_nos">
                            <text transform="translate(524.57 374.22)" fontSize="3.06" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">FUEL</text>
                            <text transform="translate(520.75 378.05)" fontSize="3.06" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">QUANTITY</text>
                            <text transform="translate(519.99 387.99)" fontSize="3.06" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">LBS X 1000</text>
                            <text transform="translate(521.51 397.94)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">0</text>
                            <text transform="translate(513.1 390.28)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">1</text>
                            <text transform="translate(513.1 377.28)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">2</text>
                            <text transform="translate(522.28 369.62)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">3</text>
                            <text transform="translate(533.75 370.39)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">4</text>
                            <text transform="translate(542.16 379.58)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">5</text>
                            <text transform="translate(540.63 392.59)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">6</text>
                        </g>
                        <g id="right_AUX_indicator_marks">
                            <line x1="521.74" y1="366.08" x2="520.38" y2="362.37" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="511.65" y1="375.61" x2="508.03" y2="374.02" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="511.65" y1="389.47" x2="508.03" y2="391.03" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="518.49" y1="398.94" x2="517.21" y2="401.2" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="515.93" y1="397.21" x2="514.32" y2="399.25" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="513.69" y1="395.11" x2="511.77" y2="396.84" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="511.85" y1="392.64" x2="509.67" y2="394.06" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="509.44" y1="387.03" x2="506.92" y2="387.65" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="508.93" y1="384" x2="506.35" y2="384.2" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="508.96" y1="380.91" x2="506.35" y2="380.71" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="509.44" y1="377.88" x2="506.92" y2="377.25" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="511.88" y1="372.26" x2="509.7" y2="370.87" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="513.75" y1="369.82" x2="511.82" y2="369.1" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="515.99" y1="367.73" x2="514.37" y2="365.69" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="518.54" y1="366.03" x2="517.27" y2="363.73" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="524.3" y1="363.93" x2="523.81" y2="361.38" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="527.36" y1="363.62" x2="527.3" y2="361.01" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="530.42" y1="363.79" x2="530.79" y2="361.21" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="533.42" y1="364.47" x2="534.19" y2="361.97" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="538.89" y1="367.22" x2="540.43" y2="365.12" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="541.22" y1="369.23" x2="543.06" y2="367.39" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="543.2" y1="371.58" x2="545.3" y2="370.08" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="544.76" y1="374.22" x2="547.09" y2="373.08" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="545.87" y1="377.08" x2="548.36" y2="376.34" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="546.52" y1="380.11" x2="549.1" y2="379.77" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="546.63" y1="383.18" x2="549.24" y2="383.26" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="546.29" y1="386.21" x2="548.84" y2="386.72" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="545.44" y1="389.19" x2="547.88" y2="390.09" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="542.38" y1="394.49" x2="544.39" y2="396.13" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="540.23" y1="396.67" x2="541.96" y2="398.62" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="537.76" y1="398.51" x2="539.15" y2="400.72" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="521.74" y1="398.97" x2="520.38" y2="402.68" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="542.89" y1="391.28" x2="546.32" y2="393.24" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="544.48" y1="377.51" x2="548.28" y2="376.37" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="535.58" y1="366.88" x2="537.36" y2="363.36" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                        </g>
                    </g>

                    <g id="right_EXT_indicator" onDoubleClick={this.setTankQuantity}>
                        <g id="right_EXT_indicator_back">
                            <path d="M456,372.53a24,24,0,1,1-24,24,24.06,24.06,0,0,1,24-24Zm0,21.92a2.11,2.11,0,1,1,0,4.22,2.11,2.11,0,0,1,0-4.22Z" transform="translate(-4.51 -14.6)" fillRule="evenodd" fill="url(#radial-gradient-7)"/>
                            <path d="M456,374.13a22.43,22.43,0,1,1-22.42,22.44A22.44,22.44,0,0,1,456,374.13Zm0,20.46a2,2,0,1,1,0,3.93,2,2,0,0,1,0-3.93Z" transform="translate(-4.51 -14.6)" fillRule="evenodd" fill="url(#radial-gradient-8)"/>
                        </g>
                        <g id="right_EXT_indicator_screws">
                            <g>
                            <polygon points="461.73 380.51 462.33 380.65 461.62 383.26 461.05 383.09 461.73 380.51" fill="#595959" fillRule="evenodd"/>
                            <path d="M465,397.18a1.4,1.4,0,0,1,.51-1.87,1.36,1.36,0,0,1,.73-.2l-.71,2.58a1.51,1.51,0,0,1-.53-.51Zm1.81-1.93a2.83,2.83,0,0,1,.28.23,1.39,1.39,0,0,1-.25,2.18,1.31,1.31,0,0,1-.74.2Z" transform="translate(-4.51 -14.6)" fill="#2f2f2f" fillRule="evenodd"/>
                            </g>
                            <g>
                            <polygon points="441.93 380.51 442.53 380.65 441.82 383.26 441.25 383.09 441.93 380.51" fill="#595959" fillRule="evenodd"/>
                            <path d="M445.23,397.18a1.41,1.41,0,0,1,.51-1.87,1.37,1.37,0,0,1,.74-.2l-.71,2.58a1.45,1.45,0,0,1-.54-.51Zm1.81-1.93a2.92,2.92,0,0,1,.29.23,1.39,1.39,0,0,1-.26,2.18,1.31,1.31,0,0,1-.74.2Z" transform="translate(-4.51 -14.6)" fill="#2f2f2f" fillRule="evenodd"/>
                            </g>
                        </g>
                        <g id="right_EXT_indicator_nos">
                            <text transform="translate(447.33 374.22)" fontSize="3.06" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">FUEL</text>
                            <text transform="translate(443.5 378.05)" fontSize="3.06" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">QUANTITY</text>
                            <text transform="translate(443.5 387.99)" fontSize="3.06" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">LBS X 1000</text>
                            <text transform="translate(445.03 397.94)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">0</text>
                            <text transform="translate(438.15 393.35)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">1</text>
                            <text transform="translate(435.09 385.7)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">2</text>
                            <text transform="translate(436.63 376.51)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">3</text>
                            <text transform="translate(442.75 370.39)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">4</text>
                            <text transform="translate(451.15 368.85)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">5</text>
                            <text transform="translate(458.8 371.17)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">6</text>
                            <text transform="translate(464.15 376.51)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">7</text>
                            <text transform="translate(466.45 385.7)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">8</text>
                            <text transform="translate(462.63 393.35)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">9</text>
                        </g>
                        <g id="right_EXT_indicator_marks">
                            <line x1="466.89" y1="374.84" x2="470.44" y2="373.11" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="468.57" y1="384.34" x2="472.48" y2="384.76" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="464.94" y1="393.3" x2="468.06" y2="395.73" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="437.92" y1="369.06" x2="436.08" y2="367.22" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="439.51" y1="367.67" x2="437.9" y2="365.63" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="443.08" y1="365.43" x2="441.95" y2="363.08" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="445.04" y1="364.64" x2="444.19" y2="362.17" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="447.05" y1="364.07" x2="446.49" y2="361.52" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="449.15" y1="363.7" x2="448.84" y2="361.12" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="453.34" y1="363.73" x2="453.63" y2="361.15" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="455.44" y1="364.07" x2="456.01" y2="361.55" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="457.46" y1="364.67" x2="458.31" y2="362.2" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="459.41" y1="365.49" x2="460.52" y2="363.14" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="462.95" y1="367.73" x2="464.57" y2="365.69" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="464.54" y1="369.12" x2="466.38" y2="367.27" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="465.96" y1="370.7" x2="467.97" y2="369.06" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="467.18" y1="372.4" x2="469.36" y2="371.02" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="469.02" y1="376.2" x2="471.46" y2="375.32" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="469.59" y1="378.22" x2="472.14" y2="377.62" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="469.96" y1="380.28" x2="472.54" y2="380" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="470.1" y1="382.41" x2="472.68" y2="382.38" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="469.64" y1="386.58" x2="472.2" y2="387.14" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="469.08" y1="388.62" x2="471.54" y2="389.47" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="468.28" y1="390.57" x2="470.64" y2="391.68" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="467.26" y1="392.42" x2="469.47" y2="393.78" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="464.66" y1="395.73" x2="466.53" y2="397.55" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="463.1" y1="397.15" x2="464.74" y2="399.16" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="461.4" y1="398.4" x2="462.81" y2="400.58" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="459.55" y1="399.42" x2="460.71" y2="401.77" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="445.18" y1="398.97" x2="443.82" y2="402.68" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="437.36" y1="393.3" x2="434.24" y2="395.73" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="433.76" y1="384.37" x2="429.82" y2="384.76" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="435.43" y1="374.84" x2="431.86" y2="373.11" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="441.89" y1="367.67" x2="439.8" y2="364.33" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="451.16" y1="365.03" x2="451.16" y2="361.07" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="460.43" y1="367.67" x2="462.53" y2="364.33" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="442.77" y1="399.39" x2="441.61" y2="401.71" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="440.93" y1="398.34" x2="439.51" y2="400.52" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="439.23" y1="397.09" x2="437.58" y2="399.11" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="437.67" y1="395.68" x2="435.83" y2="397.49" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="435.09" y1="392.36" x2="432.88" y2="393.72" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="434.1" y1="390.49" x2="431.74" y2="391.59" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="433.3" y1="388.53" x2="430.84" y2="389.38" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="432.74" y1="386.49" x2="430.21" y2="387.06" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="432.31" y1="382.33" x2="429.7" y2="382.3" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="432.45" y1="380.2" x2="429.87" y2="379.89" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="432.82" y1="378.13" x2="430.3" y2="377.54" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="433.42" y1="376.12" x2="430.98" y2="375.24" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="435.29" y1="372.32" x2="433.08" y2="370.93" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="436.51" y1="370.62" x2="434.47" y2="369" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                        </g>	
                    </g>

                    <g id="total_quan_indicator">
                        <g id="total_quan_indicator_back">
                            <path d="M368.55,351a24,24,0,1,1-24,24.05,24.06,24.06,0,0,1,24-24.05Zm0,21.93a2.11,2.11,0,1,1,0,4.21,2.11,2.11,0,0,1,0-4.21Z" transform="translate(-4.51 -14.6)" fillRule="evenodd" fill="url(#radial-gradient-11)"/>
                            <path d="M368.55,352.56A22.43,22.43,0,1,1,346.14,375a22.45,22.45,0,0,1,22.41-22.44Zm0,20.46a2,2,0,1,1,0,3.93,2,2,0,0,1,0-3.93Z" transform="translate(-4.51 -14.6)" fillRule="evenodd" fill="url(#radial-gradient-12)"/>
                        </g>
                        <g id="total_quan_indicator_nos">
                            <text transform="translate(358.62 375.75)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">0</text>
                            <text transform="translate(349.44 368.1)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700"><tspan letterSpacing="0.04em">1</tspan><tspan x="2.29" y="0">0</tspan></text>
                            <text transform="translate(349.44 355.85)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700"><tspan letterSpacing="0.04em">2</tspan><tspan x="2.29" y="0">0</tspan></text>
                            <text transform="translate(357.85 347.43)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700"><tspan letterSpacing="0.04em">3</tspan><tspan x="2.29" y="0">0</tspan></text>
                            <text transform="translate(370.09 348.2)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700"><tspan letterSpacing="0.04em">4</tspan><tspan x="2.29" y="0">0</tspan></text>
                            <text transform="translate(376.21 356.61)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700"><tspan letterSpacing="0.04em">5</tspan><tspan x="2.29" y="0">0</tspan></text>
                            <text transform="translate(374.67 369.62)" fontSize="3.83" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700"><tspan letterSpacing="0.04em">6</tspan><tspan x="2.29" y="0">0</tspan></text>
                            <text transform="translate(360.14 350.49)" fontSize="3.06" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700" letterSpacing="-0.11em">TOTAL</text>
                            <text transform="translate(360.91 353.56)" fontSize="3.06" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">FUEL</text>
                            <text transform="translate(357.09 357.39)" fontSize="3.06" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">QUANTITY</text>
                            <text transform="translate(356.32 366.56)" fontSize="3.06" fill="#fefefe" fontFamily="Arial-BoldMT, Arial" fontWeight="700">LBS X 1000</text>
                        </g>
                        <g id="total_quan_indidcator_marks">
                            <line x1="379.56" y1="369.06" x2="382.99" y2="371.04" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="381.17" y1="355.28" x2="384.94" y2="354.15" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="372.25" y1="344.65" x2="374.03" y2="341.14" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="358.41" y1="343.86" x2="357.05" y2="340.15" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="348.32" y1="353.38" x2="344.69" y2="351.82" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="348.35" y1="367.25" x2="344.69" y2="368.8" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="358.41" y1="376.83" x2="357.05" y2="380.54" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="379.56" y1="369.12" x2="382.99" y2="371.1" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <line x1="355.15" y1="376.71" x2="353.88" y2="378.98" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="352.63" y1="374.98" x2="350.99" y2="377.02" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="350.39" y1="372.89" x2="348.46" y2="374.62" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="348.52" y1="370.42" x2="346.34" y2="371.84" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="346.11" y1="364.81" x2="343.59" y2="365.43" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="345.63" y1="361.77" x2="343.02" y2="361.97" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="345.63" y1="358.71" x2="343.05" y2="358.49" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="346.14" y1="355.68" x2="343.62" y2="355.03" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="348.58" y1="350.04" x2="346.37" y2="348.65" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="350.45" y1="347.6" x2="348.49" y2="345.87" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="352.69" y1="345.5" x2="351.04" y2="343.46" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="355.24" y1="343.8" x2="353.96" y2="341.54" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="360.99" y1="341.71" x2="360.51" y2="339.15" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="364.05" y1="341.39" x2="363.97" y2="338.79" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="367.11" y1="341.56" x2="367.46" y2="338.98" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="370.09" y1="342.24" x2="370.89" y2="339.78" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="375.56" y1="345.02" x2="377.09" y2="342.9" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="377.89" y1="347.01" x2="379.76" y2="345.19" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="379.87" y1="349.36" x2="382" y2="347.86" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="381.43" y1="352.02" x2="383.78" y2="350.86" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="382.56" y1="354.89" x2="385.03" y2="354.12" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="383.19" y1="357.89" x2="385.77" y2="357.55" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="383.33" y1="360.95" x2="385.94" y2="361.04" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="382.96" y1="364.01" x2="385.51" y2="364.5" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="382.11" y1="366.96" x2="384.55" y2="367.87" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="379.05" y1="372.26" x2="381.06" y2="373.91" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="376.92" y1="374.47" x2="378.65" y2="376.4" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="374.46" y1="376.29" x2="375.85" y2="378.5" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="371.88" y1="377.65" x2="372.9" y2="380.03" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="0.77"/>
                            <line x1="358.41" y1="376.74" x2="357.05" y2="380.45" fill="none" stroke="#fefefe" strokeMiterlimit="10" strokeWidth="1.5"/>
                        </g>
                        <g id="total_quan_indicator_screws">
                            <g>
                            <polygon points="374.31 358.94 374.91 359.08 374.2 361.69 373.63 361.52 374.31 358.94" fill="#595959" fillRule="evenodd"/>
                            <path d="M377.61,375.61a1.4,1.4,0,0,1,1.25-2.07l-.71,2.58a1.45,1.45,0,0,1-.54-.51Zm1.81-1.93a1.94,1.94,0,0,1,.29.23,1.39,1.39,0,0,1-.26,2.18,1.36,1.36,0,0,1-.73.2Z" transform="translate(-4.51 -14.6)" fill="#2f2f2f" fillRule="evenodd"/>
                            </g>
                            <g>
                            <polygon points="354.52 358.94 355.11 359.08 354.4 361.69 353.84 361.52 354.52 358.94" fill="#595959" fillRule="evenodd"/>
                            <path d="M357.81,375.61a1.4,1.4,0,0,1,1.25-2.07l-.71,2.58a1.45,1.45,0,0,1-.54-.51Zm1.82-1.93a2.6,2.6,0,0,1,.28.23,1.39,1.39,0,0,1-.26,2.18,1.36,1.36,0,0,1-.73.2Z" transform="translate(-4.51 -14.6)" fill="#2f2f2f" fillRule="evenodd"/>
                            </g>
                        </g>
                    </g>
                </g>
                <g id="eng_3_low_press">
                    <path d="M616.76,483.78V500.7h17V483.78Zm18.13-1.18v19.29H615.61V482.6Z" transform="translate(-4.51 -14.6)" fill="#616161"/>
                    <rect x="613.25" y="470.16" width="15" height="15" fill="#272727" stroke="#000" strokeMiterlimit="10"/>
                    <text id="eng3_low_press_light" visibility={this.state.pressureSwitches[0].fuelPresent ? "hidden" : "visible"} transform="translate(616.6 476.79)" fontSize="3.5" fill="#f7d417" fontFamily="ArialNarrow-Bold, Arial" fontWeight="700"><tspan letterSpacing="0.1em">LOW</tspan><tspan x="-1.16" y="4.59">PRESS</tspan></text>
                </g>
                <g id="eng_4_low_press">
                    <path d="M693.56,483.78V500.7h17V483.78Zm18.13-1.18v19.29H692.41V482.6Z" transform="translate(-4.51 -14.6)" fill="#616161"/>
                    <rect x="690.05" y="470.16" width="15" height="15" fill="#272727" stroke="#000" strokeMiterlimit="10"/>
                    <text id="eng4_low_press_light" visibility={this.state.pressureSwitches[1].fuelPresent ? "hidden" : "visible"} transform="translate(693.05 476.15)" fontSize="3.5" fill="#f7d417" fontFamily="ArialNarrow-Bold, Arial" fontWeight="700"><tspan letterSpacing="0.1em">LOW</tspan><tspan x="-1.16" y="4.59">PRESS</tspan></text>
                </g>
                <g id="right_aux_empty">
                    <path d="M485.47,412v16.92h17V412Zm18.13-1.18v19.29H484.31V410.84Z" transform="translate(-4.51 -14.6)" fill="#616161"/>
                    <rect x="481.96" y="398.4" width="15" height="15" fill="#272727" stroke="#000" strokeMiterlimit="10"/>
                </g>
                <g id="right_ext_empty">
                    <path d="M403.8,412v16.92h17V412Zm18.14-1.18v19.29H402.65V410.84Z" transform="translate(-4.51 -14.6)" fill="#616161"/>
                    <rect x="400.29" y="398.4" width="15" height="15" fill="#272727" stroke="#000" strokeMiterlimit="10"/>
                </g>                
                <g id="right_dump_switch_open" className="guarded_switch" onClick={this.handleGuardVisibility}>
                    <path d="M697,330.41h10.32a2.25,2.25,0,0,1,2.24,2.24V350l-.9,13.75a2.3,2.3,0,0,1-2.24,2.24H697.9a2.31,2.31,0,0,1-2.24-2.24l-.89-13.81V332.65a2.24,2.24,0,0,1,2.24-2.24Z" transform="translate(-4.51 -14.6)" fillRule="evenodd" fill="url(#linear-gradient)"/>
                    <path d="M709.26,341a3.62,3.62,0,0,1,.34,1.61V359.5h-2V340.32a3.71,3.71,0,0,1,1,0,1.24,1.24,0,0,1,.69.64Z" transform="translate(-4.51 -14.6)" fill="#8c3b35" fillRule="evenodd"/>
                    <path d="M695.08,341a3.49,3.49,0,0,0-.35,1.61V359.5h2V340.32a3.63,3.63,0,0,0-1,0,1.21,1.21,0,0,0-.69.64Z" transform="translate(-4.51 -14.6)" fill="#8c3b35" fillRule="evenodd"/>
                    <path d="M708.65,358.19a4,4,0,0,1,.9,3.06l-1.16,4.15c-.17.57-.48,1.32-1.18,1.32h-9.85c-.69,0-1-.77-1.16-1.32l-1.41-4.15c-.39-1.16.69-3.3,1.81-3.85a1.12,1.12,0,0,1,.53-.15h10.08a2.11,2.11,0,0,1,1.44.94Z" transform="translate(-4.51 -14.6)" fill="#963d37" fillRule="evenodd"/>
                    <path d="M708.88,357.89a2.18,2.18,0,0,1,.72,1.61v.83a2.19,2.19,0,0,1-.72,1.6,2.34,2.34,0,0,1-1.63.64H697.09a2.35,2.35,0,0,1-2-1,2.08,2.08,0,0,1-.41-1.28v-.79a2.24,2.24,0,0,1,.72-1.61,2.38,2.38,0,0,1,1.64-.64h10.16a2.36,2.36,0,0,1,1.63.64Z" transform="translate(-4.51 -14.6)" fill="#ba524a" fillRule="evenodd"/>
                    <g>
                        <polygon points="703.14 348.26 692.47 348.26 694.03 351.76 701.27 351.76 703.14 348.26" fill="#ff0" fillRule="evenodd"/>
                        <polygon points="702.81 348.84 692.91 349.15 692.77 348.84 703.01 348.46 702.81 348.84"/>
                        <polygon points="702.54 349.34 693.19 349.74 693.05 349.42 702.74 348.94 702.54 349.34"/>
                        <polygon points="702.26 349.9 693.43 350.25 693.29 349.93 702.48 349.46 702.26 349.9"/>
                        <polygon points="701.99 350.37 693.61 350.65 693.49 350.38 702.18 350.02 701.99 350.37"/>
                        <polygon points="701.8 350.71 693.75 351.03 693.64 350.78 701.93 350.46 701.8 350.71"/>
                        <polygon points="701.63 351.02 693.91 351.37 693.82 351.19 701.75 350.78 701.63 351.02"/>
                        <polygon points="701.44 351.39 694.02 351.69 693.95 351.5 701.59 351.13 701.44 351.39"/>
                    </g>
                </g>
            
                {/* 
                *************************************************
                ------- Render Fuel System Components   --------
                *************************************************
                */}

                {this.state.toggleSwitches.map( toggleswitch =>
                    <ToggleSwitch
                        key={toggleswitch.id}
                        id={toggleswitch.id}
                        transform={toggleswitch.transform}
                        switchedOn={toggleswitch.switchedOn}
                        onSwitchEvent={this.handleToggleSwitch}
                    />
                )}
                
                {/* 
                ------- Insert Dump Switch Guard to render after Toggle Switches   --------
                */}
                <g id="right_dump_switch_guarded" className="guarded_switch" visibility={this.state.rightGuardVisible ? "visible" : "hidden"} onClick={this.handleGuardVisibility}>
                    <path d="M709.5,360.29h0a.38.38,0,0,0,.11-.23s0-.38,0-.53v-7.3a.44.44,0,0,0-.45-.44.48.48,0,0,0-.33.12s0,0,0,.05a.45.45,0,0,0-.1.27V360a.44.44,0,0,0,.13.32.51.51,0,0,0,.33.13.45.45,0,0,0,.32-.13Z" transform="translate(-4.51 -14.6)" fill="#4d4d4d" fillRule="evenodd"/>
                    <path d="M709.5,360.29h0a.38.38,0,0,0,.11-.23s0-.38,0-.53v-7.3a.44.44,0,0,0-.45-.44.48.48,0,0,0-.33.12s0,0,0,.05a.45.45,0,0,0-.1.27V360a.44.44,0,0,0,.13.32.51.51,0,0,0,.33.13.45.45,0,0,0,.32-.13Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#333" strokeMiterlimit="10" strokeWidth="0.23"/>
                    <path d="M695.46,360.29s0,0,0,0a.4.4,0,0,0,.12-.23s0-.38,0-.53v-7.3a.46.46,0,0,0-.13-.31.44.44,0,0,0-.33-.13.42.42,0,0,0-.31.12l-.05.05a.51.51,0,0,0-.09.27V360a.44.44,0,0,0,.13.32.48.48,0,0,0,.32.13.44.44,0,0,0,.32-.13Z" transform="translate(-4.51 -14.6)" fill="#4d4d4d" fillRule="evenodd"/>
                    <path d="M695.46,360.29s0,0,0,0a.4.4,0,0,0,.12-.23s0-.38,0-.53v-7.3a.46.46,0,0,0-.13-.31.44.44,0,0,0-.33-.13.42.42,0,0,0-.31.12l-.05.05a.51.51,0,0,0-.09.27V360a.44.44,0,0,0,.13.32.48.48,0,0,0,.32.13.44.44,0,0,0,.32-.13Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#333" strokeMiterlimit="10" strokeWidth="0.23"/>
                    <path d="M696.92,330.22H707.4a2.28,2.28,0,0,1,2.28,2.28v17.56l-2.21.05v1.5h1.29V364a2.28,2.28,0,0,1-2.27,2.27h-8.66a2.28,2.28,0,0,1-2.28-2.27V351.6l1.3,0v-1.47l-2.2-.08V332.5a2.28,2.28,0,0,1,2.27-2.28Z" transform="translate(-4.51 -14.6)" fillRule="evenodd" fill="url(#linear-gradient-2)"/>
                    <path d="M708.06,363.85h0a2.16,2.16,0,0,0,.38-1.23V344c.17-1.3,1-2.5,1-3.83V329.39a2.29,2.29,0,0,0-2.28-2.28h-9.82a2.29,2.29,0,0,0-2.28,2.2v10.84c0,1.33.8,2.53,1,3.83v18.64a2.18,2.18,0,0,0,2.19,2.17,4.07,4.07,0,0,1,8.06,0,2.18,2.18,0,0,0,1.81-.94Z" transform="translate(-4.51 -14.6)" fill="#963d37" fillRule="evenodd"/>
                    <rect x="694" y="315.09" width="7.36" height="22.23" fill="#ff0"/>
                    <path d="M707,352.78V328.42s1.6-.6,1.6.47.54,11.39.06,12a6.16,6.16,0,0,0-.66,3c0,.89-.32,8.9-.32,8.9Z" transform="translate(-4.51 -14.6)" fill="#a14a49" fillRule="evenodd"/>
                    <path d="M705.9,363.1a4.1,4.1,0,0,0-3.68-1.83c-1.91,0-2.76,1-3.67,1.83V352h7.35Z" transform="translate(-4.51 -14.6)" fill="#e3e300" fillRule="evenodd"/>
                    <path d="M697.67,352.78V328.42s-1.6-.6-1.6.47-.54,11.39-.06,12a6.16,6.16,0,0,1,.66,3c0,.89.33,8.9.33,8.9Z" transform="translate(-4.51 -14.6)" fill="#a14a49" fillRule="evenodd"/>
                    <path d="M702.16,331.61a.68.68,0,1,0,0,1.36.68.68,0,1,0,0-1.36Z" transform="translate(-4.51 -14.6)" fill="#1a1a1a" fillRule="evenodd"/>
                    <path d="M705.9,332.43" transform="translate(-4.51 -14.6)"/>
                    <g>
                        <polygon points="699.57 315.09 694 318.65 694 317.2 697.38 315.09 699.57 315.09"/>
                        <polygon points="701.36 322.23 694 326.93 694 325.49 701.38 320.87 701.36 322.23"/>
                        <polygon points="701.36 325.7 694 330.4 694 328.95 701.38 324.34 701.36 325.7"/>
                        <polygon points="701.36 329.26 694 333.96 694 332.51 701.38 327.9 701.36 329.26"/>
                        <polygon points="701.36 343.21 694 347.91 694 346.47 701.38 341.85 701.36 343.21"/>
                        <polygon points="701.36 339.55 694 344.25 694 342.81 701.38 338.19 701.36 339.55"/>
                        <polygon points="701.36 335.95 694 340.65 694 339.21 701.38 334.59 701.36 335.95"/>
                        <polygon points="701.36 332.62 694 337.32 694 335.88 701.38 331.26 701.36 332.62"/>
                        <polygon points="701.36 318.64 694 323.34 694 321.9 701.38 317.28 701.36 318.64"/>
                    </g>
                </g>

                {this.state.rotarySwitches.map( rotaryswitch =>
                    <RotarySwitch
                    key={rotaryswitch.id}
                    id={rotaryswitch.id}
                    startingRotation={rotaryswitch.startingRotation}
                    transform={rotaryswitch.transform}
                    switchedOn={rotaryswitch.switchedOn}
                    onSwitchEvent={this.handleRotarySwitch}
                    test={this.state.testMessage}
                    />
                )}

                {this.state.quantityIndicators.map( indicator =>
                    <QuantityIndicator
                        key={indicator.id}
                        id={indicator.id}
                        points={indicator.points}
                        quantity={indicator.id === 'total_quan_needle' ? this.calculateTotalFuel() : indicator.quantity}
                        maxQuantity={indicator.maxQuantity}
                        minQuantity={indicator.minQuantity}
                        dumping={indicator.dumping}
                        rotationDeg={this.calculateNeedleRotation(indicator)}
                        updateQuantity={this.readTankQuantity.bind(this)}
                    />
                )}						

                {this.state.manifolds.map( manifold =>
                    <Manifold
                        points={manifold.points}
                        key={manifold.id}
                        id={manifold.id}
                        nextLine={manifold.nextLine}
                        classes={manifold.classes}
                        fuelPresent={manifold.fuelPresent}
                        psi={this.state.systemPSI}
                        psiFluxCounter={this.state.systemPSI_fluxCounter}
                    />
                )}

                {this.state.rotaryValves.map( valve =>
                    <RotaryValve
                        key={valve.id}
                        id={valve.id}
                        open={valve.open}
                        fuelPresent={valve.fuelPresent}
                        path_1_d={valve.path_1_d}
                        path_2_d={valve.path_2_d}
                        lineX1 = {valve.lineX1}
                        lineY1 = {valve.lineY1}
                        lineX2 = {valve.lineX2}
                        lineY2 = {valve.lineY2}
                        failed={valve.failed}
                        onFailEvent={this.handleFailEvent}
                    />
                )}

                {this.state.springValves.map( valve =>
                    <SpringValve
                        key={valve.id}
                        id={valve.id}
                        fuelPresent={valve.fuelPresent}
                        rectX={valve.rectX}
                        rectY={valve.rectY}
                        springClasses={valve.springClasses}
                        circX={valve.circX}
                        circY={valve.circY}
                        pathD={valve.pathD}
                    />
                )}

                {this.state.fuelPumps.map( pump =>
                    <FuelPump
                        key={pump.id}
                        id={pump.id}
                        transform={pump.transform}
                        fuelPresent={pump.fuelPresent}
                        failed={pump.failed}
                        onFailEvent={this.handleFailEvent}
                        emptyLightStatus={pump.emptyLightStatus}
                    />
                )}

                {this.state.pressureSwitches.map( pressureswitch =>
                    <PressureSwitch
                        key={pressureswitch.id}
                        id={pressureswitch.id}
                        transform={pressureswitch.transform}
                        fuelPresent={pressureswitch.fuelPresent}
                    />
                )}
            </svg>
        );
    }
}

export default App;
