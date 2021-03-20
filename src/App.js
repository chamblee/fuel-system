import React from 'react';
import './fuel_system_app.css';
import Manifold from './Manifold'
import RotaryValve from './RotaryValve'
import SpringValve from './SpringValve'
import FuelPump from './FuelPump'
import PressureSwitch from './PressureSwitch'
import ToggleSwitch from './ToggleSwitch'
import RotarySwitch from './RotarySwitch'
import QuantityIndicator from './QuantityIndicator'

/* 
----------------------------------------------------------------
Parent/App Component 
----------------------------------------------------------------
*/

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
    Event Handlers - user actions
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
            let springValveIndex = newSpringValves.findIndex(valve => valve.id === newFuelPumps[fuelPumpIndex].connectedSpringValve);
            let toggleSwitchIndex = newToggleSwitches.findIndex(sw => sw.id === newFuelPumps[fuelPumpIndex].connectedToggleSwitch);
            
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
        let toggleSwitchIndex = newToggleSwitches.findIndex(toggleSwitch => toggleSwitch.id === id);
        newToggleSwitches[toggleSwitchIndex] = {...newToggleSwitches[toggleSwitchIndex], switchedOn: !newToggleSwitches[toggleSwitchIndex].switchedOn};

        //get connected fuel pump
        let connectedFuelPump = newToggleSwitches[toggleSwitchIndex].connectedPump;
        let fuelPumpIndex = newFuelPumps.findIndex(fuelPump => fuelPump.id === connectedFuelPump);

        //get connected spring valve
        let connectedSpringValve = connectedFuelPump ? newFuelPumps[fuelPumpIndex].connectedSpringValve : '';
        let springValveIndex = newSpringValves.findIndex(valve => valve.id === connectedSpringValve);
        
        //get connected dump valve
        let connectedDumpValve = newToggleSwitches[toggleSwitchIndex].connectedDumpValve;
        let dumpValveIndex = newRotaryValves.findIndex(valve => valve.id === connectedDumpValve);

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
        let crossfeed_manifold_2 = this.state.manifolds.find(manifold => manifold.id === 'crossfeed_line2');
        
        //toggle switch status
        let rotarySwitchIndex = this.state.rotarySwitches.findIndex(rotaryswitch => rotaryswitch.id === id);
        let newRotarySwitches = [...this.state.rotarySwitches];
        newRotarySwitches[rotarySwitchIndex] = {...newRotarySwitches[rotarySwitchIndex], switchedOn: !newRotarySwitches[rotarySwitchIndex].switchedOn};

        //target rotary valves connected to this rotary switch
        let connectedRotaryValve = this.state.rotarySwitches[rotarySwitchIndex].connectedValve;
        let rotaryValveIndex = this.state.rotaryValves.findIndex(valve => valve.id === connectedRotaryValve);
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
        let quantityIndicatorNeedleID = e.currentTarget.id + "_needle";
        let quantityIndicatorIndex = newQuantityIndicators.findIndex(indicator => indicator.id === quantityIndicatorNeedleID);
        let currentTankQuantity = newQuantityIndicators[quantityIndicatorIndex].quantity;
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
        let dumpSwitchIndex = newToggleSwitches.findIndex(toggleSwitch => toggleSwitch.id === 'right_dump_valveSwitch');
        let connectedDumpValve = newToggleSwitches[dumpSwitchIndex].connectedDumpValve;
        let dumpValveIndex = newRotaryValves.findIndex(valve => valve.id === connectedDumpValve);
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
    App Component Methods
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
                
                {/* -------------//////////////////////-----------------------------
                    
                                    Conrol Panel 
                
                -----------------/////////////////////------------------------------*/}

                <g id="panel">
                    <rect id="back2" className="cls-1" x="327.44" y="306.16" width="402.61" height="223.2" />
                    <path id="back1" className="cls-2" d="M335.43,324.19H688.17a2.72,2.72,0,0,1,2.73,2.72v41.67a2.75,2.75,0,0,1-2.73,2.75H658.58a2.72,2.72,0,0,0-2.72,2.72V418.7a2.72,2.72,0,0,0,2.72,2.72h59.78a2.74,2.74,0,0,1,2.72,2.75v8.13h0a5,5,0,0,0,4.68,5h2.38a2.27,2.27,0,0,1,2.27,2.27v84.53a2.27,2.27,0,0,1-2.27,2.27h-2.38a4.61,4.61,0,0,0-4.68,4.5v9.67H335.43M693.05,482h18.23a1.14,1.14,0,0,1,1.13,1.14v18.23a1.14,1.14,0,0,1-1.13,1.13H693.05a1.14,1.14,0,0,1-1.13-1.13V483.13a1.14,1.14,0,0,1,1.13-1.14Zm-76.88,0h18.2a1.14,1.14,0,0,1,1.16,1.14v18.23a1.14,1.14,0,0,1-1.16,1.13h-18.2a1.16,1.16,0,0,1-1.16-1.13V483.13a1.16,1.16,0,0,1,1.16-1.14ZM484.84,410.28h18.23a1.14,1.14,0,0,1,1.14,1.13v18.2a1.14,1.14,0,0,1-1.14,1.16H484.84a1.14,1.14,0,0,1-1.13-1.16v-18.2a1.14,1.14,0,0,1,1.13-1.13Zm-81.66,0h18.23a1.14,1.14,0,0,1,1.13,1.13v18.2a1.14,1.14,0,0,1-1.13,1.16H403.18a1.14,1.14,0,0,1-1.14-1.16v-18.2a1.14,1.14,0,0,1,1.14-1.13ZM346.6,349.11h44.64a2.72,2.72,0,0,1,2.73,2.72v116.5a2.75,2.75,0,0,1-2.73,2.75H346.6a2.75,2.75,0,0,1-2.72-2.75V351.83a2.72,2.72,0,0,1,2.72-2.72Zm235.1,22.22h44.62a2.75,2.75,0,0,1,2.75,2.72V418.7a2.75,2.75,0,0,1-2.75,2.72H581.7A2.75,2.75,0,0,1,579,418.7V374.05a2.75,2.75,0,0,1,2.75-2.72Zm-71.77,0h44.62a2.75,2.75,0,0,1,2.75,2.72V418.7a2.75,2.75,0,0,1-2.75,2.72H509.93a2.75,2.75,0,0,1-2.75-2.72V374.05a2.75,2.75,0,0,1,2.75-2.72Zm-76.59,0H478a2.74,2.74,0,0,1,2.75,2.72V418.7a2.74,2.74,0,0,1-2.75,2.72H433.34a2.72,2.72,0,0,1-2.72-2.72V374.05a2.72,2.72,0,0,1,2.72-2.72Z" transform="translate(-4.6 -14.6)" />

                    <path id="red_lines" className="cls-46" d="M657.33,345.19H639a8.29,8.29,0,0,0,.23-1.89,8.52,8.52,0,0,0-.23-1.9h18.31v-3l9.84,4.91-9.84,4.93Zm-24.74,6.44v11h14.57l9.89,9.15a2.78,2.78,0,0,0-1.19,2.27v1.79l-10.23-9.41H628.82v-14.8a8.31,8.31,0,0,0,1.9.23,8.18,8.18,0,0,0,1.87-.23Zm50.2,69.79v33.33a8.45,8.45,0,0,0-1.9-.22,8.58,8.58,0,0,0-1.9.22V421.42Zm-60.41-76.23H596.67a8.29,8.29,0,0,0,.23-1.89,8.52,8.52,0,0,0-.23-1.9h25.71a8.52,8.52,0,0,0-.23,1.9,8.29,8.29,0,0,0,.23,1.89Zm-32.14,6.44v11h15.67v8.7h-3.8v-4.9H586.47v-14.8a8.11,8.11,0,0,0,1.87.23,8.45,8.45,0,0,0,1.9-.23Zm15.67,69.79v33.33a8.51,8.51,0,0,0-1.9-.22,8.65,8.65,0,0,0-1.9.22V421.42ZM580,345.19H524.9a8.3,8.3,0,0,0,.2-1.89,8.51,8.51,0,0,0-.2-1.9H580a10.73,10.73,0,0,0-.19,1.9,10.44,10.44,0,0,0,.19,1.89Zm-61.54,6.44v11h15.68v8.7h-3.8v-4.9H514.69v-14.8a8.18,8.18,0,0,0,1.87.23,8.31,8.31,0,0,0,1.9-.23Zm15.68,69.79v33.33a8.31,8.31,0,0,0-3.8,0V421.42Zm-25.91-76.23H464a8.29,8.29,0,0,0,.23-1.89,8.52,8.52,0,0,0-.23-1.9h44.25a8.51,8.51,0,0,0-.2,1.9,8.3,8.3,0,0,0,.2,1.89Zm-50.65,6.44v19.7h-3.8v-19.7a8.31,8.31,0,0,0,1.9.23,8.66,8.66,0,0,0,1.9-.23Zm0,69.79v10.8h21.57v5.64a8.45,8.45,0,0,0-1.9-.2,8.57,8.57,0,0,0-1.9.2V436H436v1.84a8.64,8.64,0,0,0-1.9-.2,8.51,8.51,0,0,0-1.9.2v-5.64h21.6v-10.8Zm-90.54,63,.08-13.31h3.77v9.5h28.52v1.9l.11,48.24h54.26V460.2h-21.6v-5.67a8.51,8.51,0,0,0,1.9.2,8.64,8.64,0,0,0,1.9-.2h0v1.87h39.37v-1.87a8.57,8.57,0,0,0,1.9.2,8.45,8.45,0,0,0,1.9-.2v5.67H457.58v20.38h72.76v-9.16a9.13,9.13,0,0,0,3.8,0v59.3h41.21V480.58h26.76v-9.16a10.93,10.93,0,0,0,1.9.2,10.73,10.73,0,0,0,1.9-.2v18.91h9.36v3.8h-9.36V502h6v15.93H596V502h6.15V484.38h-23v46.34h73.19V502h-.11V480.58H679v-9.16a10.83,10.83,0,0,0,1.9.2,10.63,10.63,0,0,0,1.9-.2v18.91h9.35v3.8h-9.35V502h6v15.93h-16V502H679V484.38H656V502h.11v32.57H395.75v-1.9l-.11-48.27Zm163.3,46.33V484.38H457.58v46.34Z" transform="translate(-7.28 -14.6)" />


                    <g id="labels">
                        <text transform="translate(410 433.15)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">OFF</text>
                        <text transform="translate(410 440.04)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">ON</text>
                        <text transform="translate(483.28 433.15)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">OFF</text>
                        <text transform="translate(483.28 440.04)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">ON</text>
                        <text transform="translate(636.99 329.84)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700" letterSpacing="0.02em">OVERBD</text>
                        <text transform="translate(404.5 361.2)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">EXT</text>
                        <text transform="translate(405.27 365.03)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700" letterSpacing="-0.08em">IND</text>
                        <text transform="translate(403.74 369.1)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">TEST</text>
                        <text transform="translate(486.33 361.2)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">AUX</text>
                        <text transform="translate(487.1 365.03)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700" letterSpacing="-0.08em">IND</text>
                        <text transform="translate(484.8 369.1)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">TEST</text>
                        <text transform="translate(559.75 374.22)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">NO.3</text>
                        <text transform="translate(561.28 378.05)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700" letterSpacing="-0.08em">IND</text>
                        <text transform="translate(559.75 382.1)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">TEST</text>
                        <text transform="translate(633.93 374.22)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">NO.4</text>
                        <text transform="translate(635.46 378.05)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700" letterSpacing="-0.08em">IND</text>
                        <text transform="translate(633.93 382.1)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">TEST</text>
                        <text transform="translate(532.98 354.31)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">AUX</text>
                        <text transform="translate(604.87 354.31)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">NO.3</text>
                        <text transform="translate(656.1 354.31)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">NO.4</text>
                        <text transform="translate(436 354.31)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">EXT</text>
                        <text transform="translate(610.99 447.68)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">BOOST</text>
                        <text transform="translate(610.99 451.51)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">PUMP</text>
                        <text transform="translate(580 446.17)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">OFF</text>
                        <text transform="translate(580 453.06)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">ON</text>
                        <text transform="translate(687.46 447.68)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">BOOST</text>
                        <text transform="translate(687.46 451.51)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">PUMP</text>
                        <text transform="translate(658 446.17)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">OFF</text>
                        <text transform="translate(658 453.06)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">ON</text>
                        <text transform="translate(538.33 445.4)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">AUX</text>
                        <text transform="translate(538.33 449.23)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">TANK</text>
                        <text transform="translate(538.33 453.82)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">PUMP</text>
                        <text transform="translate(509 446.17)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">OFF</text>
                        <text transform="translate(509 453.06)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">ON</text>
                        <text transform="translate(446 429.32)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">EXT</text>
                        <text transform="translate(445 433.89)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">TANK</text>
                        <text transform="translate(444 438.21)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">PUMPS</text>
                        <text transform="translate(435.86 425.49)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">AFT</text>
                        <text transform="translate(456 425.49)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700" letterSpacing="-0.01em">FWD</text>
                        <text transform="translate(455.74 510.45)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">CROSS</text>
                        <text transform="translate(455.74 514.28)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">FEED</text>
                        <text transform="translate(508 510.45)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">CROSS</text>
                        <text transform="translate(509 514.28)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">FEED</text>
                        <text transform="translate(577.34 510.45)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">CROSS</text>
                        <text transform="translate(577.34 514.28)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">FEED</text>
                        <text transform="translate(630 510.45)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">CROSS</text>
                        <text transform="translate(630 514.28)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">FEED</text>
                        <text transform="translate(467.98 518.88)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700" letterSpacing="0.08em">CROSSFEED MANIFOLD</text>
                        <text transform="translate(346 461.48)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700" letterSpacing="-0.03em">MANF</text>
                        <text transform="translate(367 461.48)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">PRESS.</text>
                        <text transform="translate(482.51 490.56)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">BYPASS</text>
                        <text transform="translate(427.44 328.29)" fontSize="4.59" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">DUMP</text>
                        <text transform="translate(424.39 333.67)" fontSize="4.59" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">PUMPS</text>
                        <text transform="translate(670 316.04)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">NORM</text>
                        <text transform="translate(669 328.29)" fontSize="4.59" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">DUMP</text>
                        <text transform="translate(667 333.67)" fontSize="4.59" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">VALVE</text>
                        <text transform="translate(670 343.6)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">OPEN</text>
                        <text transform="translate(495.51 324.46)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">OFF</text>
                        <text transform="translate(492.45 336.71)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">DUMP</text>
                        <text transform="translate(567.39 324.46)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">OFF</text>
                        <text transform="translate(563.57 336.71)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">DUMP</text>
                        <text transform="translate(610.22 324.46)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">OFF</text>
                        <text transform="translate(606.4 336.71)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">DUMP</text>
                        <text transform="translate(670 492.08)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">ENG</text>
                        <text transform="translate(671 500.49)" fontSize="9.18" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">4</text>
                        <text transform="translate(593 492.08)" fontSize="3.83" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">ENG</text>
                        <text transform="translate(594 500.49)" fontSize="9.18" fill="#fff" fontFamily="Arial-BoldMT, Arial" fontWeight="700">3</text>
                    </g>

                    <g id="knobs">
                        <g>
                            <path d="M417.48,474.07a7.64,7.64,0,1,0-5.41,2.24,7.6,7.6,0,0,0,5.41-2.24Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#141414" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.67"/>
                            <path d="M417.48,474.07a7.64,7.64,0,1,0-5.41,2.24,7.6,7.6,0,0,0,5.41-2.24Z" transform="translate(-4.51 -14.6)" fill="#424242" fillRule="evenodd"/>
                            <path d="M412.35,463.5l-.28-.51v-.71l.34.2Zm.54.06-.23-.54.09-.71.31.22Zm.54.11-.17-.57.14-.68.28.26Zm.51.17-.12-.6.23-.65.25.28Zm.48.2,0-.57.28-.65.23.34Zm.48.28,0-.59.34-.6.2.34Zm.42.31.09-.56.43-.57.14.37Zm.43.37.14-.57.46-.51.11.37Zm.34.4.2-.54.54-.48.08.39Zm.34.45.26-.54.56-.39,0,.36Zm.26.45.31-.48.62-.37,0,.4Zm.22.52.37-.46.65-.28-.05.37Zm.17.51.4-.43.68-.2-.09.37Zm.12.53.45-.36.68-.17-.14.36Zm.05.54.48-.34.71-.05-.17.34Zm0,.54.51-.28h.71l-.2.34Zm-.05.54.53-.23.71.09-.25.31Zm-.12.51.57-.14.68.14-.26.28Zm-.17.54.57-.11.68.22-.31.26Zm-.22.48.59,0,.62.29-.31.22Zm-.26.48.57,0,.62.34-.34.2Zm-.34.43.6.08.56.43-.37.14Zm-.34.39.54.17.54.46-.37.11Zm-.43.37.57.2.46.54-.37.06Zm-.42.34.51.26.43.57-.4,0Zm-.48.26.51.31.34.62-.4,0Zm-.48.22.45.37.28.63-.39,0Zm-.51.17.39.4.23.68-.37-.08Zm-.54.12.37.45.14.68-.37-.14Zm-.54.06.31.48.09.71-.37-.17Zm-.54,0,.26.51v.7l-.32-.19Zm-.54-.06.2.54-.06.71-.31-.26Zm-.54-.12.17.57-.17.68-.28-.28Zm-.51-.17.09.57-.2.68-.26-.31Zm-.51-.22.06.59-.28.63-.23-.31Zm-.45-.26,0,.57-.37.62-.17-.34Zm-.45-.34-.09.6-.4.57-.17-.37Zm-.4-.34-.14.54-.49.54-.11-.37Zm-.37-.42-.2.56-.51.46-.08-.37Zm-.31-.43-.26.51-.56.43,0-.4Zm-.26-.48-.31.51-.62.34v-.4Zm-.22-.48-.37.45-.65.29,0-.4Zm-.17-.51-.4.4-.68.22.08-.37Zm-.12-.54-.45.37-.68.14.11-.37Zm0-.54-.49.31-.7.09.17-.37Zm0-.54-.51.26h-.71l.2-.34Zm0-.54-.54.2-.7-.05.22-.32Zm.12-.53-.57.17-.68-.17.25-.29Zm.17-.51-.6.08-.65-.2.28-.25Zm.19-.52-.56.06-.65-.31.34-.2Zm.29-.45-.57,0-.62-.37.34-.17Zm.31-.45-.57-.09-.56-.39.36-.17Zm.37-.4-.57-.14-.51-.48.37-.12Zm.4-.37-.54-.2-.49-.51.4-.08Zm.45-.31-.54-.25-.4-.57.4,0Zm.45-.28-.48-.31-.34-.6h.37Zm.51-.2-.45-.37-.28-.65.36.05Zm.51-.17-.42-.43-.2-.65.37.09Zm.54-.11-.37-.46-.17-.68.37.11Zm.54-.06-.34-.48-.06-.71.34.17Z" transform="translate(-4.51 -14.6)" fill="gray" fillRule="evenodd"/>
                            <polygon points="407.55 459.95 407.89 459.78 408.18 459.92 408.49 459.7 408.77 459.81 409.05 459.58 409.39 459.67 409.68 459.38 409.96 459.44 410.16 459.13 410.5 459.16 410.67 458.85 411.01 458.82 411.15 458.48 411.49 458.45 411.63 458.08 411.94 458 412 457.66 412.31 457.51 412.37 457.17 412.65 457 412.65 456.64 412.94 456.47 412.88 456.1 413.16 455.87 413.08 455.53 413.33 455.25 413.19 454.96 413.42 454.68 413.28 454.34 413.45 454.06 413.28 453.8 413.42 453.46 413.19 453.18 413.33 452.87 413.08 452.61 413.16 452.24 412.88 452.04 412.94 451.68 412.65 451.48 412.65 451.14 412.37 450.97 412.31 450.6 412 450.46 411.94 450.12 411.63 450.03 411.49 449.69 411.15 449.63 411.01 449.29 410.67 449.29 410.5 448.98 410.16 448.98 409.96 448.7 409.68 448.73 409.39 448.47 409.05 448.56 408.77 448.3 408.49 448.42 408.18 448.22 407.89 448.36 407.55 448.19 407.24 448.36 406.96 448.22 406.64 448.42 406.33 448.3 406.08 448.56 405.74 448.47 405.45 448.73 405.17 448.7 404.97 448.98 404.63 448.98 404.46 449.29 404.09 449.29 403.98 449.63 403.64 449.69 403.5 450.03 403.19 450.12 403.13 450.46 402.79 450.6 402.76 450.97 402.48 451.14 402.48 451.48 402.19 451.68 402.25 452.04 401.97 452.24 402.05 452.61 401.77 452.87 401.94 453.18 401.71 453.46 401.85 453.8 401.68 454.06 401.85 454.34 401.71 454.68 401.94 454.96 401.77 455.25 402.05 455.53 401.97 455.87 402.25 456.1 402.19 456.47 402.48 456.64 402.48 457 402.76 457.17 402.79 457.51 403.13 457.66 403.19 458 403.5 458.08 403.64 458.45 403.98 458.48 404.09 458.82 404.46 458.85 404.63 459.16 404.97 459.13 405.17 459.44 405.45 459.38 405.74 459.67 406.08 459.58 406.33 459.81 406.64 459.7 406.96 459.92 407.24 459.78 407.55 459.95" fill="#333" stroke="#333" strokeMiterlimit="10" strokeWidth="0.51" fillRule="evenodd"/>
                            <path d="M412.07,467a1.72,1.72,0,1,0,1.72,1.7,1.71,1.71,0,0,0-1.72-1.7Z" transform="translate(-4.51 -14.6)" fill="#545454" fillRule="evenodd"/>
                            <path d="M412.07,467a1.72,1.72,0,1,0,1.72,1.7,1.71,1.71,0,0,0-1.72-1.7Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#2f2f30" strokeMiterlimit="10" strokeWidth="0.23"/>
                            <path d="M412.07,469.31a.64.64,0,1,0,0-1.28.64.64,0,0,0,0,1.28Z" transform="translate(-4.51 -14.6)" fill="#2f2f30" fillRule="evenodd"/>
                        </g>
                        <g>
                            <path d="M417.75,367.6a7.64,7.64,0,1,0-5.42,2.24,7.6,7.6,0,0,0,5.42-2.24Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#141414" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.67"/>
                            <path d="M417.75,367.6a7.64,7.64,0,1,0-5.42,2.24,7.6,7.6,0,0,0,5.42-2.24Z" transform="translate(-4.51 -14.6)" fill="#424242" fillRule="evenodd"/>
                            <path d="M412.62,357l-.29-.51v-.71l.34.2Zm.54.06-.23-.54.08-.71.32.23Zm.54.11-.18-.57.15-.68.28.26Zm.51.17-.12-.6.23-.65.25.29Zm.48.2,0-.57.28-.65.23.34Zm.48.28,0-.59.34-.6.2.34Zm.42.31.09-.56.42-.57.15.37Zm.43.37.14-.57.45-.51.12.37Zm.34.4.2-.54.54-.48.08.39Zm.34.45.25-.54.57-.39,0,.37Zm.25.46.32-.49.62-.36,0,.39Zm.23.51.37-.46.65-.28-.05.37Zm.17.51.4-.43.68-.2-.09.37Zm.12.53.45-.36.68-.17-.14.36Zm0,.54.48-.34.71,0-.17.34Zm0,.54.51-.28h.71l-.2.34Zm0,.54.53-.23.71.09-.25.31Zm-.12.51.57-.14.68.14-.26.28Zm-.17.54.57-.11.68.22-.31.26Zm-.23.48.6,0,.62.29-.31.22Zm-.25.48.57,0,.62.34-.34.2Zm-.34.43.59.08.57.43-.37.14Zm-.34.4.54.17.54.45-.37.11Zm-.43.36.57.2.45.54-.36.06Zm-.42.34.51.26.42.57-.39,0Zm-.48.26.51.31.34.62-.4,0Zm-.48.23.45.36.28.63-.39,0Zm-.51.17.39.39.23.68-.37-.08Zm-.54.11.36.45.15.68-.37-.14Zm-.54.06.31.48.08.71-.36-.17Zm-.54,0,.25.51v.7l-.31-.19Zm-.54-.06.2.54-.06.71-.31-.26Zm-.54-.11.17.56-.17.68-.28-.28Zm-.51-.17.09.56-.2.68-.26-.31Zm-.51-.23.06.59-.29.63-.22-.31Zm-.45-.26,0,.57-.37.62-.17-.34Zm-.46-.34-.08.6-.4.57-.17-.37Zm-.39-.34-.14.54-.49.54-.11-.37Zm-.37-.42-.2.57-.51.45-.08-.37ZM408,365l-.26.51-.56.43,0-.4Zm-.26-.48-.31.51-.62.34V365Zm-.22-.48-.37.45-.65.29.05-.4Zm-.17-.51-.4.4-.68.22.08-.37Zm-.12-.54-.45.37-.68.14.11-.37Zm-.05-.54-.49.31-.71.09.17-.37Zm0-.54-.51.26H406l.19-.34Zm.05-.54-.54.2-.71,0,.23-.32Zm.12-.53-.57.17-.68-.17.25-.29Zm.17-.51-.6.08-.65-.2.28-.25Zm.19-.51-.56.05-.65-.31.34-.2Zm.29-.46-.57,0-.62-.36.34-.17Zm.31-.45-.57-.09-.56-.39.36-.17Zm.37-.4-.57-.14-.51-.48.37-.12Zm.39-.37-.53-.2-.49-.51.4-.08Zm.46-.31-.54-.25-.4-.57.4,0Zm.45-.28-.48-.31-.34-.6h.37Zm.51-.2L410,357l-.29-.65.37.06Zm.51-.17-.42-.43-.2-.65.37.09Zm.54-.11-.37-.46L411,356l.37.12Zm.54-.06-.34-.48-.06-.71.34.17Z" transform="translate(-4.51 -14.6)" fill="gray" fillRule="evenodd"/>
                            <polygon points="407.82 353.48 408.16 353.31 408.44 353.45 408.76 353.23 409.04 353.34 409.32 353.12 409.66 353.2 409.95 352.92 410.23 352.97 410.43 352.66 410.77 352.69 410.94 352.38 411.28 352.35 411.42 352.01 411.76 351.98 411.9 351.61 412.21 351.53 412.27 351.19 412.58 351.05 412.64 350.7 412.92 350.54 412.92 350.17 413.21 350 413.15 349.63 413.43 349.4 413.35 349.06 413.6 348.78 413.46 348.49 413.69 348.21 413.55 347.87 413.72 347.59 413.55 347.33 413.69 346.99 413.46 346.71 413.6 346.4 413.35 346.14 413.43 345.77 413.15 345.57 413.21 345.21 412.92 345.01 412.92 344.67 412.64 344.5 412.58 344.13 412.27 343.99 412.21 343.65 411.9 343.56 411.76 343.22 411.42 343.17 411.28 342.82 410.94 342.82 410.77 342.51 410.43 342.51 410.23 342.23 409.95 342.26 409.66 342 409.32 342.09 409.04 341.83 408.76 341.95 408.44 341.75 408.16 341.89 407.82 341.72 407.51 341.89 407.23 341.75 406.91 341.95 406.6 341.83 406.35 342.09 406.01 342 405.72 342.26 405.44 342.23 405.24 342.51 404.9 342.51 404.73 342.82 404.36 342.82 404.25 343.17 403.91 343.22 403.77 343.56 403.45 343.65 403.4 343.99 403.06 344.13 403.03 344.5 402.75 344.67 402.75 345.01 402.46 345.21 402.52 345.57 402.24 345.77 402.32 346.14 402.04 346.4 402.21 346.71 401.98 346.99 402.12 347.33 401.95 347.59 402.12 347.87 401.98 348.21 402.21 348.49 402.04 348.78 402.32 349.06 402.24 349.4 402.52 349.63 402.46 350 402.75 350.17 402.75 350.54 403.03 350.7 403.06 351.05 403.4 351.19 403.45 351.53 403.77 351.61 403.91 351.98 404.25 352.01 404.36 352.35 404.73 352.38 404.9 352.69 405.24 352.66 405.44 352.97 405.72 352.92 406.01 353.2 406.35 353.12 406.6 353.34 406.91 353.23 407.23 353.45 407.51 353.31 407.82 353.48" fill="#333" stroke="#333" strokeMiterlimit="10" strokeWidth="0.51" fillRule="evenodd"/>
                            <path d="M412.33,360.49a1.72,1.72,0,1,0,1.73,1.7,1.7,1.7,0,0,0-1.73-1.7Z" transform="translate(-4.51 -14.6)" fill="#545454" fillRule="evenodd"/>
                            <path d="M412.33,360.49a1.72,1.72,0,1,0,1.73,1.7,1.7,1.7,0,0,0-1.73-1.7Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#2f2f30" strokeMiterlimit="10" strokeWidth="0.23"/>
                            <path d="M412.33,362.84a.64.64,0,1,0,0-1.28.64.64,0,0,0,0,1.28Z" transform="translate(-4.51 -14.6)" fill="#2f2f30" fillRule="evenodd"/>
                        </g>
                        <g>
                            <path d="M499.34,367.46a7.64,7.64,0,1,0-5.41,2.24,7.6,7.6,0,0,0,5.41-2.24Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#141414" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.67"/>
                            <path d="M499.34,367.46a7.64,7.64,0,1,0-5.41,2.24,7.6,7.6,0,0,0,5.41-2.24Z" transform="translate(-4.51 -14.6)" fill="#424242" fillRule="evenodd"/>
                            <path d="M494.21,356.89l-.28-.51v-.71l.34.2Zm.54.05-.23-.53.09-.71.31.22Zm.54.12-.17-.57.14-.68.29.26Zm.51.17-.11-.6.22-.65.26.28Zm.48.2,0-.57.29-.65.22.34Zm.48.28,0-.6.34-.59.2.34Zm.43.31.08-.57.43-.56.14.37Zm.42.37.15-.57.45-.51.11.37Zm.34.4.2-.54.54-.48.09.39Zm.35.45.25-.54.57-.4,0,.37Zm.25.45.31-.48.63-.37,0,.4Zm.23.51.37-.45.65-.28-.06.37Zm.17.51.39-.42.68-.2-.08.37Zm.11.54.45-.37.68-.17-.14.37Zm.06.54.48-.34.71-.06-.17.34Zm0,.54.51-.28h.71l-.2.34Zm-.06.54.54-.23.71.09-.26.31Zm-.11.51.56-.14.68.14-.25.28Zm-.17.54.56-.12.68.23-.31.26Zm-.23.48.6,0,.62.28-.31.23Zm-.25.48.56,0,.63.34-.34.2Zm-.35.43.6.08.57.43-.37.14Zm-.34.39.54.17.54.46-.37.11Zm-.42.37.57.2.45.54-.37.06Zm-.43.34.51.26.43.56-.4,0Zm-.48.26.51.31.34.62-.39,0Zm-.48.22.45.37.29.63-.4,0Zm-.51.17.4.4.22.68-.36-.08Zm-.54.12.37.45.14.68-.37-.14Zm-.54.05.31.49.09.7-.37-.17Zm-.54,0,.26.51v.71l-.31-.2Zm-.53-.05.19.54-.05.7-.31-.25Zm-.54-.12.17.57-.17.68-.29-.28Zm-.51-.17.08.57-.2.68-.25-.31Zm-.51-.22.05.59-.28.63-.23-.32Zm-.46-.26,0,.57-.37.62-.17-.34Zm-.45-.34-.09.6-.39.56-.17-.36Zm-.4-.34-.14.54-.48.54-.11-.37Zm-.37-.42-.19.56-.51.46-.09-.37Zm-.31-.43-.25.51-.57.43,0-.4Zm-.25-.48-.31.51-.63.34v-.4Zm-.23-.48-.37.45-.65.28.06-.39Zm-.17-.51-.4.39-.68.23.09-.37Zm-.11-.54-.46.37-.68.14.12-.37Zm-.06-.54-.48.31-.71.09.17-.37Zm0-.54-.51.26h-.71l.2-.34Zm.06-.54-.54.2-.71-.06.23-.31Zm.11-.54-.57.17-.68-.17.26-.28Zm.17-.51-.59.09-.66-.2.29-.25Zm.2-.51-.57.06-.65-.31.34-.2Zm.28-.45-.56,0-.63-.37.34-.17Zm.31-.45-.56-.09-.57-.4.37-.17Zm.37-.4-.56-.14-.51-.48.36-.12Zm.4-.37-.54-.2-.48-.51.4-.08Zm.45-.31-.54-.26-.39-.56.39,0Zm.46-.28-.48-.32-.35-.59h.37Zm.51-.2-.46-.37-.28-.65.37.05Zm.51-.17-.43-.43L492,356l.37.09Zm.54-.12-.37-.45-.17-.68.37.11Zm.53-.05-.34-.48-.05-.71.34.17Z" transform="translate(-4.51 -14.6)" fill="gray" fillRule="evenodd"/>
                            <polygon points="489.42 353.34 489.76 353.17 490.04 353.31 490.35 353.09 490.63 353.2 490.92 352.97 491.26 353.06 491.54 352.77 491.82 352.83 492.02 352.52 492.36 352.55 492.53 352.24 492.87 352.21 493.02 351.87 493.36 351.84 493.5 351.47 493.81 351.38 493.87 351.05 494.18 350.9 494.24 350.56 494.52 350.39 494.52 350.02 494.8 349.86 494.75 349.49 495.03 349.26 494.94 348.92 495.2 348.64 495.06 348.35 495.28 348.07 495.14 347.73 495.31 347.44 495.14 347.19 495.28 346.85 495.06 346.57 495.2 346.25 494.94 346 495.03 345.63 494.75 345.43 494.8 345.06 494.52 344.87 494.52 344.53 494.24 344.36 494.18 343.99 493.87 343.85 493.81 343.5 493.5 343.42 493.36 343.08 493.02 343.02 492.87 342.68 492.53 342.68 492.36 342.37 492.02 342.37 491.82 342.09 491.54 342.12 491.26 341.86 490.92 341.95 490.63 341.69 490.35 341.8 490.04 341.61 489.76 341.75 489.42 341.58 489.1 341.75 488.82 341.61 488.51 341.8 488.2 341.69 487.94 341.95 487.6 341.86 487.32 342.12 487.04 342.09 486.84 342.37 486.5 342.37 486.33 342.68 485.96 342.68 485.84 343.02 485.5 343.08 485.36 343.42 485.05 343.5 484.99 343.85 484.65 343.99 484.63 344.36 484.34 344.53 484.34 344.87 484.06 345.06 484.12 345.43 483.83 345.63 483.92 346 483.63 346.25 483.8 346.57 483.58 346.85 483.72 347.19 483.55 347.44 483.72 347.73 483.58 348.07 483.8 348.35 483.63 348.64 483.92 348.92 483.83 349.26 484.12 349.49 484.06 349.86 484.34 350.02 484.34 350.39 484.63 350.56 484.65 350.9 484.99 351.05 485.05 351.38 485.36 351.47 485.5 351.84 485.84 351.87 485.96 352.21 486.33 352.24 486.5 352.55 486.84 352.52 487.04 352.83 487.32 352.77 487.6 353.06 487.94 352.97 488.2 353.2 488.51 353.09 488.82 353.31 489.1 353.17 489.42 353.34" fill="#333" stroke="#333" strokeMiterlimit="10" strokeWidth="0.51" fillRule="evenodd"/>
                            <path d="M493.93,360.35a1.72,1.72,0,0,0,0,3.43,1.72,1.72,0,1,0,0-3.43Z" transform="translate(-4.51 -14.6)" fill="#545454" fillRule="evenodd"/>
                            <path d="M493.93,360.35a1.72,1.72,0,0,0,0,3.43,1.72,1.72,0,1,0,0-3.43Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#2f2f30" strokeMiterlimit="10" strokeWidth="0.23"/>
                            <path d="M493.93,362.7a.64.64,0,1,0-.62-.65.64.64,0,0,0,.62.65Z" transform="translate(-4.51 -14.6)" fill="#2f2f30" fillRule="evenodd"/>
                        </g>
                        <g>
                            <path d="M517.8,441.5a7.64,7.64,0,1,0-5.42,2.24,7.6,7.6,0,0,0,5.42-2.24Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#141414" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.67"/>
                            <path d="M517.8,441.5a7.64,7.64,0,1,0-5.42,2.24,7.6,7.6,0,0,0,5.42-2.24Z" transform="translate(-4.51 -14.6)" fill="#424242" fillRule="evenodd"/>
                            <path d="M512.67,430.93l-.29-.51v-.71l.34.2Zm.54.06-.23-.54.08-.71.32.22Zm.53.11-.17-.57.15-.68.28.26Zm.51.17-.11-.6.23-.65.25.28Zm.49.2,0-.57.28-.65.23.34Zm.48.28,0-.59.34-.6.19.34Zm.42.31.09-.56.42-.57.15.37Zm.43.37.14-.57.45-.51.12.37Zm.34.4.2-.54.54-.48.08.39Zm.34.45.25-.54.57-.39,0,.36Zm.25.45.32-.48.62-.37,0,.4Zm.23.52.37-.46.65-.28-.06.37Zm.17.51.4-.43.68-.2-.09.37Zm.11.53.46-.36.68-.17-.14.36Zm.06.54.48-.34.71-.05-.17.34Zm0,.54.51-.28h.71l-.2.34Zm-.06.54.54-.23.71.09-.25.31Zm-.11.51.57-.14.68.14-.26.28Zm-.17.54.57-.11.68.22-.31.26Zm-.23.48.6,0,.62.29-.31.22Zm-.25.48.57,0,.62.34-.34.2Zm-.34.43.59.08.57.43-.37.14Zm-.34.39.54.17.54.46-.37.11Zm-.43.37.57.2.45.54-.36.06Zm-.42.34.51.26.42.56-.39,0Zm-.48.26.51.31.34.62-.4,0Zm-.49.22.46.37.28.63-.4,0Zm-.51.17.4.4.23.68-.37-.08Zm-.53.12.36.45.15.68-.37-.14Zm-.54,0,.31.49.08.71-.36-.17Zm-.54,0,.25.52v.7l-.31-.19Zm-.54,0,.2.54-.06.71-.31-.26Zm-.54-.12.17.57-.17.68-.28-.28Zm-.51-.17.09.57-.2.68-.26-.31Zm-.51-.22.06.59-.29.63-.22-.31Zm-.45-.26,0,.57-.37.62-.17-.34Zm-.46-.34-.08.6-.4.56-.17-.36Zm-.39-.34-.15.54-.48.54-.11-.37Zm-.37-.42-.2.56-.51.46-.09-.37Zm-.31-.43-.26.51-.57.43,0-.4Zm-.26-.48-.31.51-.62.34v-.4Zm-.23-.48-.36.45-.66.29.06-.4Zm-.17-.51-.39.4-.68.22.08-.37Zm-.11-.54-.45.37-.68.14.11-.37Zm-.06-.54-.48.31-.71.09.17-.37Zm0-.54-.51.26H506l.19-.34Zm.06-.54-.54.2-.71-.05.23-.32Zm.11-.53-.56.17-.68-.17.25-.29Zm.17-.51-.59.08-.65-.2.28-.25Zm.2-.52-.56.06-.66-.31.34-.2Zm.29-.45-.57,0-.62-.37.34-.17Zm.31-.45-.57-.09-.57-.39.37-.17Zm.37-.4-.57-.14-.51-.48.37-.12Zm.39-.37-.54-.2-.48-.51.4-.08Zm.46-.31-.54-.25-.4-.57.4,0Zm.45-.28-.48-.31-.34-.6h.37Zm.51-.2-.45-.37-.29-.65.37.05Zm.51-.17-.42-.43-.2-.65.37.09Zm.54-.11-.37-.46-.17-.68.37.11Zm.54-.06-.34-.48-.06-.71.34.17Z" transform="translate(-4.51 -14.6)" fill="gray" fillRule="evenodd"/>
                            <polygon points="507.87 427.38 508.21 427.21 508.49 427.35 508.81 427.13 509.09 427.24 509.37 427.01 509.71 427.1 510 426.81 510.28 426.87 510.48 426.56 510.82 426.59 510.99 426.28 511.33 426.25 511.47 425.91 511.81 425.88 511.95 425.51 512.26 425.43 512.32 425.09 512.63 424.94 512.69 424.6 512.97 424.43 512.97 424.07 513.25 423.9 513.2 423.53 513.48 423.3 513.4 422.96 513.65 422.68 513.51 422.39 513.74 422.11 513.6 421.77 513.76 421.49 513.6 421.23 513.74 420.89 513.51 420.61 513.65 420.3 513.4 420.04 513.48 419.67 513.2 419.47 513.25 419.11 512.97 418.91 512.97 418.57 512.69 418.4 512.63 418.03 512.32 417.89 512.26 417.55 511.95 417.46 511.81 417.12 511.47 417.06 511.33 416.72 510.99 416.72 510.82 416.41 510.48 416.41 510.28 416.13 510 416.16 509.71 415.9 509.37 415.99 509.09 415.73 508.81 415.85 508.49 415.65 508.21 415.79 507.87 415.62 507.56 415.79 507.27 415.65 506.96 415.85 506.65 415.73 506.39 415.99 506.06 415.9 505.77 416.16 505.49 416.13 505.29 416.41 504.95 416.41 504.78 416.72 504.41 416.72 504.3 417.06 503.96 417.12 503.82 417.46 503.5 417.55 503.45 417.89 503.11 418.03 503.08 418.4 502.8 418.57 502.8 418.91 502.51 419.11 502.57 419.47 502.29 419.67 502.37 420.04 502.09 420.3 502.26 420.61 502.03 420.89 502.17 421.23 502 421.49 502.17 421.77 502.03 422.11 502.26 422.39 502.09 422.68 502.37 422.96 502.29 423.3 502.57 423.53 502.51 423.9 502.8 424.07 502.8 424.43 503.08 424.6 503.11 424.94 503.45 425.09 503.5 425.43 503.82 425.51 503.96 425.88 504.3 425.91 504.41 426.25 504.78 426.28 504.95 426.59 505.29 426.56 505.49 426.87 505.77 426.81 506.06 427.1 506.39 427.01 506.65 427.24 506.96 427.13 507.27 427.35 507.56 427.21 507.87 427.38" fill="#333" stroke="#333" strokeMiterlimit="10" strokeWidth="0.51" fillRule="evenodd"/>
                            <path d="M512.38,434.39a1.72,1.72,0,1,0,1.73,1.7,1.7,1.7,0,0,0-1.73-1.7Z" transform="translate(-4.51 -14.6)" fill="#545454" fillRule="evenodd"/>
                            <path d="M512.38,434.39a1.72,1.72,0,1,0,1.73,1.7,1.7,1.7,0,0,0-1.73-1.7Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#2f2f30" strokeMiterlimit="10" strokeWidth="0.23"/>
                            <path d="M512.38,436.74a.64.64,0,1,0,0-1.28.64.64,0,0,0,0,1.28Z" transform="translate(-4.51 -14.6)" fill="#2f2f30" fillRule="evenodd"/>
                        </g>
                        <g>
                            <path d="M557.11,441.6a7.64,7.64,0,1,0-5.41,2.24,7.6,7.6,0,0,0,5.41-2.24Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#141414" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.67"/>
                            <path d="M557.11,441.6a7.64,7.64,0,1,0-5.41,2.24,7.6,7.6,0,0,0,5.41-2.24Z" transform="translate(-4.51 -14.6)" fill="#424242" fillRule="evenodd"/>
                            <path d="M552,431l-.28-.51v-.71l.34.2Zm.54.05-.22-.53.08-.71.31.22Zm.54.12-.17-.57L553,430l.29.26Zm.51.17-.11-.6.22-.65.26.28Zm.48.2,0-.57.29-.65.22.34Zm.48.28,0-.6.34-.59.2.34Zm.43.31.08-.57.43-.56.14.37Zm.42.37.15-.57.45-.51.11.37Zm.34.4.2-.54.54-.48.09.39Zm.35.45.25-.54.57-.39,0,.36Zm.25.45.31-.48.63-.37,0,.4Zm.23.51.37-.45.65-.28-.06.37Zm.17.51.39-.42.68-.2-.08.37Zm.11.54.45-.37.68-.17-.14.37Zm.06.54.48-.34.71-.06-.17.34Zm0,.54.51-.28h.71l-.2.34Zm-.06.54.54-.23.71.09-.26.31Zm-.11.51.56-.14.68.14-.25.28Zm-.17.54.56-.12.68.23-.31.26Zm-.23.48.6,0,.62.28-.31.23Zm-.25.48.56,0,.63.34-.34.2Zm-.35.43.6.08.57.43-.37.14Zm-.34.39.54.17.54.46-.37.11Zm-.42.37.57.2.45.54-.37.06Zm-.43.34.51.26.43.56-.4,0Zm-.48.26.51.31.34.62-.39,0Zm-.48.22.45.37.29.63-.4,0Zm-.51.17.4.4.22.68-.36-.08Zm-.54.12.37.45.14.68-.37-.14Zm-.54.05.32.49.08.7-.37-.17Zm-.54,0,.26.51v.71l-.31-.2Zm-.53-.05.19.54-.05.7-.31-.25Zm-.54-.12.17.57-.17.68-.29-.28Zm-.51-.17.08.57-.2.68-.25-.31Zm-.51-.22,0,.59-.28.63-.23-.32Zm-.46-.26,0,.57-.37.62-.17-.34Zm-.45-.34-.09.6-.39.56-.17-.36Zm-.4-.34-.14.54-.48.54-.11-.37Zm-.37-.42-.19.56-.51.46-.09-.37Zm-.31-.43-.25.51-.57.43,0-.4Zm-.25-.48-.31.51-.63.34V439Zm-.23-.48-.37.45-.65.28.06-.39Zm-.17-.51-.4.39-.68.23.09-.37Zm-.11-.54-.46.37-.68.14.12-.37Zm-.06-.54-.48.31-.71.09.17-.37Zm0-.54-.51.26h-.71l.2-.34Zm.06-.54-.54.2-.71-.06.23-.31Zm.11-.54-.57.17-.68-.17.26-.28Zm.17-.51-.59.09-.66-.2.29-.25Zm.2-.51-.57.06-.65-.31.34-.2Zm.28-.45-.56,0-.63-.37.34-.17Zm.31-.45-.56-.09-.57-.39.37-.18Zm.37-.4-.56-.14-.51-.48.36-.12Zm.4-.37-.54-.2-.48-.51.4-.08Zm.45-.31-.54-.26L548,431l.39,0Zm.46-.28-.48-.32-.35-.59h.37Zm.51-.2-.46-.37-.28-.65.37,0Zm.51-.17-.43-.43-.2-.65.37.09Zm.54-.12-.37-.45-.17-.68.37.11Zm.53-.05-.34-.48-.05-.71.34.17Z" transform="translate(-4.51 -14.6)" fill="gray" fillRule="evenodd"/>
                            <polygon points="547.19 427.48 547.53 427.31 547.81 427.45 548.12 427.23 548.4 427.34 548.69 427.11 549.03 427.2 549.31 426.92 549.6 426.97 549.79 426.66 550.13 426.69 550.3 426.38 550.64 426.35 550.79 426.01 551.13 425.98 551.27 425.61 551.58 425.53 551.64 425.19 551.95 425.04 552 424.7 552.29 424.53 552.29 424.17 552.57 424 552.51 423.63 552.8 423.4 552.71 423.06 552.97 422.78 552.83 422.49 553.05 422.21 552.91 421.87 553.08 421.58 552.91 421.33 553.05 420.99 552.83 420.71 552.97 420.39 552.71 420.14 552.8 419.77 552.51 419.57 552.57 419.2 552.29 419.01 552.29 418.67 552 418.5 551.95 418.13 551.64 417.99 551.58 417.64 551.27 417.56 551.13 417.22 550.79 417.16 550.64 416.82 550.3 416.82 550.13 416.51 549.79 416.51 549.6 416.23 549.31 416.26 549.03 416 548.69 416.09 548.4 415.83 548.12 415.94 547.81 415.75 547.53 415.89 547.19 415.72 546.87 415.89 546.59 415.75 546.28 415.94 545.97 415.83 545.71 416.09 545.37 416 545.09 416.26 544.8 416.23 544.61 416.51 544.27 416.51 544.1 416.82 543.73 416.82 543.61 417.16 543.27 417.22 543.13 417.56 542.82 417.64 542.76 417.99 542.42 418.13 542.39 418.5 542.11 418.67 542.11 419.01 541.83 419.2 541.88 419.57 541.6 419.77 541.69 420.14 541.4 420.39 541.57 420.71 541.35 420.99 541.49 421.33 541.32 421.58 541.49 421.87 541.35 422.21 541.57 422.49 541.4 422.78 541.69 423.06 541.6 423.4 541.88 423.63 541.83 424 542.11 424.17 542.11 424.53 542.39 424.7 542.42 425.04 542.76 425.19 542.82 425.53 543.13 425.61 543.27 425.98 543.61 426.01 543.73 426.35 544.1 426.38 544.27 426.69 544.61 426.66 544.8 426.97 545.09 426.92 545.37 427.2 545.71 427.11 545.97 427.34 546.28 427.23 546.59 427.45 546.87 427.31 547.19 427.48" fill="#333" stroke="#333" strokeMiterlimit="10" strokeWidth="0.51" fillRule="evenodd"/>
                            <path d="M551.7,434.49a1.72,1.72,0,0,0,0,3.43,1.72,1.72,0,1,0,0-3.43Z" transform="translate(-4.51 -14.6)" fill="#545454" fillRule="evenodd"/>
                            <path d="M551.7,434.49a1.72,1.72,0,0,0,0,3.43,1.72,1.72,0,1,0,0-3.43Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#2f2f30" strokeMiterlimit="10" strokeWidth="0.23"/>
                            <path d="M551.7,436.84a.64.64,0,1,0-.62-.65.64.64,0,0,0,.62.65Z" transform="translate(-4.51 -14.6)" fill="#2f2f30" fillRule="evenodd"/>
                        </g>
                        <g>
                            <path d="M573.78,381.58a7.64,7.64,0,1,0-5.41,2.24,7.61,7.61,0,0,0,5.41-2.24Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#141414" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.67"/>
                            <path d="M573.78,381.58a7.64,7.64,0,1,0-5.41,2.24,7.61,7.61,0,0,0,5.41-2.24Z" transform="translate(-4.51 -14.6)" fill="#424242" fillRule="evenodd"/>
                            <path d="M568.65,371l-.28-.51v-.7l.34.19Zm.54.06-.23-.54.09-.71.31.23Zm.54.11-.17-.56.14-.68.28.25Zm.51.17-.12-.59.23-.65.26.28Zm.48.2,0-.56.29-.66.22.34Zm.48.29,0-.6.34-.59.2.34Zm.43.31.08-.57.43-.57.14.37Zm.42.37.14-.57.46-.51.11.37Zm.34.39.2-.54.54-.48.08.4Zm.34.46.26-.54.56-.4,0,.37Zm.26.45.31-.48.62-.37,0,.4Zm.22.51.37-.45.66-.29-.06.37Zm.17.51.4-.42.68-.2-.08.37Zm.12.54L574,375l.68-.17-.14.37Zm0,.54.49-.34.71-.06-.17.34Zm0,.54.52-.29h.7l-.19.34Zm0,.54.54-.23.71.08-.26.32Zm-.12.51.57-.15.68.15-.25.28Zm-.17.53.57-.11.68.23-.31.25Zm-.22.49.59,0,.63.28-.31.23Zm-.26.48.57,0,.62.34-.34.19Zm-.34.42.6.09.56.42-.36.14Zm-.34.4.54.17.54.45-.37.12Zm-.42.37.56.2.46.54-.37.05Zm-.43.34.51.25.43.57-.4,0Zm-.48.25.51.32.34.62-.4,0Zm-.48.23.45.37.29.62-.4,0Zm-.51.17.39.4.23.68-.37-.09Zm-.54.11.37.46.14.68-.37-.14Zm-.54.06.31.48.09.71-.37-.17Zm-.54,0,.26.51v.71l-.31-.2Zm-.54-.06.2.54,0,.71-.32-.25Zm-.53-.11.17.57-.17.68-.29-.29Zm-.52-.17.09.57-.2.68-.25-.31Zm-.51-.23.06.6-.28.62-.23-.31Zm-.45-.25,0,.57-.37.62-.17-.34Zm-.45-.34-.09.59-.39.57-.17-.37Zm-.4-.34-.14.54-.48.54-.12-.37Zm-.37-.43-.2.57-.51.45-.08-.37ZM564,379l-.25.51-.57.42,0-.39Zm-.25-.48-.32.51-.62.34V379Zm-.23-.49-.37.46-.65.28.05-.4Zm-.17-.51-.4.4-.68.23.09-.37Zm-.11-.53-.46.36-.68.15.11-.37Zm-.06-.54-.48.31-.71.08.17-.37Zm0-.54-.51.25H562l.2-.34Zm.06-.54-.54.2-.71-.06.22-.31Zm.11-.54-.57.17-.68-.17.26-.28Zm.17-.51-.6.09-.65-.2.28-.26Zm.2-.51-.57.06-.65-.31.34-.2Zm.28-.45-.57,0-.62-.37.34-.17Zm.31-.46-.56-.08-.57-.4.37-.17Zm.37-.39-.57-.15-.51-.48.37-.11Zm.4-.37-.54-.2-.48-.51.39-.09Zm.45-.31-.54-.26-.39-.57.39,0Zm.45-.29-.48-.31-.34-.59h.37Zm.51-.2-.45-.36-.28-.66.37.06Zm.52-.17-.43-.42-.2-.65.37.08Zm.53-.11-.36-.45-.17-.68.36.11Zm.54-.06-.34-.48,0-.71.34.17Z" transform="translate(-4.51 -14.6)" fill="gray" fillRule="evenodd"/>
                            <polygon points="563.85 367.46 564.19 367.29 564.48 367.43 564.79 367.2 565.07 367.32 565.36 367.09 565.7 367.17 565.98 366.89 566.26 366.95 566.46 366.64 566.8 366.66 566.97 366.35 567.31 366.32 567.45 365.98 567.79 365.96 567.93 365.59 568.25 365.5 568.3 365.16 568.62 365.02 568.67 364.68 568.96 364.51 568.96 364.14 569.24 363.97 569.18 363.6 569.47 363.38 569.38 363.04 569.64 362.75 569.5 362.47 569.72 362.19 569.58 361.85 569.75 361.56 569.58 361.31 569.72 360.97 569.5 360.68 569.64 360.37 569.38 360.12 569.47 359.75 569.18 359.55 569.24 359.18 568.96 358.98 568.96 358.64 568.67 358.47 568.62 358.1 568.3 357.96 568.25 357.62 567.93 357.54 567.79 357.2 567.45 357.14 567.31 356.8 566.97 356.8 566.8 356.49 566.46 356.49 566.26 356.2 565.98 356.23 565.7 355.98 565.36 356.06 565.07 355.81 564.79 355.92 564.48 355.72 564.19 355.86 563.85 355.69 563.54 355.86 563.26 355.72 562.95 355.92 562.63 355.81 562.38 356.06 562.04 355.98 561.76 356.23 561.47 356.2 561.27 356.49 560.93 356.49 560.76 356.8 560.39 356.8 560.28 357.14 559.94 357.2 559.8 357.54 559.49 357.62 559.43 357.96 559.09 358.1 559.06 358.47 558.78 358.64 558.78 358.98 558.5 359.18 558.55 359.55 558.27 359.75 558.35 360.12 558.07 360.37 558.24 360.68 558.01 360.97 558.16 361.31 557.99 361.56 558.16 361.85 558.01 362.19 558.24 362.47 558.07 362.75 558.35 363.04 558.27 363.38 558.55 363.6 558.5 363.97 558.78 364.14 558.78 364.51 559.06 364.68 559.09 365.02 559.43 365.16 559.49 365.5 559.8 365.59 559.94 365.96 560.28 365.98 560.39 366.32 560.76 366.35 560.93 366.66 561.27 366.64 561.47 366.95 561.76 366.89 562.04 367.17 562.38 367.09 562.63 367.32 562.95 367.2 563.26 367.43 563.54 367.29 563.85 367.46" fill="#333" stroke="#333" strokeMiterlimit="10" strokeWidth="0.51" fillRule="evenodd"/>
                            <path d="M568.37,374.46a1.72,1.72,0,1,0,1.73,1.7,1.7,1.7,0,0,0-1.73-1.7Z" transform="translate(-4.51 -14.6)" fill="#545454" fillRule="evenodd"/>
                            <path d="M568.37,374.46a1.72,1.72,0,1,0,1.73,1.7,1.7,1.7,0,0,0-1.73-1.7Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#2f2f30" strokeMiterlimit="10" strokeWidth="0.23"/>
                            <path d="M568.37,376.82a.64.64,0,0,0,.65-.66.64.64,0,0,0-1.28,0,.65.65,0,0,0,.63.66Z" transform="translate(-4.51 -14.6)" fill="#2f2f30" fillRule="evenodd"/>
                        </g>
                        <g>
                            <path d="M647.85,468.13a7.64,7.64,0,1,0-5.41,2.24,7.58,7.58,0,0,0,5.41-2.24Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#141414" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.67"/>
                            <path d="M647.85,468.13a7.64,7.64,0,1,0-5.41,2.24,7.58,7.58,0,0,0,5.41-2.24Z" transform="translate(-4.51 -14.6)" fill="#424242" fillRule="evenodd"/>
                            <path d="M642.72,457.56l-.28-.51v-.71l.34.2Zm.54.06-.23-.54.09-.71.31.23Zm.54.11-.17-.57.14-.68.28.26Zm.51.17-.12-.6.23-.65.26.29Zm.48.2,0-.57.28-.65.23.34Zm.48.28,0-.59.34-.6.2.34Zm.43.31.08-.56.43-.57.14.37Zm.42.37.14-.56.46-.51.11.36Zm.34.4.2-.54.54-.48.08.4Zm.34.45.26-.54.56-.39,0,.37Zm.26.46.31-.49.62-.36,0,.39Zm.22.51.37-.46.65-.28,0,.37Zm.17.51.4-.43.68-.2-.08.37Zm.12.54.45-.37.68-.17-.14.37Zm0,.53.49-.34.7-.05-.17.34Zm0,.54.51-.28h.71l-.2.34Zm0,.54.54-.23.7.09-.25.31Zm-.12.51.57-.14.68.14-.25.28Zm-.17.54.57-.11.68.22-.31.26Zm-.22.48.59,0,.63.29-.32.22Zm-.26.48.57,0,.62.34-.34.2Zm-.34.43.6.08.56.43-.36.14Zm-.34.4.54.17.54.45-.37.11Zm-.42.36.56.2.46.54-.37.06Zm-.43.34.51.26.43.57-.4,0Zm-.48.26.51.31.34.62-.4,0Zm-.48.23.45.36.28.63-.39,0Zm-.51.17.39.39.23.68-.37-.08Zm-.54.11.37.45.14.68-.37-.14Zm-.54.06.31.48.09.71-.37-.17Zm-.54,0,.26.51v.71l-.32-.2Zm-.54-.06.2.54-.06.71-.31-.26Zm-.54-.11.17.56-.17.68-.28-.28Zm-.51-.17.09.56-.2.68-.25-.31Zm-.51-.23.06.59-.28.63-.23-.31Zm-.45-.26,0,.57-.37.62-.17-.34Zm-.45-.34-.09.6-.39.57-.18-.37Zm-.4-.34-.14.54-.48.54-.12-.37Zm-.37-.42-.2.57-.51.45-.08-.37Zm-.31-.43-.26.51-.56.43,0-.4Zm-.26-.48-.31.51-.62.34v-.39Zm-.22-.48-.37.45-.65.29,0-.4Zm-.17-.51-.4.4-.68.22.09-.37Zm-.12-.54-.45.37-.68.14.11-.37Zm-.05-.54-.48.31-.71.09.17-.37Zm0-.54-.51.26h-.71l.2-.34Zm.05-.53-.53.19-.71-.05.22-.31Zm.12-.54-.57.17-.68-.17.26-.29Zm.17-.51-.6.08-.65-.2.28-.25Zm.2-.51-.57.05-.65-.31.34-.2Zm.28-.46-.57,0-.62-.36.34-.17Zm.31-.45-.57-.09-.56-.39.37-.17Zm.37-.4-.57-.14-.51-.48.37-.11Zm.4-.37-.54-.19-.48-.51.39-.09Zm.45-.31-.54-.25-.39-.57.39,0Zm.45-.28-.48-.31-.34-.6h.37Zm.51-.2-.45-.37-.28-.65.37.06Zm.51-.17-.42-.43-.2-.65.37.09Zm.54-.11-.37-.46-.17-.68.37.12Zm.54-.06-.34-.48-.06-.71.34.17Z" transform="translate(-4.51 -14.6)" fill="gray" fillRule="evenodd"/>
                            <polygon points="637.92 454.01 638.26 453.84 638.55 453.99 638.86 453.76 639.14 453.87 639.42 453.64 639.76 453.73 640.05 453.45 640.33 453.5 640.53 453.19 640.87 453.22 641.04 452.91 641.38 452.88 641.52 452.54 641.86 452.51 642 452.14 642.32 452.06 642.37 451.72 642.68 451.58 642.74 451.24 643.02 451.07 643.02 450.7 643.31 450.53 643.25 450.16 643.53 449.93 643.45 449.59 643.71 449.31 643.56 449.02 643.79 448.74 643.65 448.4 643.82 448.12 643.65 447.86 643.79 447.52 643.56 447.24 643.71 446.93 643.45 446.67 643.53 446.3 643.25 446.11 643.31 445.74 643.02 445.54 643.02 445.2 642.74 445.03 642.68 444.66 642.37 444.52 642.32 444.18 642 444.09 641.86 443.75 641.52 443.7 641.38 443.36 641.04 443.36 640.87 443.04 640.53 443.04 640.33 442.76 640.05 442.79 639.76 442.53 639.42 442.62 639.14 442.36 638.86 442.48 638.55 442.28 638.26 442.42 637.92 442.25 637.61 442.42 637.33 442.28 637.02 442.48 636.7 442.36 636.45 442.62 636.11 442.53 635.83 442.79 635.54 442.76 635.34 443.04 635 443.04 634.83 443.36 634.47 443.36 634.35 443.7 634.01 443.75 633.87 444.09 633.56 444.18 633.5 444.52 633.16 444.66 633.13 445.03 632.85 445.2 632.85 445.54 632.57 445.74 632.62 446.11 632.34 446.3 632.42 446.67 632.14 446.93 632.31 447.24 632.08 447.52 632.23 447.86 632.05 448.12 632.23 448.4 632.08 448.74 632.31 449.02 632.14 449.31 632.42 449.59 632.34 449.93 632.62 450.16 632.57 450.53 632.85 450.7 632.85 451.07 633.13 451.24 633.16 451.58 633.5 451.72 633.56 452.06 633.87 452.14 634.01 452.51 634.35 452.54 634.47 452.88 634.83 452.91 635 453.22 635.34 453.19 635.54 453.5 635.83 453.45 636.11 453.73 636.45 453.64 636.7 453.87 637.02 453.76 637.33 453.99 637.61 453.84 637.92 454.01" fill="#333" stroke="#333" strokeMiterlimit="10" strokeWidth="0.51" fillRule="evenodd"/>
                            <path d="M642.44,461a1.72,1.72,0,0,0,0,3.43,1.72,1.72,0,1,0,0-3.43Z" transform="translate(-4.51 -14.6)" fill="#545454" fillRule="evenodd"/>
                            <path d="M642.44,461a1.72,1.72,0,0,0,0,3.43,1.72,1.72,0,1,0,0-3.43Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#2f2f30" strokeMiterlimit="10" strokeWidth="0.23"/>
                            <path d="M642.44,463.37a.64.64,0,1,0-.63-.65.64.64,0,0,0,.63.65Z" transform="translate(-4.51 -14.6)" fill="#2f2f30" fillRule="evenodd"/>
                        </g>
                        <g>
                            <path d="M647.74,381.85a7.64,7.64,0,1,0-5.42,2.24,7.61,7.61,0,0,0,5.42-2.24Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#141414" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.67"/>
                            <path d="M647.74,381.85a7.64,7.64,0,1,0-5.42,2.24,7.61,7.61,0,0,0,5.42-2.24Z" transform="translate(-4.51 -14.6)" fill="#424242" fillRule="evenodd"/>
                            <path d="M642.61,371.27l-.29-.51v-.71l.34.2Zm.54.06-.23-.54.08-.71.32.23Zm.53.11-.17-.56.15-.68.28.25Zm.51.17-.11-.59.23-.65.25.28Zm.49.2,0-.56.28-.66.23.34Zm.48.29,0-.6.34-.6.19.35Zm.42.31.09-.57.42-.57.15.37Zm.43.37.14-.57.45-.51.12.37Zm.34.39.2-.54.54-.48.08.4Zm.34.46.25-.54.57-.4,0,.37Zm.25.45.32-.48.62-.37,0,.4Zm.23.51.37-.45.65-.29-.06.37Zm.17.51.4-.43.68-.19-.09.37Zm.11.54.46-.37.68-.17-.14.37Zm.06.54.48-.34.71-.06-.17.34Zm0,.54.51-.29h.71l-.2.34Zm-.06.53L648,377l.71.08-.25.31Zm-.11.51.57-.14.68.14-.26.29Zm-.17.54.57-.11.68.23-.31.25Zm-.23.49.6,0,.62.28-.31.23Zm-.25.48.57,0,.62.34-.34.19Zm-.34.42.59.09.57.42-.37.14Zm-.34.4.54.17.54.45-.37.12Zm-.43.37.57.2.45.53-.36.06Zm-.42.34.51.25.42.57-.39,0Zm-.48.25.51.31.34.63-.4,0Zm-.49.23.46.37.28.62-.4,0Zm-.51.17.4.4.23.68-.37-.09Zm-.53.11.36.46.15.68-.37-.14Zm-.54.06.31.48.08.71-.36-.17Zm-.54,0,.25.51v.71l-.31-.2Zm-.54-.06.2.54-.06.71-.31-.25Zm-.54-.11.17.57-.17.68-.28-.29Zm-.51-.17.09.57-.2.68-.26-.31Zm-.51-.23.06.6-.29.62-.22-.31Zm-.45-.25,0,.56-.37.63-.17-.34Zm-.46-.34-.08.59-.4.57-.17-.37Zm-.39-.34-.15.54-.48.53-.11-.36Zm-.37-.43-.2.57-.51.45-.09-.37Zm-.31-.42-.26.51-.57.42,0-.39Zm-.26-.48-.31.51-.62.34v-.4Zm-.23-.49-.36.46-.66.28.06-.4Zm-.17-.51-.39.4-.68.23.08-.37Zm-.11-.54-.45.37-.68.14.11-.36Zm-.06-.53-.48.31-.71.08.17-.37Zm0-.54-.51.25H636l.19-.34Zm.06-.54-.54.2-.71-.06.23-.31Zm.11-.54-.56.17-.68-.17.25-.28Zm.17-.51-.59.08-.65-.19.28-.26Zm.2-.51-.56.06-.66-.32.34-.19Zm.29-.45-.57,0-.62-.37.34-.17Zm.31-.46-.57-.08-.57-.4.37-.17Zm.37-.39-.57-.15-.51-.48L638,372Zm.39-.37-.54-.2-.48-.51.4-.09Zm.46-.31-.54-.26-.4-.57.4,0Zm.45-.29-.48-.31-.34-.6h.37Zm.51-.2-.45-.36-.29-.66.37.06Zm.51-.17-.42-.42-.2-.65.37.08Zm.54-.11-.37-.45-.17-.68.37.11Zm.54-.06-.34-.48-.06-.71.34.17Z" transform="translate(-4.51 -14.6)" fill="gray" fillRule="evenodd"/>
                            <polygon points="637.81 367.73 638.15 367.56 638.43 367.7 638.75 367.47 639.03 367.58 639.31 367.36 639.65 367.44 639.93 367.16 640.22 367.22 640.42 366.9 640.76 366.93 640.93 366.62 641.27 366.59 641.41 366.25 641.75 366.23 641.89 365.86 642.2 365.77 642.26 365.43 642.57 365.29 642.63 364.95 642.91 364.78 642.91 364.41 643.2 364.24 643.14 363.87 643.42 363.64 643.34 363.31 643.59 363.02 643.45 362.74 643.68 362.45 643.53 362.12 643.71 361.83 643.53 361.58 643.68 361.24 643.45 360.95 643.59 360.64 643.34 360.38 643.42 360.02 643.14 359.82 643.2 359.45 642.91 359.25 642.91 358.91 642.63 358.74 642.57 358.37 642.26 358.23 642.2 357.89 641.89 357.81 641.75 357.47 641.41 357.41 641.27 357.07 640.93 357.07 640.76 356.76 640.42 356.76 640.22 356.47 639.93 356.5 639.65 356.25 639.31 356.33 639.03 356.08 638.75 356.19 638.43 355.99 638.15 356.13 637.81 355.96 637.5 356.13 637.21 355.99 636.9 356.19 636.59 356.08 636.34 356.33 636 356.25 635.71 356.5 635.43 356.47 635.23 356.76 634.89 356.76 634.72 357.07 634.35 357.07 634.24 357.41 633.9 357.47 633.76 357.81 633.44 357.89 633.39 358.23 633.05 358.37 633.02 358.74 632.74 358.91 632.74 359.25 632.45 359.45 632.51 359.82 632.23 360.02 632.31 360.38 632.03 360.64 632.2 360.95 631.97 361.24 632.11 361.58 631.94 361.83 632.11 362.12 631.97 362.45 632.2 362.74 632.03 363.02 632.31 363.31 632.23 363.64 632.51 363.87 632.45 364.24 632.74 364.41 632.74 364.78 633.02 364.95 633.05 365.29 633.39 365.43 633.44 365.77 633.76 365.86 633.9 366.23 634.24 366.25 634.35 366.59 634.72 366.62 634.89 366.93 635.23 366.9 635.43 367.22 635.71 367.16 636 367.44 636.34 367.36 636.59 367.58 636.9 367.47 637.21 367.7 637.5 367.56 637.81 367.73" fill="#333" stroke="#333" strokeMiterlimit="10" strokeWidth="0.51" fillRule="evenodd"/>
                            <path d="M642.32,374.73a1.72,1.72,0,1,0,1.73,1.7,1.71,1.71,0,0,0-1.73-1.7Z" transform="translate(-4.51 -14.6)" fill="#545454" fillRule="evenodd"/>
                            <path d="M642.32,374.73a1.72,1.72,0,1,0,1.73,1.7,1.71,1.71,0,0,0-1.73-1.7Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#2f2f30" strokeMiterlimit="10" strokeWidth="0.23"/>
                            <path d="M642.32,377.08a.64.64,0,1,0,0-1.27.62.62,0,0,0-.62.62.63.63,0,0,0,.62.65Z" transform="translate(-4.51 -14.6)" fill="#2f2f30" fillRule="evenodd"/>
                        </g>
                        <g>
                            <path d="M662.39,363.46A7.64,7.64,0,1,0,657,365.7a7.58,7.58,0,0,0,5.41-2.24Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#141414" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.67"/>
                            <path d="M662.39,363.46A7.64,7.64,0,1,0,657,365.7a7.58,7.58,0,0,0,5.41-2.24Z" transform="translate(-4.51 -14.6)" fill="#424242" fillRule="evenodd"/>
                            <path d="M657.26,352.89l-.28-.51v-.71l.34.2Zm.54.06-.23-.54.09-.71.31.23Zm.54.11-.17-.57.14-.68.28.26Zm.51.17-.11-.59L659,352l.26.29Zm.48.2,0-.57.29-.65.22.34Zm.48.28,0-.59.34-.6.2.34Zm.43.31.08-.56.43-.57.14.37Zm.42.37.15-.56.45-.51.11.36Zm.34.4.2-.54.54-.48.09.4Zm.34.45.26-.54.57-.39,0,.37Zm.26.46.31-.48.62-.37,0,.39Zm.23.51.36-.46.66-.28-.06.37Zm.17.51.39-.43.68-.2-.08.37Zm.11.54.45-.37.68-.17-.14.37Zm.06.53.48-.34.71-.05-.17.34Zm0,.54.51-.28h.7l-.19.34Zm-.06.54.54-.22.71.08-.26.31Zm-.11.51.56-.14.68.14-.25.29Zm-.17.54.56-.11.68.22-.31.26Zm-.23.48.59,0,.63.29-.31.22Zm-.26.48.57,0,.62.34-.34.2Zm-.34.43.6.08.57.43-.37.14Zm-.34.4.54.17.54.45-.37.11Zm-.42.36.57.2.45.54-.37.06Zm-.43.35.51.25.43.57-.4,0Zm-.48.25.51.31.34.63-.4,0Zm-.48.23.45.37.29.62-.4,0Zm-.51.17.4.39.22.68-.37-.08Zm-.54.11.37.45.14.68-.37-.14Zm-.54.06.31.48.09.71-.37-.17Zm-.54,0,.26.51v.71l-.31-.2Zm-.54-.06.2.54,0,.71-.32-.26Zm-.53-.11.17.56-.17.68-.29-.28Zm-.51-.17.08.56-.2.68-.25-.31Zm-.51-.23,0,.6-.28.62-.23-.31Zm-.46-.25,0,.56-.36.63-.17-.34Zm-.45-.35-.09.6-.39.57-.17-.37Zm-.4-.34-.14.54-.48.54-.12-.37Zm-.37-.42-.2.57-.51.45-.08-.37Zm-.31-.43-.25.51-.57.43,0-.4Zm-.25-.48-.32.51-.62.34v-.39Zm-.23-.48-.37.45-.65.29.06-.4Zm-.17-.51-.4.4-.68.22.09-.36Zm-.11-.54-.46.37-.68.14.12-.37Zm-.06-.54-.48.32-.71.08.17-.37Zm0-.54-.51.26h-.71l.2-.34Zm.06-.53-.54.19-.71-.05.23-.31Zm.11-.54-.57.17-.68-.17.26-.29Zm.17-.51-.6.08-.65-.2.29-.25Zm.2-.51-.57.05-.65-.31.34-.2Zm.28-.46-.57,0-.62-.37.34-.17Zm.31-.45-.56-.09-.57-.39.37-.17Zm.37-.4-.57-.14-.51-.48.37-.11Zm.4-.37-.54-.19-.48-.51.4-.09Zm.45-.31-.54-.25-.39-.57.39,0Zm.46-.28-.49-.31-.34-.6h.37Zm.51-.2-.46-.37-.28-.65.37.06Zm.51-.17-.43-.42L655,352l.37.09Zm.53-.11-.36-.46-.17-.68.36.12Zm.54-.06-.34-.48,0-.71.34.17Z" transform="translate(-4.51 -14.6)" fill="gray" fillRule="evenodd"/>
                            <polygon points="652.47 349.35 652.8 349.17 653.09 349.32 653.4 349.09 653.68 349.2 653.97 348.98 654.31 349.06 654.59 348.78 654.87 348.83 655.07 348.52 655.41 348.55 655.58 348.24 655.92 348.21 656.07 347.87 656.4 347.84 656.55 347.47 656.86 347.39 656.91 347.05 657.23 346.91 657.28 346.57 657.57 346.4 657.57 346.03 657.85 345.86 657.79 345.49 658.08 345.26 657.99 344.92 658.25 344.64 658.11 344.36 658.33 344.07 658.19 343.73 658.36 343.45 658.19 343.19 658.33 342.85 658.11 342.57 658.25 342.26 657.99 342 658.08 341.63 657.79 341.44 657.85 341.07 657.57 340.87 657.57 340.53 657.28 340.36 657.23 339.99 656.91 339.85 656.86 339.51 656.55 339.42 656.4 339.08 656.07 339.03 655.92 338.69 655.58 338.69 655.41 338.37 655.07 338.37 654.87 338.09 654.59 338.12 654.31 337.86 653.97 337.95 653.68 337.69 653.4 337.81 653.09 337.61 652.8 337.75 652.47 337.58 652.15 337.75 651.87 337.61 651.56 337.81 651.25 337.69 650.99 337.95 650.65 337.86 650.37 338.12 650.08 338.09 649.88 338.37 649.54 338.37 649.38 338.69 649.01 338.69 648.89 339.03 648.55 339.08 648.41 339.42 648.1 339.51 648.04 339.85 647.7 339.99 647.67 340.36 647.39 340.53 647.39 340.87 647.11 341.07 647.16 341.44 646.88 341.63 646.97 342 646.68 342.26 646.85 342.57 646.63 342.85 646.77 343.19 646.6 343.45 646.77 343.73 646.63 344.07 646.85 344.36 646.68 344.64 646.97 344.92 646.88 345.26 647.16 345.49 647.11 345.86 647.39 346.03 647.39 346.4 647.67 346.57 647.7 346.91 648.04 347.05 648.1 347.39 648.41 347.47 648.55 347.84 648.89 347.87 649.01 348.21 649.38 348.24 649.54 348.55 649.88 348.52 650.08 348.83 650.37 348.78 650.65 349.06 650.99 348.98 651.25 349.2 651.56 349.09 651.87 349.32 652.15 349.17 652.47 349.35" fill="#333" stroke="#333" strokeMiterlimit="10" strokeWidth="0.51" fillRule="evenodd"/>
                            <path d="M657,356.35a1.72,1.72,0,0,0,0,3.43,1.72,1.72,0,1,0,0-3.43Z" transform="translate(-4.51 -14.6)" fill="#545454" fillRule="evenodd"/>
                            <path d="M657,356.35a1.72,1.72,0,0,0,0,3.43,1.72,1.72,0,1,0,0-3.43Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#2f2f30" strokeMiterlimit="10" strokeWidth="0.23"/>
                            <path d="M657,358.7a.64.64,0,1,0-.63-.65.64.64,0,0,0,.63.65Z" transform="translate(-4.51 -14.6)" fill="#2f2f30" fillRule="evenodd"/>
                        </g>
                        <g>
                            <path d="M707.56,441.7a7.64,7.64,0,1,0-5.41,2.24,7.6,7.6,0,0,0,5.41-2.24Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#141414" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.67"/>
                            <path d="M707.56,441.7a7.64,7.64,0,1,0-5.41,2.24,7.6,7.6,0,0,0,5.41-2.24Z" transform="translate(-4.51 -14.6)" fill="#424242" fillRule="evenodd"/>
                            <path d="M702.43,431.13l-.28-.51v-.71l.34.2Zm.54.05-.23-.53.09-.71.31.22Zm.54.12-.17-.57.14-.68.28.25Zm.51.17-.11-.6.22-.65.26.28Zm.48.2,0-.57.29-.65.22.34Zm.48.28,0-.6.34-.59.2.34Zm.43.31.08-.57.43-.56.14.37Zm.42.37.15-.57.45-.51.11.37Zm.34.4.2-.54.54-.48.09.39Zm.34.45.26-.54.57-.4,0,.37Zm.26.45.31-.48.62-.37,0,.4Zm.23.51.36-.45.66-.28-.06.36Zm.17.51.39-.42.68-.2-.08.37Zm.11.54.45-.37.68-.17-.14.37Zm.06.54.48-.34.71-.06-.17.34Zm0,.54.51-.28h.7l-.19.34Zm-.06.54.54-.23.71.09-.26.31Zm-.11.51.56-.14.68.14-.25.28Zm-.17.54.56-.12.68.23-.31.26Zm-.23.48.59,0,.63.28-.31.23Zm-.26.48.57,0,.62.34-.34.2Zm-.34.43.6.08.57.43-.37.14Zm-.34.39.54.17.54.46-.37.11Zm-.42.37.57.2.45.54-.37.05Zm-.43.34.51.26.43.56-.4,0Zm-.48.26.51.31.34.62-.4,0Zm-.48.22.45.37.29.63-.4,0Zm-.51.17.4.4.22.68-.37-.08Zm-.54.12.37.45.14.68-.37-.14Zm-.54.05.31.49.09.7-.37-.17Zm-.54,0,.26.51v.71l-.31-.2Zm-.54-.05.2.54,0,.7-.32-.25Zm-.53-.12.17.57-.17.68-.29-.28Zm-.51-.17.08.57-.2.68-.25-.31Zm-.51-.22.05.59-.28.63-.23-.32Zm-.46-.26,0,.57-.36.62-.17-.34Zm-.45-.34-.09.6-.39.56-.17-.37Zm-.4-.34-.14.54-.48.54-.12-.37Zm-.37-.42-.2.56-.51.46-.08-.37Zm-.31-.43-.25.51-.57.43,0-.4Zm-.25-.48-.32.51-.62.34v-.4Zm-.23-.48-.37.45-.65.28.06-.39Zm-.17-.51-.4.39-.68.23.09-.37Zm-.11-.54-.46.37-.68.14.12-.37Zm-.06-.54-.48.31-.71.09.17-.37Zm0-.54-.51.26h-.71l.2-.34Zm.06-.54-.54.2-.71-.06.23-.31Zm.11-.54-.57.17-.68-.17.26-.28Zm.17-.51-.6.09-.65-.2.29-.26Zm.2-.51L697,434l-.65-.31.34-.2Zm.28-.45-.57,0-.62-.37.34-.17Zm.31-.45-.56-.09-.57-.4.37-.17Zm.37-.4-.57-.14-.51-.48.37-.12Zm.4-.37-.54-.2-.48-.51.4-.08Zm.45-.31-.54-.26-.39-.56.39,0Zm.46-.28-.49-.32-.34-.59h.37Zm.51-.2-.46-.37-.28-.65.37.05Zm.51-.17-.43-.43-.2-.65.37.08Zm.53-.12-.36-.45-.17-.68.36.11Zm.54-.05-.34-.48,0-.71.34.17Z" transform="translate(-4.51 -14.6)" fill="gray" fillRule="evenodd"/>
                            <polygon points="697.63 427.58 697.98 427.41 698.26 427.55 698.57 427.33 698.85 427.44 699.14 427.21 699.48 427.3 699.76 427.01 700.04 427.07 700.24 426.76 700.58 426.79 700.75 426.48 701.09 426.45 701.24 426.11 701.58 426.08 701.72 425.71 702.03 425.63 702.09 425.29 702.4 425.14 702.45 424.8 702.74 424.63 702.74 424.26 703.02 424.09 702.96 423.73 703.25 423.5 703.16 423.16 703.42 422.88 703.28 422.59 703.5 422.31 703.36 421.97 703.53 421.69 703.36 421.43 703.5 421.09 703.28 420.81 703.42 420.49 703.16 420.24 703.25 419.87 702.96 419.67 703.02 419.3 702.74 419.11 702.74 418.76 702.45 418.6 702.4 418.23 702.09 418.08 702.03 417.75 701.72 417.66 701.58 417.32 701.24 417.26 701.09 416.92 700.75 416.92 700.58 416.61 700.24 416.61 700.04 416.33 699.76 416.36 699.48 416.1 699.14 416.19 698.85 415.93 698.57 416.04 698.26 415.85 697.98 415.99 697.63 415.82 697.32 415.99 697.04 415.85 696.73 416.04 696.42 415.93 696.16 416.19 695.82 416.1 695.54 416.36 695.25 416.33 695.05 416.61 694.72 416.61 694.54 416.92 694.18 416.92 694.06 417.26 693.72 417.32 693.58 417.66 693.27 417.75 693.21 418.08 692.87 418.23 692.84 418.6 692.56 418.76 692.56 419.11 692.28 419.3 692.33 419.67 692.05 419.87 692.13 420.24 691.85 420.49 692.02 420.81 691.79 421.09 691.94 421.43 691.77 421.69 691.94 421.97 691.79 422.31 692.02 422.59 691.85 422.88 692.13 423.16 692.05 423.5 692.33 423.73 692.28 424.09 692.56 424.26 692.56 424.63 692.84 424.8 692.87 425.14 693.21 425.29 693.27 425.63 693.58 425.71 693.72 426.08 694.06 426.11 694.18 426.45 694.54 426.48 694.72 426.79 695.05 426.76 695.25 427.07 695.54 427.01 695.82 427.3 696.16 427.21 696.42 427.44 696.73 427.33 697.04 427.55 697.32 427.41 697.63 427.58" fill="#333" stroke="#333" strokeMiterlimit="10" strokeWidth="0.51" fillRule="evenodd"/>
                            <path d="M702.15,434.59a1.72,1.72,0,0,0,0,3.43,1.72,1.72,0,1,0,0-3.43Z" transform="translate(-4.51 -14.6)" fill="#545454" fillRule="evenodd"/>
                            <path d="M702.15,434.59a1.72,1.72,0,0,0,0,3.43,1.72,1.72,0,1,0,0-3.43Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#2f2f30" strokeMiterlimit="10" strokeWidth="0.23"/>
                            <path d="M702.15,436.94a.64.64,0,1,0-.63-.65.64.64,0,0,0,.63.65Z" transform="translate(-4.51 -14.6)" fill="#2f2f30" fillRule="evenodd"/>
                        </g>
                        <g>
                            <path d="M707.29,526.22a7.64,7.64,0,1,0-5.41,2.23,7.61,7.61,0,0,0,5.41-2.23Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#141414" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.67"/>
                            <path d="M707.29,526.22a7.64,7.64,0,1,0-5.41,2.23,7.61,7.61,0,0,0,5.41-2.23Z" transform="translate(-4.51 -14.6)" fill="#424242" fillRule="evenodd"/>
                            <path d="M702.16,515.64l-.28-.51v-.71l.34.2Zm.54.06-.23-.54.09-.71.31.23Zm.54.11-.17-.56.14-.69.29.26Zm.51.17-.11-.59.22-.66.26.29Zm.48.2,0-.57.29-.65.22.34Zm.48.28,0-.59.34-.6.2.34Zm.43.32.08-.57.43-.57.14.37Zm.42.36.15-.56.45-.51.11.37Zm.34.4.2-.54.54-.48.09.4Zm.34.45.26-.53.57-.4,0,.37Zm.26.46.31-.48.63-.37,0,.39Zm.23.51.37-.46.65-.28-.06.37Zm.17.51.39-.43.68-.19-.08.36Zm.11.54.45-.37.68-.17-.14.37Zm.06.54.48-.34.71-.06-.17.34Zm0,.53.51-.28h.71l-.2.34Zm-.06.54.54-.22.71.08-.26.31Zm-.11.51.56-.14.68.14-.25.29Zm-.17.54.56-.11.68.23-.31.25Zm-.23.48.6,0,.62.28-.31.23Zm-.26.49.57,0,.63.34-.34.2Zm-.34.42.6.09.57.42-.37.14Zm-.34.4.54.17.54.45-.37.11Zm-.42.37.57.19.45.54-.37.06Zm-.43.34.51.25.43.57-.4,0Zm-.48.25.51.31.34.63-.39,0Zm-.48.23.45.37.29.62-.4,0Zm-.51.17.4.4.22.68-.36-.09Zm-.54.11.37.46.14.68-.37-.15Zm-.54.06.31.48.09.71-.37-.17Zm-.54,0,.26.51v.71l-.31-.2Zm-.53-.06.19.54,0,.71-.31-.26Zm-.54-.11.17.57-.17.68-.29-.29Zm-.51-.17.08.57-.2.68-.25-.32Zm-.51-.23.05.6-.28.62-.23-.31Zm-.46-.25,0,.56-.36.63-.17-.34Zm-.45-.34-.09.59-.39.57-.17-.37Zm-.4-.34-.14.53-.48.54-.11-.37Zm-.37-.43-.19.57-.51.45-.09-.37Zm-.31-.42-.25.51-.57.42,0-.4Zm-.25-.49-.31.51-.63.34v-.39Zm-.23-.48-.37.46-.65.28.06-.4Zm-.17-.51-.4.4-.68.23.09-.37Zm-.11-.54-.46.37-.68.14.12-.37Zm-.06-.54-.48.32-.71.08.17-.37Zm0-.53-.51.25h-.71l.2-.34Zm.06-.54-.54.2-.71-.06.23-.31Zm.11-.54-.57.17-.68-.17.26-.28Zm.17-.51-.59.08-.66-.19.29-.26Zm.2-.51-.57,0-.65-.31.34-.2Zm.28-.46-.56,0-.63-.37.34-.17Zm.31-.45-.56-.08-.57-.4.37-.17Zm.37-.4-.56-.14-.51-.48.36-.11Zm.4-.36-.54-.2-.48-.51.4-.09Zm.45-.32-.54-.25-.39-.57.39,0Zm.46-.28-.49-.31-.34-.6h.37Zm.51-.2-.46-.37-.28-.65.37.06Zm.51-.17-.43-.42-.2-.66.37.09Zm.54-.11-.37-.45-.17-.69.37.12Zm.53-.06-.34-.48,0-.71.34.17Z" transform="translate(-4.51 -14.6)" fill="gray" fillRule="evenodd"/>
                            <polygon points="697.37 512.1 697.71 511.93 697.99 512.07 698.3 511.84 698.58 511.95 698.87 511.73 699.21 511.81 699.49 511.53 699.77 511.58 699.97 511.27 700.31 511.3 700.48 510.99 700.82 510.96 700.97 510.62 701.31 510.59 701.45 510.23 701.76 510.14 701.82 509.8 702.13 509.66 702.18 509.32 702.47 509.15 702.47 508.78 702.75 508.61 702.7 508.24 702.98 508.01 702.89 507.67 703.15 507.39 703.01 507.11 703.23 506.82 703.09 506.48 703.26 506.2 703.09 505.94 703.23 505.6 703.01 505.32 703.15 505.01 702.89 504.75 702.98 504.38 702.7 504.19 702.75 503.82 702.47 503.62 702.47 503.28 702.18 503.11 702.13 502.74 701.82 502.6 701.76 502.26 701.45 502.17 701.31 501.83 700.97 501.78 700.82 501.44 700.48 501.44 700.31 501.13 699.97 501.13 699.77 500.84 699.49 500.87 699.21 500.62 698.87 500.7 698.58 500.44 698.3 500.56 697.99 500.36 697.71 500.5 697.37 500.33 697.05 500.5 696.77 500.36 696.46 500.56 696.15 500.44 695.89 500.7 695.55 500.62 695.27 500.87 694.98 500.84 694.79 501.13 694.45 501.13 694.28 501.44 693.91 501.44 693.79 501.78 693.45 501.83 693.31 502.17 693 502.26 692.94 502.6 692.6 502.74 692.58 503.11 692.29 503.28 692.29 503.62 692.01 503.82 692.07 504.19 691.78 504.38 691.87 504.75 691.58 505.01 691.75 505.32 691.53 505.6 691.67 505.94 691.5 506.2 691.67 506.48 691.53 506.82 691.75 507.11 691.58 507.39 691.87 507.67 691.78 508.01 692.07 508.24 692.01 508.61 692.29 508.78 692.29 509.15 692.58 509.32 692.6 509.66 692.94 509.8 693 510.14 693.31 510.23 693.45 510.59 693.79 510.62 693.91 510.96 694.28 510.99 694.45 511.3 694.79 511.27 694.98 511.58 695.27 511.53 695.55 511.81 695.89 511.73 696.15 511.95 696.46 511.84 696.77 512.07 697.05 511.93 697.37 512.1" fill="#333" stroke="#333" strokeMiterlimit="10" strokeWidth="0.51" fillRule="evenodd"/>
                            <path d="M701.88,519.1a1.72,1.72,0,0,0,0,3.43,1.72,1.72,0,1,0,0-3.43Z" transform="translate(-4.51 -14.6)" fill="#545454" fillRule="evenodd"/>
                            <path d="M701.88,519.1a1.72,1.72,0,0,0,0,3.43,1.72,1.72,0,1,0,0-3.43Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#2f2f30" strokeMiterlimit="10" strokeWidth="0.23"/>
                            <path d="M701.88,521.45a.64.64,0,1,0,0-1.27.62.62,0,0,0-.62.62.63.63,0,0,0,.62.65Z" transform="translate(-4.51 -14.6)" fill="#2f2f30" fillRule="evenodd"/>
                        </g>
                        <g>
                            <path d="M630.67,526.09a7.64,7.64,0,1,0-5.41,2.24,7.61,7.61,0,0,0,5.41-2.24Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#141414" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.67"/>
                            <path d="M630.67,526.09a7.64,7.64,0,1,0-5.41,2.24,7.61,7.61,0,0,0,5.41-2.24Z" transform="translate(-4.51 -14.6)" fill="#424242" fillRule="evenodd"/>
                            <path d="M625.54,515.51l-.28-.51v-.7l.34.19Zm.54.06-.23-.54.09-.71.31.23Zm.54.11-.17-.56.14-.68.28.25Zm.51.17-.11-.59.22-.65.26.28Zm.48.2,0-.56.29-.66.22.34Zm.48.29,0-.6.34-.59.2.34Zm.43.31.08-.57.43-.57.14.37Zm.42.37.15-.57.45-.51.11.37Zm.34.39.2-.54.54-.48.09.4Zm.34.46.26-.54.57-.4,0,.37Zm.26.45.31-.48.62-.37,0,.4Zm.23.51.36-.45.66-.29-.06.37Zm.17.51.39-.42.68-.2-.08.37Zm.11.54.45-.37.68-.17-.14.37Zm.06.54.48-.34.71-.06-.17.34Zm0,.54.51-.29h.71l-.2.34Zm-.06.54.54-.23.71.08-.26.32Zm-.11.51.56-.15.68.15-.25.28Zm-.17.53.56-.11.68.23-.31.25Zm-.23.49.59,0,.63.28-.31.23Zm-.26.48.57,0,.62.34-.34.19Zm-.34.42.6.09.57.42-.37.15Zm-.34.4.54.17.54.45-.37.12Zm-.42.37.57.2.45.54-.37,0Zm-.43.34.51.25.43.57-.4,0Zm-.48.25.51.32.34.62-.39,0Zm-.48.23.45.37.29.62-.4,0Zm-.51.17.4.4.22.68-.37-.09Zm-.54.11.37.46.14.68-.37-.14Zm-.54.06.31.48.09.71-.37-.17Zm-.54,0,.26.51v.71l-.31-.2Zm-.53-.06.19.54,0,.71-.31-.25Zm-.54-.11.17.57-.17.68-.29-.29Zm-.51-.17.08.57-.2.68-.25-.31Zm-.51-.23.05.6-.28.62-.23-.31Zm-.46-.25,0,.57-.36.62-.17-.34Zm-.45-.34-.09.59-.39.57-.17-.37Zm-.4-.34-.14.54-.48.54-.11-.37Zm-.37-.43-.19.57-.52.45-.08-.36Zm-.31-.42-.25.51-.57.42,0-.39Zm-.25-.48-.32.51-.62.34v-.4Zm-.23-.49-.37.46-.65.28.06-.4Zm-.17-.51-.4.4-.68.23.09-.37Zm-.11-.53-.46.36L619,522l.12-.37Zm-.06-.54-.48.31-.71.08.17-.36Zm0-.54-.51.25h-.71l.2-.34Zm.06-.54-.54.2-.71-.06.23-.31Zm.11-.54-.57.17-.68-.17.26-.28Zm.17-.51-.6.09-.65-.2.29-.26Zm.2-.51-.57.06-.65-.31.34-.2Zm.28-.45-.57,0-.62-.37.34-.17Zm.31-.46-.56-.08-.57-.4.37-.17Zm.37-.39-.56-.15-.52-.48.37-.11Zm.4-.37-.54-.2-.48-.51.4-.09Zm.45-.31-.54-.26-.39-.57.39,0Zm.46-.29-.49-.31-.34-.59h.37Zm.51-.2-.46-.36-.28-.66.37.06Zm.51-.17-.43-.42-.2-.65.37.08Zm.54-.11-.37-.45-.17-.68.37.11Zm.53-.06-.34-.48,0-.71.34.17Z" transform="translate(-4.51 -14.6)" fill="gray" fillRule="evenodd"/>
                            <polygon points="620.75 511.97 621.09 511.8 621.37 511.94 621.68 511.71 621.96 511.83 622.25 511.6 622.59 511.69 622.87 511.4 623.15 511.46 623.35 511.15 623.69 511.17 623.86 510.86 624.2 510.83 624.35 510.49 624.68 510.47 624.83 510.1 625.14 510.01 625.2 509.67 625.51 509.53 625.56 509.19 625.85 509.02 625.85 508.65 626.13 508.48 626.07 508.11 626.36 507.89 626.27 507.55 626.53 507.26 626.39 506.98 626.61 506.7 626.47 506.36 626.64 506.07 626.47 505.82 626.61 505.48 626.39 505.19 626.53 504.88 626.27 504.63 626.36 504.26 626.07 504.06 626.13 503.69 625.85 503.49 625.85 503.15 625.56 502.98 625.51 502.61 625.2 502.47 625.14 502.13 624.83 502.05 624.68 501.71 624.35 501.65 624.2 501.31 623.86 501.31 623.69 501 623.35 501 623.15 500.71 622.87 500.74 622.59 500.49 622.25 500.57 621.96 500.32 621.68 500.43 621.37 500.23 621.09 500.37 620.75 500.2 620.43 500.37 620.15 500.23 619.84 500.43 619.53 500.32 619.27 500.57 618.93 500.49 618.65 500.74 618.36 500.71 618.16 501 617.83 501 617.65 501.31 617.29 501.31 617.17 501.65 616.83 501.71 616.69 502.05 616.38 502.13 616.32 502.47 615.98 502.61 615.95 502.98 615.67 503.15 615.67 503.49 615.39 503.69 615.44 504.06 615.16 504.26 615.25 504.63 614.96 504.88 615.13 505.19 614.9 505.48 615.05 505.82 614.88 506.07 615.05 506.36 614.9 506.7 615.13 506.98 614.96 507.26 615.25 507.55 615.16 507.89 615.44 508.11 615.39 508.48 615.67 508.65 615.67 509.02 615.95 509.19 615.98 509.53 616.32 509.67 616.38 510.01 616.69 510.1 616.83 510.47 617.17 510.49 617.29 510.83 617.65 510.86 617.83 511.17 618.16 511.15 618.36 511.46 618.65 511.4 618.93 511.69 619.27 511.6 619.53 511.83 619.84 511.71 620.15 511.94 620.43 511.8 620.75 511.97" fill="#333" stroke="#333" strokeMiterlimit="10" strokeWidth="0.51" fillRule="evenodd"/>
                            <path d="M625.26,519a1.72,1.72,0,1,0,1.73,1.7,1.7,1.7,0,0,0-1.73-1.7Z" transform="translate(-4.51 -14.6)" fill="#545454" fillRule="evenodd"/>
                            <path d="M625.26,519a1.72,1.72,0,1,0,1.73,1.7,1.7,1.7,0,0,0-1.73-1.7Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#2f2f30" strokeMiterlimit="10" strokeWidth="0.23"/>
                            <path d="M625.26,521.33a.64.64,0,0,0,.65-.66.63.63,0,0,0-.65-.62.62.62,0,0,0-.62.62.64.64,0,0,0,.62.66Z" transform="translate(-4.51 -14.6)" fill="#2f2f30" fillRule="evenodd"/>
                        </g>
                        <g>
                            <path d="M559.89,526.22a7.64,7.64,0,1,0-5.41,2.23,7.61,7.61,0,0,0,5.41-2.23Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#141414" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.67"/>
                            <path d="M559.89,526.22a7.64,7.64,0,1,0-5.41,2.23,7.61,7.61,0,0,0,5.41-2.23Z" transform="translate(-4.51 -14.6)" fill="#424242" fillRule="evenodd"/>
                            <path d="M554.76,515.64l-.28-.51v-.71l.34.2Zm.54.06-.23-.54.09-.71.31.23Zm.54.11-.17-.56.14-.69.28.26Zm.51.17-.11-.59.22-.66.26.29Zm.48.2,0-.57.29-.65.22.34Zm.48.28,0-.59.34-.6.2.34Zm.43.32.08-.57.43-.57.14.37Zm.42.36.14-.56.46-.51.11.37Zm.34.4.2-.54.54-.48.08.4Zm.34.45.26-.53.57-.4,0,.37Zm.26.46.31-.48.62-.37,0,.39Zm.22.51.37-.46.66-.28-.06.37Zm.18.51.39-.43.68-.19-.08.36Zm.11.54.45-.37.68-.17-.14.37Zm.06.54.48-.34.71-.06-.17.34Zm0,.53.51-.28h.7l-.19.34Zm-.06.54.54-.22.71.08-.26.31Zm-.11.51.56-.14.68.14-.25.29Zm-.18.54.57-.11.68.23-.31.25Zm-.22.48.59,0,.63.28-.31.23Zm-.26.49.57,0,.62.34-.34.2Zm-.34.42.6.09.57.42-.37.14Zm-.34.4.54.17.54.45-.37.11Zm-.42.37.56.19.46.54-.37.06Zm-.43.34.51.25.43.57-.4,0Zm-.48.25.51.31.34.63-.4,0Zm-.48.23.45.37.29.62-.4,0Zm-.51.17.4.4.22.68-.37-.09Zm-.54.11.37.46.14.68-.37-.15Zm-.54.06.31.48.09.71-.37-.17Zm-.54,0,.26.51v.71l-.31-.2Zm-.54-.06.2.54,0,.71-.32-.26Zm-.53-.11.17.57-.17.68-.29-.29Zm-.51-.17.08.57-.2.68-.25-.32Zm-.52-.23.06.6-.28.62-.23-.31Zm-.45-.25,0,.56-.37.63-.17-.34Zm-.45-.34-.09.59-.39.57-.17-.37Zm-.4-.34-.14.53-.48.54-.12-.37Zm-.37-.43-.2.57-.51.45-.08-.37Zm-.31-.42-.25.51-.57.42,0-.4Zm-.25-.49-.32.51L549,524v-.39Zm-.23-.48-.37.46-.65.28.06-.4Zm-.17-.51-.4.4-.68.23.09-.37Zm-.11-.54-.46.37-.68.14.11-.37Zm-.06-.54-.48.32-.71.08.17-.37Zm0-.53-.51.25h-.71l.2-.34Zm.06-.54-.54.2-.71-.06.22-.31Zm.11-.54-.57.17-.68-.17.26-.28Zm.17-.51-.6.08-.65-.19.29-.26Zm.2-.51-.57,0-.65-.31.34-.2Zm.28-.46-.57,0-.62-.37.34-.17Zm.31-.45-.56-.08-.57-.4.37-.17Zm.37-.4-.57-.14-.51-.48.37-.11Zm.4-.36-.54-.2-.48-.51.39-.09Zm.45-.32-.54-.25-.39-.57.39,0Zm.45-.28-.48-.31-.34-.6h.37Zm.52-.2-.46-.37-.28-.65.37.06Zm.51-.17-.43-.42-.2-.66.37.09Zm.53-.11-.36-.45-.17-.69.36.12Zm.54-.06-.34-.48,0-.71.34.17Z" transform="translate(-4.51 -14.6)" fill="gray" fillRule="evenodd"/>
                            <polygon points="549.96 512.1 550.3 511.93 550.59 512.07 550.9 511.84 551.18 511.95 551.47 511.73 551.81 511.81 552.09 511.53 552.37 511.58 552.57 511.27 552.91 511.3 553.08 510.99 553.42 510.96 553.56 510.62 553.9 510.59 554.05 510.23 554.36 510.14 554.41 509.8 554.73 509.66 554.78 509.32 555.07 509.15 555.07 508.78 555.35 508.61 555.29 508.24 555.58 508.01 555.49 507.67 555.75 507.39 555.61 507.11 555.83 506.82 555.69 506.48 555.86 506.2 555.69 505.94 555.83 505.6 555.61 505.32 555.75 505.01 555.49 504.75 555.58 504.38 555.29 504.19 555.35 503.82 555.07 503.62 555.07 503.28 554.78 503.11 554.73 502.74 554.41 502.6 554.36 502.26 554.05 502.17 553.9 501.83 553.56 501.78 553.42 501.44 553.08 501.44 552.91 501.13 552.57 501.13 552.37 500.84 552.09 500.87 551.81 500.62 551.47 500.7 551.18 500.44 550.9 500.56 550.59 500.36 550.3 500.5 549.96 500.33 549.65 500.5 549.37 500.36 549.06 500.56 548.75 500.44 548.49 500.7 548.15 500.62 547.87 500.87 547.58 500.84 547.38 501.13 547.04 501.13 546.87 501.44 546.51 501.44 546.39 501.78 546.05 501.83 545.91 502.17 545.6 502.26 545.54 502.6 545.2 502.74 545.17 503.11 544.89 503.28 544.89 503.62 544.61 503.82 544.66 504.19 544.38 504.38 544.47 504.75 544.18 505.01 544.35 505.32 544.12 505.6 544.27 505.94 544.1 506.2 544.27 506.48 544.12 506.82 544.35 507.11 544.18 507.39 544.47 507.67 544.38 508.01 544.66 508.24 544.61 508.61 544.89 508.78 544.89 509.15 545.17 509.32 545.2 509.66 545.54 509.8 545.6 510.14 545.91 510.23 546.05 510.59 546.39 510.62 546.51 510.96 546.87 510.99 547.04 511.3 547.38 511.27 547.58 511.58 547.87 511.53 548.15 511.81 548.49 511.73 548.75 511.95 549.06 511.84 549.37 512.07 549.65 511.93 549.96 512.1" fill="#333" stroke="#333" strokeMiterlimit="10" strokeWidth="0.51" fillRule="evenodd"/>
                            <path d="M554.48,519.1a1.72,1.72,0,0,0,0,3.43,1.72,1.72,0,1,0,0-3.43Z" transform="translate(-4.51 -14.6)" fill="#545454" fillRule="evenodd"/>
                            <path d="M554.48,519.1a1.72,1.72,0,0,0,0,3.43,1.72,1.72,0,1,0,0-3.43Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#2f2f30" strokeMiterlimit="10" strokeWidth="0.23"/>
                            <path d="M554.48,521.45a.64.64,0,1,0-.63-.65.64.64,0,0,0,.63.65Z" transform="translate(-4.51 -14.6)" fill="#2f2f30" fillRule="evenodd"/>
                        </g>
                        <g>
                            <path d="M499.36,526.09a7.64,7.64,0,1,0-5.42,2.24,7.61,7.61,0,0,0,5.42-2.24Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#141414" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.67"/>
                            <path d="M499.36,526.09a7.64,7.64,0,1,0-5.42,2.24,7.61,7.61,0,0,0,5.42-2.24Z" transform="translate(-4.51 -14.6)" fill="#424242" fillRule="evenodd"/>
                            <path d="M494.23,515.51l-.29-.51v-.7l.34.19Zm.54.06-.23-.54.08-.71.32.23Zm.53.11-.17-.56.15-.68.28.25Zm.51.17-.11-.59.23-.65.25.28Zm.49.2,0-.56.28-.66.23.34Zm.48.29,0-.6.34-.59.2.34Zm.42.31.09-.57.42-.57.15.37Zm.43.37.14-.57.45-.51.12.37Zm.34.39.2-.54.54-.48.08.4Zm.34.46.25-.54.57-.4,0,.37Zm.25.45.32-.48.62-.37,0,.4Zm.23.51.37-.45.65-.29-.06.37Zm.17.51.4-.42.68-.2-.09.37Zm.11.54.46-.37.68-.17-.14.37Zm.06.54.48-.34.71-.06-.17.34Zm0,.54.51-.29h.71l-.2.34Zm-.06.54.54-.23.71.08-.25.32ZM499,522l.57-.15.68.15-.26.28Zm-.17.53.57-.11.68.23-.31.25Zm-.23.49.6,0,.62.28-.31.23Zm-.25.48.57,0,.62.34-.34.19Zm-.34.42.59.09.57.42-.37.15Zm-.34.4.54.17.54.45-.37.12Zm-.43.37.57.2.45.54-.36,0Zm-.42.34.51.25.42.57-.39,0Zm-.48.25.51.32.34.62-.4,0Zm-.49.23.46.37.28.62-.4,0Zm-.51.17.4.4.23.68-.37-.09Zm-.53.11.36.46.15.68-.37-.14Zm-.54.06.31.48.08.71-.36-.17Zm-.54,0,.25.51v.71l-.31-.2Zm-.54-.06.2.54-.06.71-.31-.25Zm-.54-.11.17.57-.17.68-.28-.29Zm-.51-.17.09.57-.2.68-.26-.31Zm-.51-.23.06.6-.29.62-.22-.31Zm-.45-.25,0,.57-.37.62-.17-.34Zm-.46-.34-.08.59-.4.57-.17-.37Zm-.39-.34-.14.54-.49.54-.11-.37Zm-.37-.43-.2.57-.51.45-.09-.36Zm-.31-.42-.26.51-.57.42,0-.39Zm-.26-.48-.31.51-.62.34v-.4Zm-.23-.49-.36.46-.66.28.06-.4ZM489,522l-.39.4-.68.23.08-.37Zm-.11-.53-.45.36-.68.15.11-.37Zm-.06-.54-.48.31-.71.08.17-.36Zm0-.54-.51.25h-.7l.19-.34Zm.06-.54-.54.2-.71-.06.23-.31Zm.11-.54-.56.17-.68-.17.25-.28Zm.17-.51-.59.09-.65-.2.28-.26Zm.2-.51-.56.06-.66-.31.34-.2Zm.29-.45-.57,0-.62-.37.34-.17Zm.31-.46-.57-.08-.57-.4.37-.17Zm.37-.39-.57-.15-.51-.48.37-.11Zm.39-.37-.53-.2-.49-.51.4-.09Zm.46-.31-.54-.26-.4-.57.4,0Zm.45-.29-.48-.31-.34-.59h.37Zm.51-.2-.45-.36-.29-.66.37.06Zm.51-.17-.42-.42-.2-.65.37.08Zm.54-.11-.37-.45-.17-.68.37.11Zm.54-.06-.34-.48-.06-.71.34.17Z" transform="translate(-4.51 -14.6)" fill="gray" fillRule="evenodd"/>
                            <polygon points="489.43 511.97 489.77 511.8 490.05 511.94 490.37 511.71 490.65 511.83 490.93 511.6 491.27 511.69 491.56 511.4 491.84 511.46 492.04 511.15 492.38 511.17 492.55 510.86 492.89 510.83 493.03 510.49 493.37 510.47 493.51 510.1 493.82 510.01 493.88 509.67 494.19 509.53 494.25 509.19 494.53 509.02 494.53 508.65 494.82 508.48 494.76 508.11 495.04 507.89 494.96 507.55 495.21 507.26 495.07 506.98 495.3 506.7 495.16 506.36 495.33 506.07 495.16 505.82 495.3 505.48 495.07 505.19 495.21 504.88 494.96 504.63 495.04 504.26 494.76 504.06 494.82 503.69 494.53 503.49 494.53 503.15 494.25 502.98 494.19 502.61 493.88 502.47 493.82 502.13 493.51 502.05 493.37 501.71 493.03 501.65 492.89 501.31 492.55 501.31 492.38 501 492.04 501 491.84 500.71 491.56 500.74 491.27 500.49 490.93 500.57 490.65 500.32 490.37 500.43 490.05 500.23 489.77 500.37 489.43 500.2 489.12 500.37 488.83 500.23 488.52 500.43 488.21 500.32 487.96 500.57 487.62 500.49 487.33 500.74 487.05 500.71 486.85 501 486.51 501 486.34 501.31 485.97 501.31 485.86 501.65 485.52 501.71 485.38 502.05 485.06 502.13 485.01 502.47 484.67 502.61 484.64 502.98 484.36 503.15 484.36 503.49 484.07 503.69 484.13 504.06 483.85 504.26 483.93 504.63 483.65 504.88 483.82 505.19 483.59 505.48 483.73 505.82 483.56 506.07 483.73 506.36 483.59 506.7 483.82 506.98 483.65 507.26 483.93 507.55 483.85 507.89 484.13 508.11 484.07 508.48 484.36 508.65 484.36 509.02 484.64 509.19 484.67 509.53 485.01 509.67 485.06 510.01 485.38 510.1 485.52 510.47 485.86 510.49 485.97 510.83 486.34 510.86 486.51 511.17 486.85 511.15 487.05 511.46 487.33 511.4 487.62 511.69 487.96 511.6 488.21 511.83 488.52 511.71 488.83 511.94 489.12 511.8 489.43 511.97" fill="#333" stroke="#333" strokeMiterlimit="10" strokeWidth="0.51" fillRule="evenodd"/>
                            <path d="M493.94,519a1.72,1.72,0,1,0,1.73,1.7,1.71,1.71,0,0,0-1.73-1.7Z" transform="translate(-4.51 -14.6)" fill="#545454" fillRule="evenodd"/>
                            <path d="M493.94,519a1.72,1.72,0,1,0,1.73,1.7,1.71,1.71,0,0,0-1.73-1.7Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#2f2f30" strokeMiterlimit="10" strokeWidth="0.23"/>
                            <path d="M493.94,521.33a.65.65,0,0,0,.66-.66.64.64,0,0,0-.66-.62.62.62,0,0,0-.62.62.64.64,0,0,0,.62.66Z" transform="translate(-4.51 -14.6)" fill="#2f2f30" fillRule="evenodd"/>
                        </g>
                        <g>
                            <path d="M417.81,525.73a7.64,7.64,0,1,0-5.42,2.24,7.62,7.62,0,0,0,5.42-2.24Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#141414" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.67"/>
                            <path d="M417.81,525.73a7.64,7.64,0,1,0-5.42,2.24,7.62,7.62,0,0,0,5.42-2.24Z" transform="translate(-4.51 -14.6)" fill="#424242" fillRule="evenodd"/>
                            <path d="M412.67,515.16l-.28-.51v-.71l.34.2Zm.54.06-.22-.54.08-.71.31.23Zm.54.11-.17-.57.14-.68.29.26Zm.51.17-.11-.6.23-.65.25.29Zm.48.2,0-.57.28-.65.23.34Zm.49.28,0-.59.34-.6.2.34Zm.42.31.09-.56.42-.57.14.37Zm.43.37.14-.56.45-.51.11.36Zm.34.4.19-.54.54-.48.09.4Zm.34.45L417,517l.57-.39,0,.37Zm.25.46.31-.49.63-.36,0,.39Zm.23.51.37-.46.65-.28-.06.37Zm.17.51.4-.43.68-.2-.09.37Zm.11.54.46-.37.68-.17-.15.37Zm.06.53.48-.34.71-.05-.17.34Zm0,.54.51-.28h.71l-.2.34Zm-.06.54.54-.23.71.09-.26.31Zm-.11.51.57-.14.68.14-.26.28Zm-.17.54.57-.11.68.22-.32.26Zm-.23.48.6,0,.62.29-.31.22Zm-.25.48.56,0,.63.34-.34.2Zm-.34.43.59.08.57.43-.37.14Zm-.34.4.53.17.54.45-.37.11Zm-.43.36.57.2.45.54-.37.06Zm-.42.34.51.26.42.57-.4,0Zm-.49.26.51.31.34.62-.39,0Zm-.48.23.46.36.28.63-.4,0Zm-.51.17.4.39.23.68-.37-.08Zm-.54.11.37.45.14.68-.37-.14Zm-.54.06.32.48.08.71-.37-.17Zm-.53,0,.25.51v.71l-.31-.2Zm-.54-.06.2.54-.06.71-.31-.26Zm-.54-.11.17.56-.17.68-.28-.28Zm-.51-.17.08.56-.19.68-.26-.31Zm-.51-.23.06.59-.29.63-.23-.31Zm-.46-.26,0,.57-.37.62-.17-.34Zm-.45-.34-.08.6-.4.57-.17-.37Zm-.4-.34-.14.54-.48.54-.11-.37Zm-.36-.42-.2.57-.51.45-.09-.37Zm-.32-.43-.25.51-.57.43,0-.4Zm-.25-.48-.31.51-.63.34v-.39Zm-.23-.48-.37.45-.65.29.06-.4Zm-.17-.51-.39.4-.69.22.09-.37Zm-.11-.54-.45.37-.69.14.12-.37Zm-.06-.54-.48.31L406,521l.17-.37Zm0-.54-.51.26H406l.2-.34Zm.06-.53-.54.19-.71-.05.23-.31Zm.11-.54-.56.17-.69-.17.26-.29Zm.17-.51-.59.08-.66-.2.29-.25Zm.2-.51-.57,0-.65-.31.34-.2Zm.28-.46-.56,0-.63-.36.34-.17Zm.32-.45-.57-.09-.57-.39.37-.17Zm.36-.4-.56-.14-.51-.48.37-.11Zm.4-.37-.54-.19-.48-.51.4-.09Zm.45-.31-.53-.25-.4-.57.4,0Zm.46-.28-.48-.31-.34-.6h.36Zm.51-.2-.45-.37-.29-.65.37.06Zm.51-.17-.43-.43-.19-.65.36.09Zm.54-.11-.37-.46-.17-.68.37.12Zm.54-.06-.34-.48-.06-.71.34.17Z" transform="translate(-4.51 -14.6)" fill="gray" fillRule="evenodd"/>
                            <polygon points="407.88 511.61 408.22 511.44 408.5 511.58 408.81 511.36 409.1 511.47 409.38 511.25 409.72 511.33 410 511.05 410.29 511.1 410.49 510.79 410.82 510.82 411 510.51 411.33 510.48 411.48 510.14 411.82 510.11 411.96 509.74 412.27 509.66 412.33 509.32 412.64 509.18 412.7 508.84 412.98 508.67 412.98 508.3 413.26 508.13 413.21 507.76 413.49 507.53 413.4 507.19 413.66 506.91 413.52 506.63 413.75 506.34 413.6 506 413.77 505.72 413.6 505.46 413.75 505.12 413.52 504.84 413.66 504.53 413.4 504.27 413.49 503.9 413.21 503.7 413.26 503.34 412.98 503.14 412.98 502.8 412.7 502.63 412.64 502.26 412.33 502.12 412.27 501.78 411.96 501.69 411.82 501.35 411.48 501.3 411.33 500.96 411 500.96 410.82 500.64 410.49 500.64 410.29 500.36 410 500.39 409.72 500.13 409.38 500.22 409.1 499.96 408.81 500.08 408.5 499.88 408.22 500.02 407.88 499.85 407.56 500.02 407.28 499.88 406.97 500.08 406.66 499.96 406.4 500.22 406.06 500.13 405.78 500.39 405.5 500.36 405.3 500.64 404.96 500.64 404.79 500.96 404.42 500.96 404.31 501.3 403.96 501.35 403.82 501.69 403.51 501.78 403.45 502.12 403.12 502.26 403.09 502.63 402.8 502.8 402.8 503.14 402.52 503.34 402.58 503.7 402.29 503.9 402.38 504.27 402.09 504.53 402.26 504.84 402.04 505.12 402.18 505.46 402.01 505.72 402.18 506 402.04 506.34 402.26 506.63 402.09 506.91 402.38 507.19 402.29 507.53 402.58 507.76 402.52 508.13 402.8 508.3 402.8 508.67 403.09 508.84 403.12 509.18 403.45 509.32 403.51 509.66 403.82 509.74 403.96 510.11 404.31 510.14 404.42 510.48 404.79 510.51 404.96 510.82 405.3 510.79 405.5 511.1 405.78 511.05 406.06 511.33 406.4 511.25 406.66 511.47 406.97 511.36 407.28 511.58 407.56 511.44 407.88 511.61" fill="#333" stroke="#333" strokeMiterlimit="10" strokeWidth="0.51" fillRule="evenodd"/>
                            <path d="M412.39,518.62a1.72,1.72,0,0,0,0,3.43,1.72,1.72,0,1,0,0-3.43Z" transform="translate(-4.51 -14.6)" fill="#545454" fillRule="evenodd"/>
                            <path d="M412.39,518.62a1.72,1.72,0,0,0,0,3.43,1.72,1.72,0,1,0,0-3.43Z" transform="translate(-4.51 -14.6)" fill="none" stroke="#2f2f30" strokeMiterlimit="10" strokeWidth="0.23"/>
                            <path d="M412.39,521a.64.64,0,1,0,0-1.27.62.62,0,0,0-.62.62.63.63,0,0,0,.62.65Z" transform="translate(-4.51 -14.6)" fill="#2f2f30" fillRule="evenodd"/>
                        </g>
                    </g>			
                    
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
                    ------------Toggle Switches Instantiation--------
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
                                    
                    *************************************************
                    ------------Rotary Switches Instantiation--------
                    *************************************************
                    
                    */}

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


                    {/* 
                
                    ***********************************************
                    ------------Indicators Instantiation--------
                    ***********************************************
                    
                    */}
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

                </g>

                {/* ------------////////////////////////------------------------------------
                    
                                    System Diagram
                
                ---------------/////////////////////////-----------------------------------*/}	
                <g id="system">
                    {/* 
                    
                    ------------Tanks Backgrounds [STATIC ELEMENTS] ------------
                    
                    */}
                    <g id="tanks_backgrounds">
                        <path d="M656.08,284.74s2.14-14.44-93.2-20.38c-54.1-3.09-63.63-1-63.63-1s-23.36,3.35-22.89,23.22,24.32,20.89,24.32,20.89c16,1.51,52.78-.23,67.21-.77C600.2,305.34,652.72,295.6,656.08,284.74Z" transform="translate(-4.51 -14.6)" stroke="#737373" strokeLinejoin="round" strokeWidth="2" fillRule="evenodd" fill="url(#linear-gradient-5)"/>
                        <polygon points="418.38 196.62 435.05 196.62 435.05 132.39 385.53 132.39 385.53 177.28 418.38 196.62" stroke="#737373" strokeLinejoin="round" strokeWidth="2" fillRule="evenodd" fill="url(#linear-gradient-9)"/>
                        <polygon points="698.59 173.92 698.59 131.62 557.05 131.62 557.05 183.47 698.59 173.92" stroke="#737373" strokeLinejoin="round" strokeWidth="2" fillRule="evenodd" fill="url(#linear-gradient-10)"/>
                        <path d="M469.82,208.39V146.74h65v52.62S469.58,207.87,469.82,208.39Z" transform="translate(-4.51 -14.6)" stroke="#737373" strokeLinejoin="round" strokeWidth="2" fillRule="evenodd" fill="url(#linear-gradient-12)"/>
                    </g>
                    
                    {/* 
                    
                    ------------Engines: [STATIC ELEMENTS] ------------
                    
                    */}
                    <g id="engines">
                        <g id="engine_3">
                                <path d="M539.24,14.91c14.21,7.25,26.42,14.5,34.23,21.74a44.51,44.51,0,0,1,9.18,10.75q1.94,4.22-2.73,4.8a24.15,24.15,0,0,1-7.94,0q-1.32,4.13-5,4.63c-3,.73-6.59,0-10.66-1.66-7.92-2.65-16.47-7.56-25.05-12.65-1.46-1.15-6.2-8.24-3.81-17S534,13.92,539.24,14.91Z" transform="translate(-4.51 -14.6)" fill="#e6e6e6" stroke="#bfbfbf" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.25" fillRule="evenodd"/>
                                <path d="M532,42.88a3.61,3.61,0,0,0,4-1.18" transform="translate(-4.51 -14.6)" fill="#e6e6e6" stroke="#bfbfbf" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.25"/>
                                <path d="M539.25,15c3.12,1.22,3.2,7.26,2.43,14.82" transform="translate(-4.51 -14.6)" fill="#e6e6e6" stroke="#bfbfbf" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.25"/>
                                <path d="M567,35.79c.5-4.86-1.41-6.33-4.4-6.25-5.43,1.33-9,5.06-9.9,12.44A28.23,28.23,0,0,0,554,51.47c2.1,5.91,7,4.86,10.38-1" transform="translate(-4.51 -14.6)" fill="#e6e6e6" stroke="#bfbfbf" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.25"/>
                                <path d="M573.32,36.78c2.07,1.69,1.86,6.23-.47,10.12s-5.9,5.67-8,4-1.86-6.23.47-10.13,5.9-5.67,8-4Z" transform="translate(-4.51 -14.6)" fill="#e6e6e6" stroke="#bfbfbf" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.25"/>
                                <path d="M572.06,52.22l-5-.61Z" transform="translate(-4.51 -14.6)" fill="#e6e6e6" stroke="#bfbfbf" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.25" fillRule="evenodd"/>
                                <path d="M566.77,57q-2.61-.59-.83-5.57" transform="translate(-4.51 -14.6)" fill="#e6e6e6" stroke="#bfbfbf" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.25"/>
                            </g>
                        <g id="engine_4">
                                <path d="M655.16,14.91c14.21,7.25,26.41,14.5,34.23,21.74a44.44,44.44,0,0,1,9.17,10.75q2,4.22-2.73,4.8a24.09,24.09,0,0,1-7.93,0q-1.33,4.13-5,4.63c-3,.73-6.6,0-10.67-1.66-7.92-2.65-16.46-7.56-25-12.65-1.46-1.15-6.19-8.24-3.8-17s6.48-11.65,11.74-10.66Z" transform="translate(-4.51 -14.6)" fill="#e6e6e6" stroke="#bfbfbf" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.25" fillRule="evenodd"/>
                                <path d="M647.87,42.88a3.61,3.61,0,0,0,4-1.18" transform="translate(-4.51 -14.6)" fill="#e6e6e6" stroke="#bfbfbf" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.25"/>
                                <path d="M655.16,15c3.12,1.22,3.2,7.26,2.43,14.82" transform="translate(-4.51 -14.6)" fill="#e6e6e6" stroke="#bfbfbf" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.25"/>
                                <path d="M683,35.79c.49-4.86-1.41-6.33-4.4-6.25-5.44,1.33-9,5.06-9.9,12.44a28.47,28.47,0,0,0,1.23,9.49c2.1,5.91,7,4.86,10.39-1" transform="translate(-4.51 -14.6)" fill="#e6e6e6" stroke="#bfbfbf" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.25"/>
                                <path d="M689.24,36.78c2.07,1.69,1.85,6.23-.48,10.12s-5.89,5.67-8,4-1.85-6.23.47-10.13,5.9-5.67,8-4Z" transform="translate(-4.51 -14.6)" fill="#e6e6e6" stroke="#bfbfbf" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.25"/>
                                <path d="M688,52.22l-5-.61Z" transform="translate(-4.51 -14.6)" fill="#e6e6e6" stroke="#bfbfbf" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.25" fillRule="evenodd"/>
                                <path d="M682.68,57c-1.74-.39-2-2.25-.82-5.57" transform="translate(-4.51 -14.6)" fill="#e6e6e6" stroke="#bfbfbf" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.25"/>
                            </g>
                    </g>
                    {/*
                    
                    -----------Labels: [STATIC ELEMENTS]
                    
                    */}
                    <g id="labels-system">
                        
                        <text transform="translate(528.48 51.43) scale(0.94 1)" fontSize="8" fill="#545454" fontFamily="OpenSans-Regular, Open Sans">Engine 3</text>
                        <text transform="translate(644.39 51.43) scale(0.94 1)" fontSize="8" fill="#545454" fontFamily="OpenSans-Regular, Open Sans">Engine 4</text>
                        <text transform="translate(379.54 98.11) scale(0.94 1)" fontSize="6" fill="#545454" fontFamily="OpenSans-Regular, Open Sans">Crossfeed Manifold</text>
                        <text transform="translate(411.94 65.85) scale(0.94 1)" fontSize="6" fill="#545454" fontFamily="OpenSans-Regular, Open Sans">Pressure Xmtr</text>
                        <text transform="translate(552.63 206.75) scale(0.94 1)" fontSize="6" fill="#545454" fontFamily="OpenSans-Regular, Open Sans">Refuel Manifold</text>
                        <text transform="translate(626.82 256) scale(0.94 1)" fontSize="6" fill="#545454" fontFamily="OpenSans-Regular, Open Sans">Right Ext Tank</text>
                        <text transform="translate(385.53 116.71) scale(0.94 1)" fontSize="6" fill="#545454" fontFamily="OpenSans-Regular, Open Sans"><tspan xmlSpace="preserve">Right</tspan><tspan x="0" y="6" xmlSpace="preserve">Aux</tspan><tspan x="0" y="12">Tank</tspan></text>
                        <text transform="translate(504.81 129.83) scale(0.94 1)" fontSize="6" fill="#545454" fontFamily="OpenSans-Regular, Open Sans">No.3 Tank</text>
                        <text transform="translate(672.21 129.83) scale(0.94 1)" fontSize="6" fill="#545454" fontFamily="OpenSans-Regular, Open Sans">No.4 Tank</text>
                    </g>

                    {/*
                    
                    ----------Fuel Heaters: [STATIC ELEMENTS]
                    
                    */}

                    <g id="heaters">
                        <g>
                        <rect x="482.65" y="39.67" width="2.63" height="19.55" rx="1" fill="#e4e4e4" stroke="#999" strokeMiterlimit="10" strokeWidth="0.25"/>
                        <path d="M490.74,55h3.38c.84,0,3.85,1.32,3.85,2.38V71c0,.84-2.57,1.83-3.79,1.83h-3.44C489.66,72.83,487,72,487,71V57.32C487,56.45,489.72,55,490.74,55Z" transform="translate(-4.51 -14.6)" fill="#e4e4e4" stroke="#999" strokeMiterlimit="10" strokeWidth="0.25"/>
                        <g>
                            <rect x="484.14" y="44.94" width="3.86" height="10.41" fill="#e4e4e4" stroke="#4d4d4d" strokeMiterlimit="10" strokeWidth="0.25"/>
                            <line x1="488" y1="45.34" x2="486.35" y2="45.34" fill="#e4e4e4" stroke="#4d4d4d" strokeMiterlimit="10" strokeWidth="0.25"/>
                            <line x1="488" y1="54.98" x2="486.35" y2="54.98" fill="#e4e4e4" stroke="#4d4d4d" strokeMiterlimit="10" strokeWidth="0.25"/>
                            <line x1="488" y1="54.13" x2="486.35" y2="54.13" fill="#e4e4e4" stroke="#4d4d4d" strokeMiterlimit="10" strokeWidth="0.25"/>
                            <line x1="488" y1="53.36" x2="486.35" y2="53.36" fill="#e4e4e4" stroke="#4d4d4d" strokeMiterlimit="10" strokeWidth="0.25"/>
                            <line x1="488" y1="52.56" x2="486.35" y2="52.56" fill="#e4e4e4" stroke="#4d4d4d" strokeMiterlimit="10" strokeWidth="0.25"/>
                            <line x1="488" y1="51.81" x2="486.35" y2="51.81" fill="#e4e4e4" stroke="#4d4d4d" strokeMiterlimit="10" strokeWidth="0.25"/>
                            <line x1="488" y1="50.87" x2="486.35" y2="50.87" fill="#e4e4e4" stroke="#4d4d4d" strokeMiterlimit="10" strokeWidth="0.25"/>
                            <line x1="488" y1="50.11" x2="486.35" y2="50.11" fill="#e4e4e4" stroke="#4d4d4d" strokeMiterlimit="10" strokeWidth="0.25"/>
                            <line x1="488" y1="49.31" x2="486.35" y2="49.31" fill="#e4e4e4" stroke="#4d4d4d" strokeMiterlimit="10" strokeWidth="0.25"/>
                            <line x1="488" y1="48.54" x2="486.35" y2="48.54" fill="#e4e4e4" stroke="#4d4d4d" strokeMiterlimit="10" strokeWidth="0.25"/>
                            <line x1="488" y1="47.72" x2="486.35" y2="47.72" fill="#e4e4e4" stroke="#4d4d4d" strokeMiterlimit="10" strokeWidth="0.25"/>
                            <line x1="488" y1="46.96" x2="486.35" y2="46.96" fill="#e4e4e4" stroke="#4d4d4d" strokeMiterlimit="10" strokeWidth="0.25"/>
                            <line x1="488" y1="46.05" x2="486.35" y2="46.05" fill="#e4e4e4" stroke="#4d4d4d" strokeMiterlimit="10" strokeWidth="0.25"/>
                        </g>
                        <g>
                            <line x1="491.57" y1="45.34" x2="489.91" y2="45.34" fill="#e4e4e4" stroke="#221f20" strokeMiterlimit="10" strokeWidth="0.25"/>
                            <line x1="491.57" y1="54.98" x2="489.91" y2="54.98" fill="#e4e4e4" stroke="#221f20" strokeMiterlimit="10" strokeWidth="0.25"/>
                            <line x1="491.57" y1="54.13" x2="489.91" y2="54.13" fill="#e4e4e4" stroke="#221f20" strokeMiterlimit="10" strokeWidth="0.25"/>
                            <line x1="491.57" y1="53.36" x2="489.91" y2="53.36" fill="#e4e4e4" stroke="#221f20" strokeMiterlimit="10" strokeWidth="0.25"/>
                            <line x1="491.57" y1="52.56" x2="489.91" y2="52.56" fill="#e4e4e4" stroke="#221f20" strokeMiterlimit="10" strokeWidth="0.25"/>
                            <line x1="491.57" y1="51.81" x2="489.91" y2="51.81" fill="#e4e4e4" stroke="#221f20" strokeMiterlimit="10" strokeWidth="0.25"/>
                            <line x1="491.57" y1="50.87" x2="489.91" y2="50.87" fill="#e4e4e4" stroke="#221f20" strokeMiterlimit="10" strokeWidth="0.25"/>
                            <line x1="491.57" y1="50.11" x2="489.91" y2="50.11" fill="#e4e4e4" stroke="#221f20" strokeMiterlimit="10" strokeWidth="0.25"/>
                            <line x1="491.57" y1="49.31" x2="489.91" y2="49.31" fill="#e4e4e4" stroke="#221f20" strokeMiterlimit="10" strokeWidth="0.25"/>
                            <line x1="491.57" y1="48.54" x2="489.91" y2="48.54" fill="#e4e4e4" stroke="#221f20" strokeMiterlimit="10" strokeWidth="0.25"/>
                            <line x1="491.57" y1="47.72" x2="489.91" y2="47.72" fill="#e4e4e4" stroke="#221f20" strokeMiterlimit="10" strokeWidth="0.25"/>
                            <line x1="491.57" y1="46.96" x2="489.91" y2="46.96" fill="#e4e4e4" stroke="#221f20" strokeMiterlimit="10" strokeWidth="0.25"/>
                            <line x1="491.57" y1="46.05" x2="489.91" y2="46.05" fill="#e4e4e4" stroke="#221f20" strokeMiterlimit="10" strokeWidth="0.25"/>
                        </g>
                        <g>
                            <polygon points="487.23 43.23 486.59 43.66 485.96 44.09 485.96 43.23 485.96 42.38 486.59 42.8 487.23 43.23" fill="#e4e4e4" stroke="#999" strokeMiterlimit="10" strokeWidth="0.25" fillRule="evenodd"/>
                            <polygon points="484.14 43.23 484.77 43.66 485.39 44.09 485.39 43.23 485.39 42.38 484.77 42.8 484.14 43.23" fill="#e4e4e4" stroke="#999" strokeMiterlimit="10" strokeWidth="0.25" fillRule="evenodd"/>
                            <line x1="487.17" y1="43.26" x2="491.21" y2="43.26" fill="#e4e4e4" stroke="#999" strokeMiterlimit="10" strokeWidth="0.25"/>
                            <path d="M495.12,58.46a.6.6,0,0,0,.6-.59.61.61,0,0,0-.6-.62.61.61,0,1,0,0,1.21Z" transform="translate(-4.51 -14.6)" fill="#e4e4e4" stroke="#999" strokeMiterlimit="10" strokeWidth="0.25" fillRule="evenodd"/>
                        </g>
                        <line x1="488.76" y1="40.63" x2="488.76" y2="57.96" fill="#e4e4e4" stroke="#999" strokeMiterlimit="10" strokeWidth="0.25"/>
                        </g>
                        <g>
                            <rect x="599.67" y="39.67" width="2.63" height="19.55" rx="1" fill="#e4e4e4" stroke="#999" strokeMiterlimit="10" strokeWidth="0.25"/>
                            <path d="M607.77,55h3.37c.84,0,3.86,1.32,3.86,2.38V71c0,.84-2.58,1.83-3.8,1.83h-3.43c-1.09,0-3.8-.85-3.8-1.83V57.32C604,56.45,606.74,55,607.77,55Z" transform="translate(-4.51 -14.6)" fill="#e4e4e4" stroke="#999" strokeMiterlimit="10" strokeWidth="0.25"/>
                            <g>
                                <rect x="601.16" y="44.94" width="3.86" height="10.41" fill="#e4e4e4" stroke="#4d4d4d" strokeMiterlimit="10" strokeWidth="0.25"/>
                                <line x1="605.02" y1="45.34" x2="603.37" y2="45.34" fill="#e4e4e4" stroke="#4d4d4d" strokeMiterlimit="10" strokeWidth="0.25"/>
                                <line x1="605.02" y1="54.98" x2="603.37" y2="54.98" fill="#e4e4e4" stroke="#4d4d4d" strokeMiterlimit="10" strokeWidth="0.25"/>
                                <line x1="605.02" y1="54.13" x2="603.37" y2="54.13" fill="#e4e4e4" stroke="#4d4d4d" strokeMiterlimit="10" strokeWidth="0.25"/>
                                <line x1="605.02" y1="53.36" x2="603.37" y2="53.36" fill="#e4e4e4" stroke="#4d4d4d" strokeMiterlimit="10" strokeWidth="0.25"/>
                                <line x1="605.02" y1="52.56" x2="603.37" y2="52.56" fill="#e4e4e4" stroke="#4d4d4d" strokeMiterlimit="10" strokeWidth="0.25"/>
                                <line x1="605.02" y1="51.81" x2="603.37" y2="51.81" fill="#e4e4e4" stroke="#4d4d4d" strokeMiterlimit="10" strokeWidth="0.25"/>
                                <line x1="605.02" y1="50.87" x2="603.37" y2="50.87" fill="#e4e4e4" stroke="#4d4d4d" strokeMiterlimit="10" strokeWidth="0.25"/>
                                <line x1="605.02" y1="50.11" x2="603.37" y2="50.11" fill="#e4e4e4" stroke="#4d4d4d" strokeMiterlimit="10" strokeWidth="0.25"/>
                                <line x1="605.02" y1="49.31" x2="603.37" y2="49.31" fill="#e4e4e4" stroke="#4d4d4d" strokeMiterlimit="10" strokeWidth="0.25"/>
                                <line x1="605.02" y1="48.54" x2="603.37" y2="48.54" fill="#e4e4e4" stroke="#4d4d4d" strokeMiterlimit="10" strokeWidth="0.25"/>
                                <line x1="605.02" y1="47.72" x2="603.37" y2="47.72" fill="#e4e4e4" stroke="#4d4d4d" strokeMiterlimit="10" strokeWidth="0.25"/>
                                <line x1="605.02" y1="46.96" x2="603.37" y2="46.96" fill="#e4e4e4" stroke="#4d4d4d" strokeMiterlimit="10" strokeWidth="0.25"/>
                                <line x1="605.02" y1="46.05" x2="603.37" y2="46.05" fill="#e4e4e4" stroke="#4d4d4d" strokeMiterlimit="10" strokeWidth="0.25"/>
                            </g>
                            <g>
                                <line x1="608.59" y1="45.34" x2="606.94" y2="45.34" fill="#e4e4e4" stroke="#221f20" strokeMiterlimit="10" strokeWidth="0.25"/>
                                <line x1="608.59" y1="54.98" x2="606.94" y2="54.98" fill="#e4e4e4" stroke="#221f20" strokeMiterlimit="10" strokeWidth="0.25"/>
                                <line x1="608.59" y1="54.13" x2="606.94" y2="54.13" fill="#e4e4e4" stroke="#221f20" strokeMiterlimit="10" strokeWidth="0.25"/>
                                <line x1="608.59" y1="53.36" x2="606.94" y2="53.36" fill="#e4e4e4" stroke="#221f20" strokeMiterlimit="10" strokeWidth="0.25"/>
                                <line x1="608.59" y1="52.56" x2="606.94" y2="52.56" fill="#e4e4e4" stroke="#221f20" strokeMiterlimit="10" strokeWidth="0.25"/>
                                <line x1="608.59" y1="51.81" x2="606.94" y2="51.81" fill="#e4e4e4" stroke="#221f20" strokeMiterlimit="10" strokeWidth="0.25"/>
                                <line x1="608.59" y1="50.87" x2="606.94" y2="50.87" fill="#e4e4e4" stroke="#221f20" strokeMiterlimit="10" strokeWidth="0.25"/>
                                <line x1="608.59" y1="50.11" x2="606.94" y2="50.11" fill="#e4e4e4" stroke="#221f20" strokeMiterlimit="10" strokeWidth="0.25"/>
                                <line x1="608.59" y1="49.31" x2="606.94" y2="49.31" fill="#e4e4e4" stroke="#221f20" strokeMiterlimit="10" strokeWidth="0.25"/>
                                <line x1="608.59" y1="48.54" x2="606.94" y2="48.54" fill="#e4e4e4" stroke="#221f20" strokeMiterlimit="10" strokeWidth="0.25"/>
                                <line x1="608.59" y1="47.72" x2="606.94" y2="47.72" fill="#e4e4e4" stroke="#221f20" strokeMiterlimit="10" strokeWidth="0.25"/>
                                <line x1="608.59" y1="46.96" x2="606.94" y2="46.96" fill="#e4e4e4" stroke="#221f20" strokeMiterlimit="10" strokeWidth="0.25"/>
                                <line x1="608.59" y1="46.05" x2="606.94" y2="46.05" fill="#e4e4e4" stroke="#221f20" strokeMiterlimit="10" strokeWidth="0.25"/>
                            </g>
                            <g>
                                <polygon points="604.25 43.23 603.62 43.66 602.98 44.09 602.98 43.23 602.98 42.38 603.62 42.8 604.25 43.23" fill="#e4e4e4" stroke="#999" strokeMiterlimit="10" strokeWidth="0.25" fillRule="evenodd"/>
                                <polygon points="601.16 43.23 601.79 43.66 602.41 44.09 602.41 43.23 602.41 42.38 601.79 42.8 601.16 43.23" fill="#e4e4e4" stroke="#999" strokeMiterlimit="10" strokeWidth="0.25" fillRule="evenodd"/>
                                <line x1="604.2" y1="43.26" x2="608.23" y2="43.26" fill="#e4e4e4" stroke="#999" strokeMiterlimit="10" strokeWidth="0.25"/>
                                <path d="M612.15,58.46a.6.6,0,0,0,.6-.59.61.61,0,0,0-.6-.62.61.61,0,1,0,0,1.21Z" transform="translate(-4.51 -14.6)" fill="#e4e4e4" stroke="#999" strokeMiterlimit="10" strokeWidth="0.25" fillRule="evenodd"/>
                            </g>
                            <line x1="605.78" y1="40.63" x2="605.78" y2="57.96" fill="#e4e4e4" stroke="#999" strokeMiterlimit="10" strokeWidth="0.25"/>
                        </g>
                    </g>

                    {/* 
                    
                    ------------Fuel in Tanks ------------
                    
                    */}
                    <g id="fuelInTanks">
                        <path id="fuel_tank_3" d="M532.52,197V151.48s-6.47-2.17-9.68-2c-8.45.55-7.17,3.51-10.64,4-8.17,1.22-7.79-2.3-14.17.32-5.83,2.39-6.46,3.19-9.19,2.3-2-.67-5.43-2.38-9.72-1.2a6,6,0,0,1-7.07-2.48v54.07Z" transform="translate(-4.51 -14.6)" fillRule="evenodd" fill="url(#linear-gradient-18)"/>
                        <path id="fuel_tank_4" d="M701.86,187V151.48s-5.34,3.87-11.5,1.35c-5.71-2.32-10.77,5.08-15.58,2.65-12-6.09-16.34-3.41-20-2.3-3.31,1-5.77,6.92-11.35,4.38-9.58-4.34-11.62-6-18-3.32-4.39,1.86-8.14,5.11-16.16,1.86-3.63-1.47-5.41-4-11.1-5.49-2.34-.61-10.32.33-13,2.61-5.31,4.6-22.35-.74-22.35-.74v44.07Z" transform="translate(-4.51 -14.6)" fillRule="evenodd" fill="url(#linear-gradient-13)"/>
                        <path id="fuel_right_AUX" d="M436.87,209V151.48a19.37,19.37,0,0,0-6.92-1.24c-8.46.55-4.9,3-8.39,3.3-6.1.58-4.09-1.53-10.08-1.53-6.3,0-6.8.7-9.28,2.15-3.81,2.22-4.83-1.77-9.8-2.68v39.07l30.66,18.35Z" transform="translate(-4.51 -14.6)" fillRule="evenodd" fill="url(#linear-gradient-16)"/>
                        <path id="fuel_right_EXT" d="M654.88,283.23c-3.67-5-20.31-7.22-31.53-7.15-22.6.13-21.07-2.86-40.79-5.39-14.27-.81-22.7,4.11-31.49,4.59-16.72.93-20.19-6.81-42.24-2.82-15.69,2.84-32-5.78-31.49,14.09S500,305.44,500,305.44c16.25,1.51,53.49-.23,68.11-.77C600.82,303.34,661.05,291.72,654.88,283.23Z" transform="translate(-4.51 -14.6)" fillRule="evenodd" fill="url(#linear-gradient-14)"/>
                    </g>
                    
                    {/* 
                    
                    **********************************  COMPONENT INSTANTIATION  ***********************************


                    ***********************************************
                    ------------Manifolds Instantiation------------
                    ***********************************************
                    
                    */}
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
                    
                    
                    {/* 
                    
                    ***********************************************
                    ------------Rotary Valves Instantiation--------
                    ***********************************************
                    
                    */}
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
                    
                    {/* 
                    
                    ***********************************************
                    ------------Spring Valve Instantiation --------
                    ***********************************************
                    
                    */}

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

                    {/* 
                    
                    ********************************************
                    ------------Fuel Pumps Instantiation--------
                    ********************************************
                    
                    */}

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

                    {/* 
                    
                    ***************************************************
                    ------------Pressure Switches Instantiation--------
                    ***************************************************
                    
                    */}

                    {this.state.pressureSwitches.map( pressureswitch =>
                        <PressureSwitch
                            key={pressureswitch.id}
                            id={pressureswitch.id}
                            transform={pressureswitch.transform}
                            fuelPresent={pressureswitch.fuelPresent}
                        />
                    )}

                    {/* 
                    ---------Unanimated Spring Valves [STATIC ELEMENTS]

                    */}
                    <g id="unanimated_springValves">
                        <path d="M627,208.51H633c.7.93,1.8,1.12,1.8,2.39h0c0,1.25-1.1,1.46-1.8,2.39H627c-1,0-1.8,3.55-1.8-2.39h0C625.15,205.29,626,208.51,627,208.51Z" transform="translate(-4.51 -14.6)" fill="#949494"/>
                        <g id="springVal_back-3">
                        <rect x="490.76" y="190.69" width="7.03" height="16.1" rx="1.79" fill="#fff"/>
                        <path d="M500.51,205.66a1.41,1.41,0,0,1,1.41,1.41V219.6a1.41,1.41,0,0,1-1.41,1.41h-3.46a1.41,1.41,0,0,1-1.41-1.41V207.07a1.42,1.42,0,0,1,1.41-1.41h3.46m0-.75h-3.46a2.16,2.16,0,0,0-2.16,2.16V219.6a2.16,2.16,0,0,0,2.16,2.16h3.46a2.16,2.16,0,0,0,2.16-2.16V207.07a2.16,2.16,0,0,0-2.16-2.16Z" transform="translate(-4.51 -14.6)" fill="#666"/>
                        </g>
                        <g id="springVal-3">
                        <circle cx="494.27" cy="203.21" r="2.76" fill="#666"/>
                        <path d="M499.82,215.49s-3.71-.3-3.53-1.27c.29-1.63,4.36-1.52,4.36-1.52s-5,.64-4.39-.8c.52-1.14,4.39-1.35,4.39-1.35s-5.19.6-4.47-.87,4.71-1.35,4.71-1.35-5.79.4-4.48-1.13c.86-1,4.48-1.17,4.48-1.17" transform="translate(-4.51 -14.6)" fill="none" stroke="#666" strokeMiterlimit="10" strokeWidth="0.75"/>
                        </g>
                        
                        <g id="springVal_back-5">
                        <path d="M631.91,192.85h12.53a1.78,1.78,0,0,1,1.78,1.78v3.46a1.79,1.79,0,0,1-1.79,1.79H631.91a1.79,1.79,0,0,1-1.79-1.79v-3.46A1.79,1.79,0,0,1,631.91,192.85Z" fill="#fff"/>
                        <path d="M649,207.83a1.41,1.41,0,0,1,1.41,1.41v3.45A1.41,1.41,0,0,1,649,214.1H636.42a1.41,1.41,0,0,1-1.41-1.41v-3.45a1.41,1.41,0,0,1,1.41-1.41H649m0-.75H636.42a2.16,2.16,0,0,0-2.16,2.16v3.45a2.16,2.16,0,0,0,2.16,2.16H649a2.16,2.16,0,0,0,2.16-2.16v-3.45a2.16,2.16,0,0,0-2.16-2.16Z" transform="translate(-4.51 -14.6)" fill="#666"/>
                        </g>
                        <g id="springVal-5">
                        <circle cx="633.7" cy="196.36" r="2.76" fill="#666"/>
                        <path d="M640.53,212s.3-3.7,1.27-3.53c1.63.3,1.52,4.36,1.52,4.36s-.64-5,.8-4.38c1.14.51,1.35,4.38,1.35,4.38s-.59-5.19.87-4.47,1.35,4.71,1.35,4.71-.39-5.78,1.13-4.48c1,.87,1.18,4.48,1.18,4.48" transform="translate(-4.51 -14.6)" fill="none" stroke="#666" strokeMiterlimit="10" strokeWidth="0.75"/>
                        </g>
                        <g>
                        <path d="M628.06,21.55h3.46a1.78,1.78,0,0,1,1.78,1.78V35.86a1.79,1.79,0,0,1-1.79,1.79h-3.46a1.78,1.78,0,0,1-1.78-1.78V23.33A1.78,1.78,0,0,1,628.06,21.55Z" fill="#fff"/>
                        <path d="M636,36.53a1.41,1.41,0,0,1,1.41,1.41V50.46A1.41,1.41,0,0,1,636,51.87h-3.45a1.41,1.41,0,0,1-1.41-1.41V37.94a1.41,1.41,0,0,1,1.41-1.41H636m0-.75h-3.45a2.16,2.16,0,0,0-2.16,2.16V50.46a2.16,2.16,0,0,0,2.16,2.16H636a2.15,2.15,0,0,0,2.16-2.16V37.94A2.15,2.15,0,0,0,636,35.78Z" transform="translate(-4.51 -14.6)" fill="#666"/>
                        </g>
                        <g>
                        <path d="M633.27,41.22s3.7,1.13,3.53,2.1c-.29,1.62-4.36,1.52-4.36,1.52s5-.64,4.39.79c-.52,1.15-4.39,1.35-4.39,1.35s5.19-.59,4.47.88-4.71,1.35-4.71,1.35,5.78-.4,4.48,1.13c-.87,1-4.48,1.17-4.48,1.17" transform="translate(-4.51 -14.6)" fill="none" stroke="#666" strokeMiterlimit="10" strokeWidth="0.75"/>
                        <polygon points="629.79 22.12 626.86 27.06 632.72 27.06 629.79 22.12" fill="#666"/>
                        </g>
                        <g>
                        <path d="M511.62,21.55h3.46a1.78,1.78,0,0,1,1.78,1.78V35.86a1.79,1.79,0,0,1-1.79,1.79h-3.46a1.78,1.78,0,0,1-1.78-1.78V23.33A1.79,1.79,0,0,1,511.62,21.55Z" fill="#fff"/>
                        <path d="M519.59,36.53A1.41,1.41,0,0,1,521,37.94V50.46a1.41,1.41,0,0,1-1.41,1.41h-3.46a1.41,1.41,0,0,1-1.41-1.41V37.94a1.41,1.41,0,0,1,1.41-1.41h3.46m0-.75h-3.46A2.16,2.16,0,0,0,514,37.94V50.46a2.16,2.16,0,0,0,2.16,2.16h3.46a2.16,2.16,0,0,0,2.16-2.16V37.94a2.16,2.16,0,0,0-2.16-2.16Z" transform="translate(-4.51 -14.6)" fill="#666"/>
                        </g>
                        <g>
                        <path d="M516.83,41.22s3.7,1.13,3.52,2.1c-.29,1.62-4.35,1.52-4.35,1.52s5-.64,4.38.79C519.86,46.78,516,47,516,47s5.18-.59,4.47.88-4.71,1.35-4.71,1.35,5.78-.4,4.47,1.13c-.86,1-4.47,1.17-4.47,1.17" transform="translate(-4.51 -14.6)" fill="none" stroke="#666" strokeMiterlimit="10" strokeWidth="0.75"/>
                        <polygon points="513.35 22.12 510.42 27.06 516.28 27.06 513.35 22.12" fill="#666"/>
                        </g>
                        
                        
                        <g>
                        <g>
                            <path d="M691.15,145.9h12.53a1.78,1.78,0,0,1,1.78,1.78v3.46a1.79,1.79,0,0,1-1.79,1.79H691.15a1.79,1.79,0,0,1-1.79-1.79v-3.46A1.79,1.79,0,0,1,691.15,145.9Z" fill="#fff"/>
                            <path d="M708.19,160.88a1.41,1.41,0,0,1,1.41,1.41v3.45a1.41,1.41,0,0,1-1.41,1.41H695.67a1.41,1.41,0,0,1-1.41-1.41v-3.45a1.41,1.41,0,0,1,1.41-1.41h12.52m0-.75H695.67a2.15,2.15,0,0,0-2.16,2.16v3.45a2.15,2.15,0,0,0,2.16,2.16h12.52a2.15,2.15,0,0,0,2.16-2.16v-3.45a2.15,2.15,0,0,0-2.16-2.16Z" transform="translate(-4.51 -14.6)" fill="#666"/>
                        </g>
                        <g>
                            <path d="M699,165.05s1.13-3.7,2.1-3.53c1.62.29,1.52,4.36,1.52,4.36s-.64-5,.8-4.39c1.14.52,1.35,4.39,1.35,4.39s-.6-5.19.87-4.47,1.35,4.71,1.35,4.71-.4-5.78,1.13-4.48c1,.87,1.17,4.48,1.17,4.48" transform="translate(-4.51 -14.6)" fill="none" stroke="#666" strokeMiterlimit="10" strokeWidth="0.75"/>
                            <polygon points="689.94 149.41 694.88 152.34 694.88 146.48 689.94 149.41" fill="#666"/>
                        </g>
                        </g>
                    </g>

                    {/* 
                    
                    ------------Tank Details: [STATIC ELEMENTS] ------------
                    
                    */}
                    
                    <g id="tanks_details">
                        <line x1="477.39" y1="160.39" x2="465.08" y2="160.39" stroke="#737373" strokeLinejoin="round" fill="url(#linear-gradient-23)"/>
                        
                        <polyline points="586.84 180.58 586.84 155.1 577.14 155.1 571.77 158.41" fill="none" stroke="#737373" strokeMiterlimit="10" fillRule="evenodd"/>
                        <polyline points="486.65 190.15 486.65 164.67 481.95 164.67 476.59 167.98" fill="none" stroke="#737373" strokeMiterlimit="10" fillRule="evenodd"/>
                        <line x1="569.37" y1="152.95" x2="557.06" y2="152.95" stroke="#737373" strokeLinejoin="round" fill="url(#linear-gradient-25)"/>
                        <g>
                            <rect x="560.72" y="143.65" width="6.35" height="5.32" stroke="#737373" strokeLinejoin="round" strokeWidth="0.5" fill="url(#linear-gradient-26)"/>
                            <circle cx="563.89" cy="146.31" r="1.28" fill="#737373"/>
                        </g>
                        
                        <g>
                            <rect x="468.11" y="150.78" width="6.35" height="5.32" stroke="#737373" strokeLinejoin="round" strokeWidth="0.5" fill="url(#linear-gradient-28)"/>
                            <circle cx="471.28" cy="153.44" r="1.28" fill="#737373"/>
                        </g>
                        
                        <g>
                            <line x1="397.78" y1="162.68" x2="397.78" y2="165.64" fill="none" stroke="#595959" strokeLinejoin="round" strokeWidth="2"/>
                            <line x1="402.06" y1="162.68" x2="402.06" y2="165.64" fill="none" stroke="#595959" strokeLinejoin="round" strokeWidth="2"/>
                            <rect x="393.02" y="165.46" width="13.53" height="12.42" fill="#4f4f4f" stroke="#949494" strokeLinecap="round" strokeLinejoin="round"/>
                            <g id="rotary_valve-2">
                            <path id="path6519-2" d="M408.86,186.27a4.57,4.57,0,1,1-9.14,0h0a4.57,4.57,0,0,1,9.14,0Z" transform="translate(-4.51 -14.6)" fill="#f5e41f" stroke="#ffe41f" strokeWidth="0.5" fillRule="evenodd"/>
                            <line x1="396.51" y1="171.67" x2="403.08" y2="171.67" fill="#fff" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                            </g>
                            <rect x="394.13" y="157.36" width="11.3" height="5.32" strokeWidth="0.5" stroke="#949494" strokeLinecap="round" strokeLinejoin="round" fill="#4f4f4f"/>
                        </g>
                        <g>
                            <line x1="500.1" y1="169.31" x2="500.1" y2="172.27" fill="none" stroke="#595959" strokeLinejoin="round" strokeWidth="2"/>
                            <line x1="504.39" y1="169.31" x2="504.39" y2="172.27" fill="none" stroke="#595959" strokeLinejoin="round" strokeWidth="2"/>
                            <rect x="495.34" y="172.09" width="13.53" height="12.42" fill="#4f4f4f" stroke="#949494" strokeLinecap="round" strokeLinejoin="round"/>
                            <g id="rotary_valve-3">
                            <path id="path6519-3" d="M511.19,192.9a4.57,4.57,0,0,1-9.14,0h0a4.57,4.57,0,1,1,9.14,0Z" transform="translate(-4.51 -14.6)" fill="#f5e41f" stroke="#ffe41f" strokeWidth="0.5" fillRule="evenodd"/>
                            <line x1="498.84" y1="178.3" x2="505.41" y2="178.3" fill="#fff" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                            </g>
                            <rect x="496.45" y="163.99" width="11.3" height="5.32" strokeWidth="0.5" stroke="#949494" strokeLinecap="round" strokeLinejoin="round" fill="#4f4f4f"/>
                        </g>
                        <g>
                            <line x1="649.95" y1="158.11" x2="649.95" y2="161.07" fill="none" stroke="#595959" strokeLinejoin="round" strokeWidth="2"/>
                            <line x1="654.24" y1="158.11" x2="654.24" y2="161.07" fill="none" stroke="#595959" strokeLinejoin="round" strokeWidth="2"/>
                            <rect x="645.19" y="160.89" width="13.53" height="12.42" fill="#4f4f4f" stroke="#949494" strokeLinecap="round" strokeLinejoin="round"/>
                            <g id="rotary_valve-4">
                            <path id="path6519-4" d="M661,181.7a4.58,4.58,0,0,1-9.15,0h0a4.58,4.58,0,0,1,9.15,0Z" transform="translate(-4.51 -14.6)" fill="#f5e41f" stroke="#ffe41f" strokeWidth="0.5" fillRule="evenodd"/>
                            <line x1="648.68" y1="167.1" x2="655.26" y2="167.1" fill="#fff" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                            </g>
                            <rect x="646.3" y="152.79" width="11.3" height="5.32" strokeWidth="0.5" stroke="#949494" strokeLinecap="round" strokeLinejoin="round" fill="#4f4f4f"/>
                        </g>
                        
                        <g>
                            <line x1="554.99" y1="283.59" x2="554.99" y2="280.63" fill="none" stroke="#595959" strokeLinejoin="round" strokeWidth="2"/>
                            <line x1="550.7" y1="283.59" x2="550.7" y2="280.63" fill="none" stroke="#595959" strokeLinejoin="round" strokeWidth="2"/>
                            <rect x="550.73" y="282.99" width="13.53" height="12.42" fill="#4f4f4f" stroke="#949494" strokeLinecap="round" strokeLinejoin="round" transform="translate(1110.48 563.8) rotate(-180)"/>
                            <g id="rotary_valve-7">
                            <path id="path6519-7" d="M552.93,289.2a4.57,4.57,0,0,1,9.14,0h0a4.57,4.57,0,0,1-9.14,0Z" transform="translate(-4.51 -14.6)" fill="#f5e41f" stroke="#ffe41f" strokeWidth="0.5" fillRule="evenodd"/>
                            <line x1="556.29" y1="274.6" x2="549.63" y2="274.6" fill="#fff" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                            </g>
                            <rect x="551.85" y="298.19" width="11.3" height="5.32" transform="translate(1110.48 587.1) rotate(180)" strokeWidth="0.5" stroke="#949494" strokeLinecap="round" strokeLinejoin="round" fill="#4f4f4f"/>
                        </g> 
                    </g>
                    <g id="dump_masts">
                        <g id="right_fuel_spray" visibility="hidden">
                            <g>
                                <line x1="718.08" y1="261.69" x2="718.72" y2="263.04" fill="none" stroke="#00ce9e" strokeLinecap="round" strokeMiterlimit="10"/>
                                <line x1="719.46" y1="264.6" x2="720.92" y2="267.72" fill="none" stroke="#00ce9e" strokeLinecap="round" strokeMiterlimit="10" strokeDasharray="2.58 1.72"/>
                                <line x1="721.29" y1="268.5" x2="721.93" y2="269.86" fill="none" stroke="#00ce9e" strokeLinecap="round" strokeMiterlimit="10"/>
                            </g>
                            <g>
                                <line x1="716.37" y1="261.69" x2="716.37" y2="263.19" fill="none" stroke="#00ce9e" strokeLinecap="round" strokeMiterlimit="10"/>
                                <line x1="716.37" y1="264.72" x2="716.37" y2="267.78" fill="none" stroke="#00ce9e" strokeLinecap="round" strokeMiterlimit="10" strokeDasharray="2.3 1.53"/>
                                <line x1="716.37" y1="268.55" x2="716.37" y2="270.05" fill="none" stroke="#00ce9e" strokeLinecap="round" strokeMiterlimit="10"/>
                            </g>
                            <g>
                                <line x1="714.68" y1="261.69" x2="714.04" y2="263.04" fill="none" stroke="#00ce9e" strokeLinecap="round" strokeMiterlimit="10"/>
                                <line x1="713.31" y1="264.6" x2="711.84" y2="267.72" fill="none" stroke="#00ce9e" strokeLinecap="round" strokeMiterlimit="10" strokeDasharray="2.58 1.72"/>
                                <line x1="711.47" y1="268.5" x2="710.84" y2="269.86" fill="none" stroke="#00ce9e" strokeLinecap="round" strokeMiterlimit="10"/>
                            </g>
                        </g>
                        <g id="right_dump_mast">
                            <rect x="713.05" y="254.7" width="6.61" height="6.3" fill="#e0e0e0"/>
                            <g>
                                <g>
                                <circle cx="714.55" cy="255.37" r="0.41" fill="#e9e9e9"/>
                                <circle cx="713.66" cy="255.37" r="0.41" fill="#e9e9e9"/>
                                <circle cx="715.47" cy="255.37" r="0.41" fill="#e9e9e9"/>
                                <circle cx="716.38" cy="255.37" r="0.41" fill="#e9e9e9"/>
                                <circle cx="717.27" cy="255.37" r="0.41" fill="#e9e9e9"/>
                                <circle cx="718.18" cy="255.37" r="0.41" fill="#e9e9e9"/>
                                <circle cx="719.07" cy="255.37" r="0.41" fill="#e9e9e9"/>
                            </g>
                                <g>
                                    <circle cx="714.55" cy="256.2" r="0.41" fill="#e9e9e9"/>
                                    <circle cx="713.66" cy="256.2" r="0.41" fill="#e9e9e9"/>
                                    <circle cx="715.47" cy="256.2" r="0.41" fill="#e9e9e9"/>
                                    <circle cx="716.38" cy="256.2" r="0.41" fill="#e9e9e9"/>
                                    <circle cx="717.27" cy="256.2" r="0.41" fill="#e9e9e9"/>
                                    <circle cx="718.18" cy="256.2" r="0.41" fill="#e9e9e9"/>
                                    <circle cx="719.07" cy="256.2" r="0.41" fill="#e9e9e9"/>
                                </g>
                                <g>
                                    <circle cx="714.55" cy="257.03" r="0.41" fill="#e9e9e9"/>
                                    <circle cx="713.66" cy="257.03" r="0.41" fill="#e9e9e9"/>
                                    <circle cx="715.47" cy="257.03" r="0.41" fill="#e9e9e9"/>
                                    <circle cx="716.38" cy="257.03" r="0.41" fill="#e9e9e9"/>
                                    <circle cx="717.27" cy="257.03" r="0.41" fill="#e9e9e9"/>
                                    <circle cx="718.18" cy="257.03" r="0.41" fill="#e9e9e9"/>
                                    <circle cx="719.07" cy="257.03" r="0.41" fill="#e9e9e9"/>
                                </g>
                                <g>
                                    <circle cx="714.55" cy="257.86" r="0.41" fill="#e9e9e9"/>
                                    <circle cx="713.66" cy="257.86" r="0.41" fill="#e9e9e9"/>
                                    <circle cx="715.47" cy="257.86" r="0.41" fill="#e9e9e9"/>
                                    <circle cx="716.38" cy="257.86" r="0.41" fill="#e9e9e9"/>
                                    <circle cx="717.27" cy="257.86" r="0.41" fill="#e9e9e9"/>
                                    <circle cx="718.18" cy="257.86" r="0.41" fill="#e9e9e9"/>
                                    <circle cx="719.07" cy="257.86" r="0.41" fill="#e9e9e9"/>
                                </g>
                                <g>
                                    <circle cx="714.55" cy="258.69" r="0.41" fill="#e9e9e9"/>
                                    <circle cx="713.66" cy="258.69" r="0.41" fill="#e9e9e9"/>
                                    <circle cx="715.47" cy="258.69" r="0.41" fill="#e9e9e9"/>
                                    <circle cx="716.38" cy="258.69" r="0.41" fill="#e9e9e9"/>
                                    <circle cx="717.27" cy="258.69" r="0.41" fill="#e9e9e9"/>
                                    <circle cx="718.18" cy="258.69" r="0.41" fill="#e9e9e9"/>
                                    <circle cx="719.07" cy="258.69" r="0.41" fill="#e9e9e9"/>
                                </g>
                                <g>
                                    <circle cx="714.55" cy="259.52" r="0.41" fill="#e9e9e9"/>
                                    <circle cx="713.66" cy="259.52" r="0.41" fill="#e9e9e9"/>
                                    <circle cx="715.47" cy="259.52" r="0.41" fill="#e9e9e9"/>
                                    <circle cx="716.38" cy="259.52" r="0.41" fill="#e9e9e9"/>
                                    <circle cx="717.27" cy="259.52" r="0.41" fill="#e9e9e9"/>
                                    <circle cx="718.18" cy="259.52" r="0.41" fill="#e9e9e9"/>
                                    <circle cx="719.07" cy="259.52" r="0.41" fill="#e9e9e9"/>
                                </g>
                                <g>
                                    <circle cx="714.55" cy="260.35" r="0.41" fill="#e9e9e9"/>
                                    <circle cx="713.66" cy="260.35" r="0.41" fill="#e9e9e9"/>
                                    <circle cx="715.47" cy="260.35" r="0.41" fill="#e9e9e9"/>
                                    <circle cx="716.38" cy="260.35" r="0.41" fill="#e9e9e9"/>
                                    <circle cx="717.27" cy="260.35" r="0.41" fill="#e9e9e9"/>
                                    <circle cx="718.18" cy="260.35" r="0.41" fill="#e9e9e9"/>
                                    <circle cx="719.07" cy="260.35" r="0.41" fill="#e9e9e9"/>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        );
    }
}

export default App;
