// Embedded configuration data
const onestepData = {
  title: "ZOLL R Series Config MCU 20 - OneStep Config",
  sections: [
    {
      id: "general-settings",
      title: "GENERAL SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["Device Identifier", "", ""],
        ["Configuration Mode Passcode", "00000000", "00000000"],
        ["Code Markers", "Set/Review", "Set/Review"],
      ],
    },
    {
      id: "ecg-settings",
      title: "ECG SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["Notch Filter", "60 Hz", "60 Hz"],
        ["Display Lead on Power-Up", "PADDLES/PADS", "PADDLES/PADS"],
        ["Frequency Response", "0.5-21 Hz", "0.5-21 Hz"],
        ["Gain on Power-Up", "1 cm/mV", "1.5 cm/mV"],
        ["Enable Leads Off", "Yes", "Yes"],
        ["Enable Pacer Detection", "Yes", "Yes"],
        ["Display ECG Scale", "No", "No"],
      ],
    },
    {
      id: "audio-settings",
      title: "AUDIO SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["QRS Volume on Power-Up", "On", "Off"],
        ["Low Battery Tone", "5 Min", "5 Min"],
        ["Enable Corrective Voice Prompts", "Yes", "Yes"],
        ["Voice Prompt Volume (1 = MIN, 3 = MAX)", "2", "3"],
        ["Silence Message Beeps", "No", "No"],
      ],
    },
    {
      id: "basic-defib-settings",
      title: "BASIC DEFIB SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["Defib Default to Pads", "Yes", "Yes"],
        ["Basic Auto Energy Escalation", "Yes", "Yes"],
        ["Retain Sync After Defib", "No", "No"],
        ["Defib Hold Ready Time", "60 sec", "60 sec"],
        ["Enable Remote Sync", "No", "No"],
        ["Highlight Sync On/Off Softkey", "Yes", "Yes"],
      ],
    },
    {
      id: "advisory-defib-settings",
      title: "ADVISORY DEFIB SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["Energy Level: Shock 1", "120 J", "120 J"],
        ["Energy Level: Shock 2", "150 J", "150 J"],
        ["Energy Level: Shock 3", "200 J", "200 J"],
        ["Ped Energy Level: Shock 1", "50 J", "50 J"],
        ["Ped Energy Level: Shock 2", "70 J", "70 J"],
        ["Ped Energy Level: Shock 3", "85 J", "85 J"],
        ["Auto Analyze", "Yes", "Yes"],
        ["Enable Check Pulse Prompt", "No", "No"],
        ["Check Patient Prompt", "Check Patient", "Check Patient"],
        ["Auto Charge in Advisory Mode", "Yes", "Yes"],
        ["Enable Voice in Advisory Mode", "Yes", "Yes"],
        ['Display "Do CPR" Message', "Yes", "Yes"],
        ['CPR Msg After "No Shock Adv."', "Perform CPR", "Perform CPR"],
        ["CPR Message After Shock", "Perform CPR", "Perform CPR"],
        ["Stacked Shocks", "1", "1"],
        ["Restart Analysis After CPR", "No", "No"],
        ["CPR Interval", "2 Minutes", "2 Minutes"],
        ["Stop CPR Prompt", "None", "AED Only"],
      ],
    },
    {
      id: "cpr-settings",
      title: "CPR SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["Enable CPR Voice Prompts", "Yes", "Yes"],
        ["Enable CPR Display", "Yes", "Yes"],
        ["Enable CPR Dashboard", "Yes", "Yes"],
        ["Display Release Bar", "Yes", "Yes"],
        ["Enable CPR Metronome", "Yes", "Yes"],
        ["Target CPR Depth", "2.0 inches", "2.0 inches"],
        ["CPR Depth Units", "inches", "inches"],
        ['Display "Fully Release" Prompt', "No", "No"],
        ["Display Filtered ECG as Top Trace", "No", "No"],
        ["Metronome Tone", "Standard", "Alternate 1"],
      ],
    },
    {
      id: "pace-settings",
      title: "PACE SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["Pace Rate Setting on Power-Up", "70 ppm", "70 ppm"],
        ["Async/Fixed Softkey in Pace Mode", "Yes", "Yes"],
        ["Async or Fixed Pace Labels", "Async", "Fixed"],
      ],
    },
    {
      id: "alarms-settings",
      title: "ALARMS SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["Alarm Limits at Power Up", "Set/Review", "Set/Review"],
        ["Alarms Active at Power Up", "No", "No"],
      ],
    },
    {
      id: "display-settings",
      title: "DISPLAY SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["Display Time", "Elapsed Time", "Elapsed Time"],
        ["Select Trace 2 at Power Up", "Filtered ECG", "Filtered ECG"],
        ["Select Trace 3 at Power Up", "Off", "Off"],
        ["ECG Color", "Green", "Green"],
        ["SPO2 Color", "Cyan", "Cyan"],
        ["CPR Color", "Purple", "Purple"],
        ["EtCO2 Color", "Yellow", "Yellow"],
        ["NIBP Color", "White", "White"],
        ["SPO2 at Power Up", "Yes", "Yes"],
        ["Display Shock Count in Manual Mode", "No", "Yes"],
      ],
    },
    {
      id: "printer-report-settings",
      title: "PRINTER & REPORT SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["Set Report Restart Delays", "6 Hours", "6 Hours"],
        ["Auto Generate Strips", "Yes", "Yes"],
        ["Print 3 Leads When Leads Sel.", "No", "No"],
      ],
    },
    {
      id: "readiness-test-settings",
      title: "READINESS TEST SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["Automatic Readiness Test", "Once a Day", "Once a Day"],
        ["Readiness Test Time", "12:00 A.M.", "12:00 A.M."],
        ["Print Readiness Test Results", "Only If Fail", "Only If Fail"],
        ["Enable Readiness Test Audible Alert", "No", "No"],
        ["One Step Padz Installed", "CPR/MwP/Complete", "CPR/MwP/Complete"],
      ],
    },
    {
      id: "aed-mode-settings",
      title: "AED MODE SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["Display ECG in AED Mode", "Yes", "Yes"],
        ["Display HR in AED Mode", "No", "No"],
        ["Manual Confirm Enable", "No", "No"],
        ["Extra CPR Interval Before 1st Analysis", "No", "No"],
        ["Duration of Extra CPR Interval", "2 Minutes", "2 Minutes"],
        ["Display Remaining CPR Timer", "Yes", "Yes"],
      ],
    },
    {
      id: "nibp-settings",
      title: "NIBP SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["Blood Pressure Units", "mmHg", "mmHg"],
        ["Trigger NIBP Meas on BP Alarm", "Yes", "Yes"],
        ["Trigger NIBP Meas on HR Alarm", "No", "No"],
        ["NIBP Auto Interval Default", "5 Min", "5 Min"],
        ["Adult Initial Cuff Inflation", "160 mmHg", "160 mmHg"],
        ["Pediatric Initial Cuff Inflation", "120 mmHg", "120 mmHg"],
        ["Neonatal Initial Cuff Inflation", "90 mmHg", "90 mmHg"],
        ["NIBP Patient Mode at Power Up", "Adult", "Adult"],
        ["NIBP Button Press & Hold", "Auto", "Auto"],
        ["Enable Motion Tolerance", "Yes", "Yes"],
      ],
    },
    {
      id: "etco2-settings",
      title: "ETCO2 SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["DEFAULT ETCO2 UNITS", "mmHg", "mmHg"],
        ["DISPLAYED ZOOM LEVEL", "0-50", "0-50"],
        ["DEFAULT ETCO2 COMP SETTING", "None", "O2"],
        ["POWER SAVE MODE AT POWER UP", "No", "No"],
        ["ETCO2 AVERAGE ON POWER UP", "10 secs", "10 secs"],
      ],
    },
  ],
};

const proceduralData = {
  title: "ZOLL R Series Config MCU 20 - Procedural Defibs Only!",
  sections: [
    {
      id: "general-settings",
      title: "GENERAL SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["Device Identifier", "", ""],
        ["Configuration Mode Passcode", "00000000", "00000000"],
        ["Code Markers", "Set/Review", "Set/Review"],
      ],
    },
    {
      id: "ecg-settings",
      title: "ECG SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["Notch Filter", "60 Hz", "60 Hz"],
        ["Display Lead on Power-Up", "PADDLES/PADS", "PADDLES/PADS"],
        ["Frequency Response", "0.5-21 Hz", "0.5-21 Hz"],
        ["Gain on Power-Up", "1 cm/mV", "1.5 cm/mV"],
        ["Enable Leads Off", "Yes", "Yes"],
        ["Enable Pacer Detection", "Yes", "Yes"],
        ["Display ECG Scale", "No", "No"],
      ],
    },
    {
      id: "audio-settings",
      title: "AUDIO SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["QRS Volume on Power-Up", "On", "Off"],
        ["Low Battery Tone", "5 Min", "5 Min"],
        ["Enable Corrective Voice Prompts", "Yes", "Yes"],
        ["Voice Prompt Volume (1 = MIN, 3 = MAX)", "2", "1"],
        ["Silence Message Beeps", "No", "Yes"],
      ],
    },
    {
      id: "basic-defib-settings",
      title: "BASIC DEFIB SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["Defib Default to Pads", "Yes", "Yes"],
        ["Basic Auto Energy Escalation", "Yes", "Yes"],
        ["Retain Sync After Defib", "No", "No"],
        ["Defib Hold Ready Time", "60 sec", "60 sec"],
        ["Enable Remote Sync", "No", "No"],
        ["Highlight Sync On/Off Softkey", "Yes", "Yes"],
      ],
    },
    {
      id: "advisory-defib-settings",
      title: "ADVISORY DEFIB SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["Energy Level: Shock 1", "120 J", "120 J"],
        ["Energy Level: Shock 2", "150 J", "150 J"],
        ["Energy Level: Shock 3", "200 J", "200 J"],
        ["Ped Energy Level: Shock 1", "50 J", "50 J"],
        ["Ped Energy Level: Shock 2", "70 J", "70 J"],
        ["Ped Energy Level: Shock 3", "85 J", "85 J"],
        ["Auto Analyze", "Yes", "Yes"],
        ["Enable Check Pulse Prompt", "No", "No"],
        ["Check Patient Prompt", "Check Patient", "Check Patient"],
        ["Auto Charge in Advisory Mode", "Yes", "Yes"],
        ["Enable Voice in Advisory Mode", "Yes", "No"],
        ['Display "Do CPR" Message', "Yes", "Yes"],
        ['CPR Msg After "No Shock Adv."', "Perform CPR", "Perform CPR"],
        ["CPR Message After Shock", "Perform CPR", "Perform CPR"],
        ["Stacked Shocks", "1", "1"],
        ["Restart Analysis After CPR", "No", "No"],
        ["CPR Interval", "2 Minutes", "2 Minutes"],
        ["Stop CPR Prompt", "None", "AED Only"],
      ],
    },
    {
      id: "cpr-settings",
      title: "CPR SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["Enable CPR Voice Prompts", "Yes", "Yes"],
        ["Enable CPR Display", "Yes", "No"],
        ["Enable CPR Dashboard", "Yes", "No"],
        ["Display Release Bar", "Yes", "Yes"],
        ["Enable CPR Metronome", "Yes", "Yes"],
        ["Target CPR Depth", "2.0 inches", "2.0 inches"],
        ["CPR Depth Units", "inches", "inches"],
        ['Display "Fully Release" Prompt', "No", "No"],
        ["Display Filtered ECG as Top Trace", "No", "No"],
        ["Metronome Tone", "Standard", "Alternate 1"],
      ],
    },
    {
      id: "pace-settings",
      title: "PACE SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["Pace Rate Setting on Power-Up", "70 ppm", "70 ppm"],
        ["Async/Fixed Softkey in Pace Mode", "Yes", "Yes"],
        ["Async or Fixed Pace Labels", "Async", "Fixed"],
      ],
    },
    {
      id: "alarms-settings",
      title: "ALARMS SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["Alarm Limits at Power Up", "Set/Review", "Set/Review"],
        ["Alarms Active at Power Up", "No", "No"],
      ],
    },
    {
      id: "display-settings",
      title: "DISPLAY SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["Display Time", "Elapsed Time", "Elapsed Time"],
        ["Select Trace 2 at Power Up", "Filtered ECG", "Off"],
        ["Select Trace 3 at Power Up", "Off", "Off"],
        ["ECG Color", "Green", "Green"],
        ["SPO2 Color", "Cyan", "Cyan"],
        ["CPR Color", "Purple", "Purple"],
        ["EtCO2 Color", "Yellow", "Yellow"],
        ["NIBP Color", "White", "White"],
        ["SPO2 at Power Up", "Yes", "Yes"],
        ["Display Shock Count in Manual Mode", "No", "Yes"],
      ],
    },
    {
      id: "printer-report-settings",
      title: "PRINTER & REPORT SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["Set Report Restart Delays", "6 Hours", "6 Hours"],
        ["Auto Generate Strips", "Yes", "Yes"],
        ["Print 3 Leads When Leads Sel.", "No", "No"],
      ],
    },
    {
      id: "readiness-test-settings",
      title: "READINESS TEST SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["Automatic Readiness Test", "Once a Day", "Once a Day"],
        ["Readiness Test Time", "12:00 A.M.", "12:00 A.M."],
        ["Print Readiness Test Results", "Only If Fail", "Only If Fail"],
        ["Enable Readiness Test Audible Alert", "No", "No"],
        ["One Step Padz Installed", "CPR/MwP/Complete", "Base"],
      ],
    },
    {
      id: "aed-mode-settings",
      title: "AED MODE SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["Display ECG in AED Mode", "Yes", "Yes"],
        ["Display HR in AED Mode", "No", "No"],
        ["Manual Confirm Enable", "No", "No"],
        ["Extra CPR Interval Before 1st Analysis", "No", "No"],
        ["Duration of Extra CPR Interval", "2 Minutes", "2 Minutes"],
        ["Display Remaining CPR Timer", "Yes", "Yes"],
      ],
    },
    {
      id: "nibp-settings",
      title: "NIBP SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["Blood Pressure Units", "mmHg", "mmHg"],
        ["Trigger NIBP Meas on BP Alarm", "Yes", "Yes"],
        ["Trigger NIBP Meas on HR Alarm", "No", "No"],
        ["NIBP Auto Interval Default", "5 Min", "5 Min"],
        ["Adult Initial Cuff Inflation", "160 mmHg", "160 mmHg"],
        ["Pediatric Initial Cuff Inflation", "120 mmHg", "120 mmHg"],
        ["Neonatal Initial Cuff Inflation", "90 mmHg", "90 mmHg"],
        ["NIBP Patient Mode at Power Up", "Adult", "Adult"],
        ["NIBP Button Press & Hold", "Auto", "Auto"],
        ["Enable Motion Tolerance", "Yes", "Yes"],
      ],
    },
    {
      id: "etco2-settings",
      title: "ETCO2 SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["DEFAULT ETCO2 UNITS", "mmHg", "mmHg"],
        ["DISPLAYED ZOOM LEVEL", "0-50", "0-50"],
        ["DEFAULT ETCO2 COMP SETTING", "None", "O2"],
        ["POWER SAVE MODE AT POWER UP", "No", "No"],
        ["ETCO2 AVERAGE ON POWER UP", "10 secs", "10 secs"],
      ],
    },
  ],
};

const nicuData = {
  title: "ZOLL R Series Config MCU 20 - NICU Defibs Only!",
  sections: [
    {
      id: "general-settings",
      title: "GENERAL SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["Device Identifier", "", ""],
        ["Configuration Mode Passcode", "00000000", "00000000"],
        ["Code Markers", "Set/Review", "Set/Review"],
      ],
    },
    {
      id: "ecg-settings",
      title: "ECG SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["Notch Filter", "60 Hz", "60 Hz"],
        ["Display Lead on Power-Up", "PADDLES/PADS", "PADDLES/PADS"],
        ["Frequency Response", "0.5-21 Hz", "0.5-21 Hz"],
        ["Gain on Power-Up", "1 cm/mV", "1.5 cm/mV"],
        ["Enable Leads Off", "Yes", "Yes"],
        ["Enable Pacer Detection", "Yes", "Yes"],
        ["Display ECG Scale", "No", "No"],
      ],
    },
    {
      id: "audio-settings",
      title: "AUDIO SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["QRS Volume on Power-Up", "On", "Off"],
        ["Low Battery Tone", "5 Min", "5 Min"],
        ["Enable Corrective Voice Prompts", "Yes", "Yes"],
        ["Voice Prompt Volume (1 = MIN, 3 = MAX)", "2", "3"],
        ["Silence Message Beeps", "No", "No"],
      ],
    },
    {
      id: "basic-defib-settings",
      title: "BASIC DEFIB SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["Defib Default to Pads", "Yes", "Yes"],
        ["Basic Auto Energy Escalation", "Yes", "No"],
        ["Retain Sync After Defib", "No", "No"],
        ["Defib Hold Ready Time", "60 sec", "60 sec"],
        ["Enable Remote Sync", "No", "No"],
        ["Highlight Sync On/Off Softkey", "Yes", "Yes"],
      ],
    },
    {
      id: "advisory-defib-settings",
      title: "ADVISORY DEFIB SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["Energy Level: Shock 1", "120 J", "1 J"],
        ["Energy Level: Shock 2", "150 J", "1 J"],
        ["Energy Level: Shock 3", "200 J", "1 J"],
        ["Ped Energy Level: Shock 1", "50 J", "1 J"],
        ["Ped Energy Level: Shock 2", "70 J", "1 J"],
        ["Ped Energy Level: Shock 3", "85 J", "1 J"],
        ["Auto Analyze", "Yes", "Yes"],
        ["Enable Check Pulse Prompt", "No", "No"],
        ["Check Patient Prompt", "Check Patient", "Check Patient"],
        ["Auto Charge in Advisory Mode", "Yes", "Yes"],
        ["Enable Voice in Advisory Mode", "Yes", "Yes"],
        ['Display "Do CPR" Message', "Yes", "Yes"],
        ['CPR Msg After "No Shock Adv."', "Perform CPR", "Perform CPR"],
        ["CPR Message After Shock", "Perform CPR", "Perform CPR"],
        ["Stacked Shocks", "1", "1"],
        ["Restart Analysis After CPR", "No", "No"],
        ["CPR Interval", "2 Minutes", "2 Minutes"],
        ["Stop CPR Prompt", "None", "AED Only"],
      ],
    },
    {
      id: "cpr-settings",
      title: "CPR SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["Enable CPR Voice Prompts", "Yes", "Yes"],
        ["Enable CPR Display", "Yes", "Yes"],
        ["Enable CPR Dashboard", "Yes", "Yes"],
        ["Display Release Bar", "Yes", "Yes"],
        ["Enable CPR Metronome", "Yes", "Yes"],
        ["Target CPR Depth", "2.0 inches", "2.0 inches"],
        ["CPR Depth Units", "inches", "inches"],
        ['Display "Fully Release" Prompt', "No", "No"],
        ["Display Filtered ECG as Top Trace", "No", "No"],
        ["Metronome Tone", "Standard", "Alternate 1"],
      ],
    },
    {
      id: "pace-settings",
      title: "PACE SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["Pace Rate Setting on Power-Up", "70 ppm", "70 ppm"],
        ["Async/Fixed Softkey in Pace Mode", "Yes", "Yes"],
        ["Async or Fixed Pace Labels", "Async", "Fixed"],
      ],
    },
    {
      id: "alarms-settings",
      title: "ALARMS SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["Alarm Limits at Power Up", "Set/Review", "Set/Review"],
        ["Alarms Active at Power Up", "No", "No"],
      ],
    },
    {
      id: "display-settings",
      title: "DISPLAY SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["Display Time", "Elapsed Time", "Elapsed Time"],
        ["Select Trace 2 at Power Up", "Filtered ECG", "Filtered ECG"],
        ["Select Trace 3 at Power Up", "Off", "Off"],
        ["ECG Color", "Green", "Green"],
        ["SPO2 Color", "Cyan", "Cyan"],
        ["CPR Color", "Purple", "Purple"],
        ["EtCO2 Color", "Yellow", "Yellow"],
        ["NIBP Color", "White", "White"],
        ["SPO2 at Power Up", "Yes", "Yes"],
        ["Display Shock Count in Manual Mode", "No", "Yes"],
      ],
    },
    {
      id: "printer-report-settings",
      title: "PRINTER & REPORT SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["Set Report Restart Delays", "6 Hours", "6 Hours"],
        ["Auto Generate Strips", "Yes", "Yes"],
        ["Print 3 Leads When Leads Sel.", "No", "No"],
      ],
    },
    {
      id: "readiness-test-settings",
      title: "READINESS TEST SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["Automatic Readiness Test", "Once a Day", "Once a Day"],
        ["Readiness Test Time", "12:00 A.M.", "12:00 A.M."],
        ["Print Readiness Test Results", "Only If Fail", "Only If Fail"],
        ["Enable Readiness Test Audible Alert", "No", "No"],
        ["One Step Padz Installed", "CPR/MwP/Complete", "Base"],
      ],
    },
    {
      id: "aed-mode-settings",
      title: "AED MODE SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["Display ECG in AED Mode", "Yes", "Yes"],
        ["Display HR in AED Mode", "No", "No"],
        ["Manual Confirm Enable", "No", "No"],
        ["Extra CPR Interval Before 1st Analysis", "No", "No"],
        ["Duration of Extra CPR Interval", "2 Minutes", "2 Minutes"],
        ["Display Remaining CPR Timer", "Yes", "Yes"],
      ],
    },
    {
      id: "nibp-settings",
      title: "NIBP SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["Blood Pressure Units", "mmHg", "mmHg"],
        ["Trigger NIBP Meas on BP Alarm", "Yes", "Yes"],
        ["Trigger NIBP Meas on HR Alarm", "No", "No"],
        ["NIBP Auto Interval Default", "5 Min", "5 Min"],
        ["Adult Initial Cuff Inflation", "160 mmHg", "160 mmHg"],
        ["Pediatric Initial Cuff Inflation", "120 mmHg", "120 mmHg"],
        ["Neonatal Initial Cuff Inflation", "90 mmHg", "90 mmHg"],
        ["NIBP Patient Mode at Power Up", "Adult", "Adult"],
        ["NIBP Button Press & Hold", "Auto", "Auto"],
        ["Enable Motion Tolerance", "Yes", "Yes"],
      ],
    },
    {
      id: "etco2-settings",
      title: "ETCO2 SETTINGS",
      headers: ["Configuration Item", "Default Value", "ZOLL Team Rec's"],
      rows: [
        ["DEFAULT ETCO2 UNITS", "mmHg", "mmHg"],
        ["DISPLAYED ZOOM LEVEL", "0-50", "0-50"],
        ["DEFAULT ETCO2 COMP SETTING", "None", "O2"],
        ["POWER SAVE MODE AT POWER UP", "No", "No"],
        ["ETCO2 AVERAGE ON POWER UP", "10 secs", "10 secs"],
      ],
    },
  ],
};

const zenixGeneralData = {
  title: "ZOLL Zenix Config Tables - General Config",
  sections: [
    {
      id: "device-identification",
      title: "DEVICE IDENTIFICATION",
      headers: ["Configuration Item", "Default Value", "Recommended"],
      rows: [
        ["HR/PR Tone", "ON/OFF", "OFF"],
        ["Enable Voice Prompts", "YES/NO", "YES"],
        ["Default Volume", "1,2,3,4,5,6,7,8,9,10", "9"],
        ["Minimum Volume", "1,2,3,4,5,6,7,8,9,10", "1"],
      ],
    },
    {
      id: "accuvent-bvm",
      title: "ACCUVENT/BVM",
      headers: ["Configuration Item", "Default Value", "Recommended"],
      rows: [
        [
          "Default Tidal Volume",
          "300 mL, 350 mL, 400 mL, 450 mL, 500 mL, 550 mL, 600 mL, 650 mL, 700 mL",
          "450 mL",
        ],
        [
          "Default Target Breath Rate",
          "OFF, 8, 9, 10, 11, 12, 14, 16, 20, 25, 30:2",
          "30:2",
        ],
        [
          "Target CPR Pads Breath Rate",
          "OFF, 8, 9, 10, 11, 12, 14, 16, 20, 25, 30:2",
          "30:2",
        ],
        ["Auto Display VT Bar Graph", "ON/OFF", "OFF"],
      ],
    },
    {
      id: "pacer",
      title: "PACER",
      headers: ["Configuration Item", "Default Value", "Recommended"],
      rows: [
        [
          "Pacer Rate (PPM)",
          "30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120",
          "70 PPM",
        ],
        ["Allow Fixed Pacer Mode", "YES/NO", "YES"],
      ],
    },
    {
      id: "aed-advisory-general",
      title: "AED / ADVISORY GENERAL",
      headers: ["Configuration Item", "Default Value", "Recommended"],
      rows: [
        ["Power Up Mode", "AED/MANUAL", "AED"],
        [
          "Default Patient Mode",
          "ADULT/PEDIATRIC/NEONATE",
          "ADULT",
        ],
        [
          "Manual Mode Analysis (Analyze Button)",
          "SINGLE ANALYSIS/CPR PROTOCOL",
          "CPR PROTOCOL",
        ],
        [
          "Enable RapidShock",
          "OFF, AED and CPR Protocol, AED Mode Only",
          "AED & CPR PROTOCOL",
        ],
        ["Disarm Timeout", "30 SECONDS/60 SECONDS", "60 SECONDS"],
      ],
    },
    {
      id: "cpr",
      title: "CPR",
      headers: ["Configuration Item", "Default Value", "Recommended"],
      rows: [
        ["Auto Add Filtered ECG", "ON/OFF", "ON"],
        ["Auto Display Compression Trace", "ON/OFF", "OFF"],
        ["Metronome Rate", "105", "110"],
      ],
    },
    {
      id: "alarms",
      title: "ALARMS",
      headers: ["Configuration Item", "Default Value", "Recommended"],
      rows: [
        ["Alarm Audio", "ON/OFF", "OFF"],
      ],
    },
    {
      id: "localization",
      title: "LOCALIZATION",
      headers: ["Configuration Item", "Default Value", "Recommended"],
      rows: [
        ["Time Format", "12 HOURS/24 HOURS", "24 HOURS"],
        ["Time Zone", "UTC OFFSET", "UTC OFFSET = -5"],
        ["Length Units", "IN/CM", "IN"],
        ["Temp Units", "F/C", "F"],
      ],
    },
    {
      id: "printer-snapshot",
      title: "PRINTER SNAPSHOT",
      headers: ["Configuration Item", "Default Value", "Recommended"],
      rows: [
        ["Print on Analysis Results", "ON/OFF", ""],
        ["Print on Snapshot", "ON/OFF", ""],
      ],
    },
    {
      id: "defib-general",
      title: "DEFIB GENERAL",
      headers: ["Configuration Item", "Default Value", "Recommended"],
      rows: [
        ["Basic Auto Energy Escalation", "YES/NO", ""],
        ["Sync After Cardioversion", "YES/NO", ""],
        ["Disarm Timeout", "60 SECONDS/120 SECONDS", ""],
      ],
    },
    {
      id: "defib-adult",
      title: "DEFIB PATIENT DEPENDENT - ADULT",
      headers: ["Configuration Item", "Default Value", "Recommended"],
      rows: [
        [
          "Shock Energy 1",
          "1-10, 15, 20, 30, 50, 70, 85, 100, 120, 150, 200",
          "",
        ],
        [
          "Shock Energy 2",
          "1-10, 15, 20, 30, 50, 70, 85, 100, 120, 150, 200",
          "",
        ],
        [
          "Shock Energy 3",
          "1-10, 15, 20, 30, 50, 70, 85, 100, 120, 150, 200",
          "",
        ],
      ],
    },
    {
      id: "defib-pediatric",
      title: "DEFIB PATIENT DEPENDENT - PEDIATRIC",
      headers: ["Configuration Item", "Default Value", "Recommended"],
      rows: [
        [
          "Shock Energy 1",
          "1-10, 15, 20, 30, 50, 70, 85, 100, 120, 150, 200",
          "",
        ],
        [
          "Shock Energy 2",
          "1-10, 15, 20, 30, 50, 70, 85, 100, 120, 150, 200",
          "",
        ],
        [
          "Shock Energy 3",
          "1-10, 15, 20, 30, 50, 70, 85, 100, 120, 150, 200",
          "",
        ],
      ],
    },
    {
      id: "defib-neonate",
      title: "DEFIB PATIENT DEPENDENT - NEONATE",
      headers: ["Configuration Item", "Default Value", "Recommended"],
      rows: [
        [
          "Shock Energy 1",
          "1,2,3,4,5,6,7,8,9,10,15,20,30,50,70,85,100,120,150,200",
          "",
        ],
        [
          "Shock Energy 2",
          "1,2,3,4,5,6,7,8,9,10,15,20,30,50,70,85,100,120,150,200",
          "",
        ],
        [
          "Shock Energy 3",
          "1,2,3,4,5,6,7,8,9,10,15,20,30,50,70,85,100,120,150,200",
          "",
        ],
      ],
    },
    {
      id: "readiness-test",
      title: "READINESS TEST",
      headers: ["Configuration Item", "Default Value", "Recommended"],
      rows: [
        ["Automatic Readiness Test", "OFF/ONCE A DAY", ""],
        ["Readiness Test Time", "0000 HOURS", ""],
        ["Self Test Enable Pads", "YES/NO", ""],
        ["Print Readiness Test Results", "ON/OFF/ONLY IF FAIL", ""],
      ],
    },
  ],
};

const zenixProceduralData = JSON.parse(JSON.stringify(zenixGeneralData));
zenixProceduralData.title = "ZOLL Zenix Config Tables - Procedural Config";

// Global variables for modal
let capturedCanvas = null; // full-page canvas used by the PNG screenshot
let capturedPages = []; // one canvas per US Letter page used by the PDF export
let exportType = "pdf"; // "png" or "pdf"

/* ---------------------------------------------------------------------------
 * Paginated layout
 *
 * Both the PDF export and browser printing render an off-screen stack of
 * fixed-size pages instead of one continuous strip. Dimensions are CSS pixels
 * at 96dpi and mirror the values in styles.css:
 *
 *   US Letter 8.5in x 11in, 0.5in margins -> 7.5in x 10in of content
 *   7.5in -> 720px, 10in -> 960px (page boxes are kept a little shorter so
 *   rounding in the print engine can never spill one page onto two sheets).
 * ------------------------------------------------------------------------- */
const PRINT_LAYOUT = {
  pageWidthPx: 720,
  pageHeightPx: 950,
  headerHeightPx: 70, // running header repeated at the top of every page
  footerHeightPx: 34, // strip reserved at the bottom of every page
  blockGapPx: 22, // gap between two blocks on the same page
  captureScale: 2, // html2canvas oversampling (~192 dpi in the PDF)
  sheetWidthMm: 215.9, // US Letter, portrait
  marginMm: 12.7, // 0.5in
};

const PX_TO_MM = 25.4 / 96;

// Vertical space available for content once the running header and footer
// strips are reserved.
function printableBodyHeight() {
  return (
    PRINT_LAYOUT.pageHeightPx -
    PRINT_LAYOUT.headerHeightPx -
    PRINT_LAYOUT.footerHeightPx
  );
}

// The blocks that pagination treats as indivisible: each table section. A
// block is never broken across a page. (The title block is not included here
// - every printed page gets its own compact running header instead; see
// buildPageHeader().)
function collectPrintBlocks() {
  const blocks = [];

  document
    .querySelectorAll("#content-container .table-section")
    .forEach((section) => blocks.push(section));

  return blocks;
}

// Build the running header repeated at the top of every printed page: the
// logo plus the document title and hospital name, so a reader can tell which
// report page 5 belongs to without paging back to page 1.
function buildPageHeader(titleText, subtitleText) {
  const header = document.createElement("div");
  header.className = "print-page-header";

  const logo = document.createElement("img");
  logo.className = "print-page-header-logo";
  logo.src = "logo-ce.png";
  logo.alt = "ZOLL Clinical Education";
  header.appendChild(logo);

  const textWrap = document.createElement("div");
  textWrap.className = "print-page-header-text";

  const titleEl = document.createElement("div");
  titleEl.className = "print-page-header-title";
  titleEl.textContent = titleText;
  textWrap.appendChild(titleEl);

  if (subtitleText) {
    const subtitleEl = document.createElement("div");
    subtitleEl.className = "print-page-header-subtitle";
    subtitleEl.textContent = subtitleText;
    textWrap.appendChild(subtitleEl);
  }

  header.appendChild(textWrap);
  return header;
}

// Clone a block for the print layout, dropping ids and editing affordances so
// the copy cannot collide with the live page.
function preparePrintBlock(source) {
  const block = source.cloneNode(true);
  block.classList.add("print-block");
  block.removeAttribute("id");
  block.removeAttribute("contenteditable");
  block.querySelectorAll("[id]").forEach((el) => el.removeAttribute("id"));
  block
    .querySelectorAll("[contenteditable]")
    .forEach((el) => el.removeAttribute("contenteditable"));
  return block;
}

function destroyPrintLayout() {
  const existing = document.getElementById("print-root");
  if (existing && existing.parentNode) {
    existing.parentNode.removeChild(existing);
  }
}

/**
 * Build the off-screen page stack.
 *
 * Blocks are placed in document order and packed onto the current page until
 * the next one no longer fits, at which point a new page is started. That keeps
 * every table whole while still filling each sheet, so pages do not end up
 * mostly blank. Returns the array of page elements.
 */
function buildPrintLayout() {
  destroyPrintLayout();

  const root = document.createElement("div");
  root.id = "print-root";
  root.className = "print-root";
  document.body.appendChild(root);

  const titleEl = document.getElementById("page-title");
  const subtitleEl = document.querySelector(".sub-title");
  const titleText = titleEl ? titleEl.textContent.trim() : "";
  const subtitleText = subtitleEl ? subtitleEl.textContent.trim() : "";

  const maxBodyHeight = printableBodyHeight();
  const pages = [];
  let pageBody = null;
  let usedHeight = 0;

  function startPage() {
    const page = document.createElement("div");
    page.className = "print-page";
    page.appendChild(buildPageHeader(titleText, subtitleText));

    pageBody = document.createElement("div");
    pageBody.className = "print-page-body";
    page.appendChild(pageBody);

    root.appendChild(page);
    pages.push(page);
    usedHeight = 0;
  }

  startPage();

  collectPrintBlocks().forEach((source) => {
    const block = preparePrintBlock(source);

    // Measure inside the page so the block is laid out at print width.
    pageBody.appendChild(block);
    let blockHeight = block.offsetHeight;

    // A block taller than a whole page is scaled down rather than split.
    if (blockHeight > maxBodyHeight) {
      const scale = maxBodyHeight / blockHeight;
      block.style.transformOrigin = "top center";
      block.style.transform = "scale(" + scale + ")";
      block.style.height = maxBodyHeight + "px";
      blockHeight = maxBodyHeight;
    }

    const gap = usedHeight > 0 ? PRINT_LAYOUT.blockGapPx : 0;
    if (usedHeight > 0 && usedHeight + gap + blockHeight > maxBodyHeight) {
      startPage();
      pageBody.appendChild(block);
      usedHeight = blockHeight;
    } else {
      usedHeight += gap + blockHeight;
    }
  });

  // Footers can only be numbered once the total page count is known.
  pages.forEach((page, index) => {
    const footer = document.createElement("div");
    footer.className = "print-page-footer";
    footer.textContent = "Page " + (index + 1) + " of " + pages.length;
    page.appendChild(footer);
  });

  return pages;
}

// Rasterize each page, one at a time, into its own canvas. The footer is left
// out of the image because the PDF draws it as real (selectable) text.
function capturePrintPages(pages) {
  return pages.reduce(
    (chain, page) =>
      chain.then((canvases) =>
        html2canvas(page, {
          scale: PRINT_LAYOUT.captureScale,
          backgroundColor: "#ffffff",
          width: PRINT_LAYOUT.pageWidthPx,
          height: PRINT_LAYOUT.pageHeightPx,
          useCORS: true,
          allowTaint: true,
          logging: false,
          ignoreElements: (element) =>
            Boolean(
              element.classList &&
              element.classList.contains("print-page-footer")
            ),
        }).then((canvas) => canvases.concat(canvas))
      ),
    Promise.resolve([])
  );
}

// Stack the page canvases into a single image so the modal previews the real
// pagination, footers included. Drawn at preview resolution rather than capture
// resolution so the data URL stays small even for a long report.
function buildPagesPreview(canvases) {
  const gap = 16;
  const scale = Math.min(1, 600 / canvases[0].width);
  const width = Math.round(canvases[0].width * scale);
  const pageHeight = Math.round(canvases[0].height * scale);

  const preview = document.createElement("canvas");
  preview.width = width + gap * 2;
  preview.height = pageHeight * canvases.length + gap * (canvases.length + 1);

  const ctx = preview.getContext("2d");
  ctx.fillStyle = "#e9ecef";
  ctx.fillRect(0, 0, preview.width, preview.height);

  const footerRatio = PRINT_LAYOUT.footerHeightPx / PRINT_LAYOUT.pageHeightPx;
  let top = gap;

  canvases.forEach((canvas, index) => {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(gap, top, width, pageHeight);
    ctx.drawImage(canvas, gap, top, width, pageHeight);

    // Redraw the footer that was left out of the capture.
    const footerTop = top + pageHeight * (1 - footerRatio);
    ctx.strokeStyle = "#dddddd";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(gap, footerTop);
    ctx.lineTo(gap + width, footerTop);
    ctx.stroke();

    ctx.fillStyle = "#666666";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font =
      Math.max(7, Math.round(pageHeight * (12 / PRINT_LAYOUT.pageHeightPx))) +
      "px Arial, sans-serif";
    ctx.fillText(
      "Page " + (index + 1) + " of " + canvases.length,
      gap + width / 2,
      footerTop + (pageHeight * footerRatio) / 2
    );

    ctx.strokeStyle = "#c8c8c8";
    ctx.strokeRect(gap + 0.5, top + 0.5, width - 1, pageHeight - 1);

    top += pageHeight + gap;
  });

  return preview;
}

// Function to generate filename from subtitle and H1
function generateFilename(type = "pdf") {
  const subtitleElement = document.querySelector(".sub-title");
  const h1Element = document.querySelector("h1");

  const subtitleText = subtitleElement
    ? subtitleElement.textContent.trim()
    : "";
  const h1Text = h1Element ? h1Element.textContent.trim() : "";

  // Sanitize both text elements
  const sanitizedSubtitle = subtitleText
    .replace(/[^a-zA-Z0-9\s\-_]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  const sanitizedH1 = h1Text
    .replace(/[^a-zA-Z0-9\s\-_]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  // Build filename based on available content
  let baseFilename = "";
  if (sanitizedSubtitle && sanitizedSubtitle !== "HospitalXYZ") {
    // Use subtitle + H1 if both available
    if (sanitizedH1) {
      baseFilename = `${sanitizedSubtitle} - ${sanitizedH1}`;
    } else {
      // Use subtitle only if H1 not available
      baseFilename = `${sanitizedSubtitle} - Config Report`;
    }
  } else {
    // Fallback: use H1 if available, otherwise default
    if (sanitizedH1) {
      baseFilename = sanitizedH1;
    } else {
      baseFilename = "Config Report";
    }
  }

  // Add appropriate extension
  return type === "png" ? `${baseFilename}.png` : `${baseFilename}.pdf`;
}

// Modal functions
// `capture` is a single canvas for a PNG screenshot, or the array of page
// canvases produced by the paginated PDF export.
function showModal(capture, type = "pdf") {
  exportType = type;

  let previewCanvas;
  if (type === "png") {
    capturedCanvas = capture;
    capturedPages = [];
    previewCanvas = capture;
  } else {
    capturedCanvas = null;
    capturedPages = capture;
    previewCanvas = buildPagesPreview(capture);
  }

  const modal = document.getElementById("pdfModal");
  const modalHeader = document.querySelector(".modal-header h3");
  const filenameInput = document.getElementById("filenameInput");
  const previewImage = document.getElementById("previewImage");
  const previewLabel = document.querySelector(".preview-section p");
  const saveBtn = document.getElementById("saveBtn");

  // Update modal title and button text based on type
  if (type === "png") {
    modalHeader.textContent = "Save Screenshot";
    saveBtn.textContent = "Save PNG";
  } else {
    modalHeader.textContent = "Save Configuration Report";
    saveBtn.textContent = "Save PDF";
  }

  if (previewLabel) {
    previewLabel.textContent =
      type === "png"
        ? "Preview of captured configuration:"
        : "Preview of captured configuration - " +
          capturedPages.length +
          " US Letter page" +
          (capturedPages.length === 1 ? "" : "s") +
          ":";
  }

  // Set filename
  filenameInput.value = generateFilename(type);

  // Set preview image
  previewImage.src = previewCanvas.toDataURL();

  // Show modal
  modal.style.display = "block";

  // Focus on filename input
  setTimeout(() => filenameInput.focus(), 100);
}

function hideModal() {
  const modal = document.getElementById("pdfModal");
  modal.style.display = "none";
  capturedCanvas = null;
  capturedPages = [];
  exportType = "pdf";
}

function saveFile() {
  if (!capturedCanvas && capturedPages.length === 0) return;

  const filenameInput = document.getElementById("filenameInput");
  let filename = filenameInput.value.trim();

  if (exportType === "png") {
    // Ensure .png extension
    if (!filename.toLowerCase().endsWith(".png")) {
      filename += ".png";
    }

    // Sanitize filename
    filename = filename
      .replace(/[^a-zA-Z0-9\s\-_\.]/g, "")
      .replace(/\s+/g, " ")
      .trim();
    if (!filename || filename === ".png") {
      filename = "Config Report.png";
    }

    // Download PNG
    const link = document.createElement("a");
    link.download = filename;
    link.href = capturedCanvas.toDataURL();
    link.click();

    hideModal();
  } else {
    // PDF export
    // Ensure .pdf extension
    if (!filename.toLowerCase().endsWith(".pdf")) {
      filename += ".pdf";
    }

    // Sanitize filename
    filename = filename
      .replace(/[^a-zA-Z0-9\s\-_\.]/g, "")
      .replace(/\s+/g, " ")
      .trim();
    if (!filename || filename === ".pdf") {
      filename = "Config Report.pdf";
    }

    try {
      // One US Letter page per captured page canvas.
      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "letter",
      });

      const margin = PRINT_LAYOUT.marginMm;
      const imageWidth = PRINT_LAYOUT.pageWidthPx * PX_TO_MM;
      const imageHeight = PRINT_LAYOUT.pageHeightPx * PX_TO_MM;
      const footerLineY =
        margin +
        (PRINT_LAYOUT.pageHeightPx - PRINT_LAYOUT.footerHeightPx) * PX_TO_MM;
      const totalPages = capturedPages.length;

      capturedPages.forEach((canvas, index) => {
        if (index > 0) {
          pdf.addPage("letter", "portrait");
        }

        pdf.addImage(
          canvas.toDataURL("image/jpeg", 0.95),
          "JPEG",
          margin,
          margin,
          imageWidth,
          imageHeight
        );

        // "Page X of Y" footer, drawn as text so it stays crisp and selectable.
        pdf.setDrawColor(221);
        pdf.setLineWidth(0.2);
        pdf.line(margin, footerLineY, margin + imageWidth, footerLineY);

        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(10);
        pdf.setTextColor(102);
        pdf.text(
          "Page " + (index + 1) + " of " + totalPages,
          PRINT_LAYOUT.sheetWidthMm / 2,
          footerLineY + 6,
          { align: "center" }
        );
      });

      pdf.save(filename);

      hideModal();
    } catch (error) {
      console.error("PDF generation failed:", error);
      alert("Failed to generate PDF. Please try again.");
    }
  }
}

// Reset tables functionality
function resetTables() {
  // Reset subtitle to default
  const subtitleElement = document.querySelector(".sub-title");
  if (subtitleElement) {
    subtitleElement.textContent = "Hospital XYZ";
  }

  // Reset all editable table cells to their default values
  const editableCells = document.querySelectorAll('td[contenteditable="true"]');
  editableCells.forEach((cell) => {
    // Find the corresponding default value cell (second column)
    const row = cell.closest("tr");
    if (row) {
      const defaultCell = row.cells[1]; // Default Value column
      if (defaultCell) {
        cell.textContent = defaultCell.textContent;
      }
    }
  });

  // Reset editable headers
  const editableHeaders = document.querySelectorAll(".editable-header");
  editableHeaders.forEach((header) => {
    header.textContent =
      header.getAttribute("data-original-header") || "ZOLL Team Rec's";
  });

  // Re-run highlighting to update visual state
  highlightDiffRows();

  // Show confirmation
  alert("All tables have been reset to default values.");
}

// PNG Screenshot functionality
function takeScreenshot() {
  // Hide all buttons including ZOLL button for screenshots
  const buttons = document.querySelectorAll(".manual-button");
  buttons.forEach((btn) => (btn.style.display = "none"));

  html2canvas(document.body, {
    height: document.body.scrollHeight,
    width: document.body.scrollWidth,
    scrollX: 0,
    scrollY: 0,
    useCORS: true,
    allowTaint: true,
  })
    .then(function (canvas) {
      buttons.forEach((btn) => (btn.style.display = "inline-block"));
      showModal(canvas, "png");
    })
    .catch(function (error) {
      console.error("Screenshot failed:", error);
      buttons.forEach((btn) => (btn.style.display = "inline-block"));
      alert("Failed to capture screenshot. Please try again.");
    });
}

// PDF Export functionality
// The report is laid out off-screen as US Letter pages first, so the export
// never has to hide the on-screen chrome and never splits a table.
function exportAsPDF() {
  const exportBtn = document.querySelector(".export-pdf-btn");
  const originalLabel = exportBtn ? exportBtn.innerHTML : null;

  if (exportBtn) {
    exportBtn.disabled = true;
    exportBtn.innerHTML = "Building<br />PDF...";
  }

  function cleanup() {
    if (exportBtn) {
      exportBtn.disabled = false;
      exportBtn.innerHTML = originalLabel;
    }
    destroyPrintLayout();
  }

  let pages;
  try {
    pages = buildPrintLayout();
  } catch (error) {
    console.error("Print layout failed:", error);
    cleanup();
    alert("Failed to lay out the PDF. Please try again.");
    return;
  }

  capturePrintPages(pages)
    .then(function (canvases) {
      cleanup();
      showModal(canvases, "pdf");
    })
    .catch(function (error) {
      console.error("PDF capture failed:", error);
      cleanup();
      alert("Failed to capture configuration. Please try again.");
    });
}

// Browser printing (Ctrl/Cmd+P) uses the same paginated layout, with a CSS
// footer on each page instead of the one jsPDF draws.
function setupPrintHandlers() {
  function preparePrint() {
    if (!document.getElementById("content-container")) return;
    buildPrintLayout();
    document.body.classList.add("paginated-print");
  }

  function finishPrint() {
    document.body.classList.remove("paginated-print");
    destroyPrintLayout();
  }

  window.addEventListener("beforeprint", preparePrint);
  window.addEventListener("afterprint", finishPrint);

  // Safari and older WebKit only report print state through matchMedia.
  if (window.matchMedia) {
    const printQuery = window.matchMedia("print");
    const onPrintChange = function (event) {
      if (event.matches) {
        preparePrint();
      } else {
        finishPrint();
      }
    };

    if (printQuery.addEventListener) {
      printQuery.addEventListener("change", onPrintChange);
    } else if (printQuery.addListener) {
      printQuery.addListener(onPrintChange);
    }
  }
}

// Back home functionality
function goBackHome() {
  window.location.href = "index.html";
}

function highlightDiffRows() {
  const tables = document.querySelectorAll("table");
  tables.forEach((table, tableIndex) => {
    const rows = table.querySelectorAll("tr");
    rows.forEach((row, index) => {
      if (index === 0) return; // Skip header row
      const defaultCell = row.cells[1]; // Default Value
      const recCell = row.cells[2]; // ZOLL Team Rec's
      if (defaultCell && recCell) {
        const defaultValue = defaultCell.textContent.trim();
        const recValue = recCell.textContent.trim();
        if (defaultValue !== recValue) {
          row.classList.add("diff-row");
          console.log(
            `Table ${tableIndex}, Row ${index}: Highlighted (Default: "${defaultValue}", Rec: "${recValue}")`
          );
        } else {
          row.classList.remove("diff-row");
          console.log(
            `Table ${tableIndex}, Row ${index}: Not highlighted (Default: "${defaultValue}", Rec: "${recValue}")`
          );
        }
      } else {
        console.warn(
          `Table ${tableIndex}, Row ${index}: Missing default or rec cell`
        );
      }
    });
  });
}

// Function to propagate header edit
function setupEditableHeaders() {
  document.querySelectorAll(".editable-header").forEach((header) => {
    header.addEventListener("input", (e) => {
      const newText = e.target.textContent;
      document.querySelectorAll(".editable-header").forEach((otherHeader) => {
        if (otherHeader !== e.target) {
          otherHeader.textContent = newText;
        }
      });
      highlightDiffRows();
    });
  });
}

// Function to setup content editable cells
function setupEditableCells() {
  document.querySelectorAll('td[contenteditable="true"]').forEach((cell) => {
    cell.addEventListener("input", highlightDiffRows);
    cell.addEventListener("blur", highlightDiffRows);
  });
}

// Initialize the page
function initConfigPage() {
  // Print hooks are registered immediately so Ctrl/Cmd+P is paginated even if
  // the user prints before the DOM has finished loading.
  setupPrintHandlers();

  // Run on page load
  document.addEventListener("DOMContentLoaded", function () {
    highlightDiffRows();
    setupEditableCells();

    // Add event listeners
    const screenshotBtn = document.querySelector(".screenshot-btn");
    const exportPdfBtn = document.querySelector(".export-pdf-btn");
    const resetTablesBtn = document.querySelector(".reset-tables-btn");
    const backHomeBtn = document.querySelector(".back-home-btn");
    const saveBtn = document.getElementById("saveBtn");
    const cancelBtn = document.getElementById("cancelBtn");
    const filenameInput = document.getElementById("filenameInput");

    if (screenshotBtn) {
      screenshotBtn.addEventListener("click", takeScreenshot);
    }

    if (exportPdfBtn) {
      exportPdfBtn.addEventListener("click", exportAsPDF);
    }

    if (resetTablesBtn) {
      resetTablesBtn.addEventListener("click", resetTables);
    }

    if (backHomeBtn) {
      backHomeBtn.addEventListener("click", goBackHome);
    }

    if (saveBtn) {
      saveBtn.addEventListener("click", saveFile);
    }

    if (cancelBtn) {
      cancelBtn.addEventListener("click", hideModal);
    }

    // Allow Enter key to save
    if (filenameInput) {
      filenameInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
          saveFile();
        }
      });
    }

    // Close modal when clicking outside
    const modal = document.getElementById("pdfModal");
    if (modal) {
      modal.addEventListener("click", function (e) {
        if (e.target === modal) {
          hideModal();
        }
      });
    }
  });
}

// Auto-initialize if this script is loaded
initConfigPage();

console.log("Config script loaded");
