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

// Global variables for modal
let capturedCanvas = null;
let exportType = "pdf"; // "png" or "pdf"

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
function showModal(canvas, type = "pdf") {
  capturedCanvas = canvas;
  exportType = type;

  const modal = document.getElementById("pdfModal");
  const modalHeader = document.querySelector(".modal-header h3");
  const filenameInput = document.getElementById("filenameInput");
  const previewImage = document.getElementById("previewImage");
  const saveBtn = document.getElementById("saveBtn");

  // Update modal title and button text based on type
  if (type === "png") {
    modalHeader.textContent = "Save Screenshot";
    saveBtn.textContent = "Save PNG";
  } else {
    modalHeader.textContent = "Save Configuration Report";
    saveBtn.textContent = "Save PDF";
  }

  // Set filename
  filenameInput.value = generateFilename(type);

  // Set preview image
  previewImage.src = canvas.toDataURL();

  // Show modal
  modal.style.display = "block";

  // Focus on filename input
  setTimeout(() => filenameInput.focus(), 100);
}

function hideModal() {
  const modal = document.getElementById("pdfModal");
  modal.style.display = "none";
  capturedCanvas = null;
  exportType = "pdf";
}

function saveFile() {
  if (!capturedCanvas) return;

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
      // Calculate custom dimensions for single long page
      const customWidth = 210; // A4 width in mm
      const customHeight =
        (capturedCanvas.height / capturedCanvas.width) * customWidth;

      // Create PDF with custom dimensions for single long page
      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [customWidth, customHeight], // Custom format for single long page
      });

      // Add entire canvas to single long page (no page breaks)
      const imgData = capturedCanvas.toDataURL("image/jpeg", 0.95);
      pdf.addImage(imgData, "JPEG", 0, 0, customWidth, customHeight);

      // Download single long PDF page
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
    header.textContent = "ZOLL Team Rec's";
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
function exportAsPDF() {
  // Hide all buttons except ZOLL button for PDF export
  const buttonsToHide = document.querySelectorAll(
    ".back-home-btn, .reset-tables-btn, .screenshot-btn, .export-pdf-btn"
  );
  buttonsToHide.forEach((btn) => (btn.style.display = "none"));

  html2canvas(document.body, {
    height: document.body.scrollHeight,
    width: document.body.scrollWidth,
    scrollX: 0,
    scrollY: 0,
    useCORS: true,
    allowTaint: true,
  })
    .then(function (canvas) {
      buttonsToHide.forEach((btn) => (btn.style.display = "inline-block"));
      showModal(canvas, "pdf");
    })
    .catch(function (error) {
      console.error("Screenshot failed:", error);
      buttonsToHide.forEach((btn) => (btn.style.display = "inline-block"));
      alert("Failed to capture screenshot. Please try again.");
    });
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
