## Explanation
Importing Libraries:

tkinter is imported for creating the GUI.
ttk from tkinter is imported for themed widgets.
speedtest is imported to perform the speed test.
Functions:

get_speed(): This function creates a Speedtest object, measures the download and upload speeds, and returns them.
display_speed(): This function calls get_speed(), converts the speeds to Mbps, and updates the labels in the GUI.
GUI Setup:

root: The main window of the GUI.
title_label: A label displaying the title "Blacksnow Speed Test".
start_button: A button that starts the speed test when clicked, calling the display_speed() function.
download_label and upload_label: Labels to display the download and upload speeds, initially showing placeholder text.

Event Loop:

root.mainloop(): This starts the GUI event loop, making the window responsive to user interactions.
