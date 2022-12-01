export default {
  kind: "root",
  title: "LINUX SHELL CHEAT SHEET",
  description: "Basic Bash commands",
  columns: {
    horizontal: 5,
    vertical: 4,
  },
  items: [
    {
      kind: "section",
      title: "Searching",
      items: [
        {
          kind: "cheat",
          command: "grep [pattern] [file_name]",
          description: "search for a specific pattern in a file",
        },
        {
          kind: "cheat",
          command: "grep -r [pattern] [directory_name]",
          description: "recursively search for a pattern in a directory",
        },
        {
          kind: "cheat",
          command: "locate [name]",
          description:
            "find all files and directories related to a particular name",
        },
        {
          kind: "cheat",
          command: "find [/folder/location] -size [+100M]",
          description: "see files larger than a specified size in a folder",
        },
      ],
    },
    {
      kind: "section",
      title: "Hardware Information",
      items: [
        {
          kind: "cheat",
          command: "cat /proc/cpuinfo",
          description: "see CPU information",
        },
        {
          kind: "cheat",
          command: "free -h",
          description: "display free and used memory",
        },
        {
          kind: "cheat",
          command: "lshw",
          description: "list hardware configuration information",
        },
        {
          kind: "cheat",
          command: "lsusb -tv",
          description: "display USB devices in a tree-like diagram",
        },
        {
          kind: "cheat",
          command: "lspci -tv",
          description: "show PCI devices in a tree-like diagram",
        },
        {
          kind: "cheat",
          command: "hdparm -i /dev/disk",
          description: "display disk data information",
        },
        {
          kind: "cheat",
          command: "hdparm -tT /dev/[device]",
          description: "conduct a read-speed test on device/disk",
        },
      ],
    },
    {
      kind: "section",
      title: "File Permission",
      items: [
        {
          kind: "cheat",
          command: "chmod 777 [file_name]",
          description: "assign read, write, and execute permission to everyone",
        },
        {
          kind: "cheat",
          command: "chmod 755 [file_name]",
          description:
            "give read, write, and execute permission to owner, and read and execute permission to group and others",
        },
        {
          kind: "cheat",
          command: "chmod 766 [file_name]",
          description:
            "assign full permission to owner, and read and write permission to group and others",
        },
        {
          kind: "cheat",
          command: "chown [user] [file_name]",
          description: "change the ownership of a file",
        },
        {
          kind: "cheat",
          command: "chown [user]:[group] [file_name]",
          description: "change the owner and group ownership of a file",
        },
      ],
    },
    {
      kind: "section",
      title: "File Compression",
      items: [
        {
          kind: "cheat",
          command: "tar cf [compressed_file.tar] [file_name]",
          description: "archive an existing file",
        },
        {
          kind: "cheat",
          command: "tar xf [compressed_file.tar]",
          description: "extract an archived file",
        },
        {
          kind: "cheat",
          command: "tar czf [compressed_file.tar.gz]",
          description: "create a gzip compressed tar file",
        },
        {
          kind: "cheat",
          command: "gzip [file_name]",
          description: "compress a file with the .gz extension",
        },
      ],
    },
    {
      kind: "section",
      title: "File Transfer",
      items: [
        {
          kind: "cheat",
          command: "scp [file_name] [server/tmp]",
          description: "copy a file to a server directory securely",
        },
        {
          kind: "cheat",
          command: "rsync -a [/your/directory] [/backup/] ",
          description:
            "synchronize the contents of a directory with a backup directory",
        },
      ],
    },

    {
      kind: "section",
      title: "Users and Groups",
      items: [
        {
          kind: "cheat",
          command: "id",
          description: "see details about the active users",
        },
        {
          kind: "cheat",
          command: "last",
          description: "show last system logins",
        },
        {
          kind: "cheat",
          command: "w",
          description: "show which users are logged in and their activity",
        },
        {
          kind: "cheat",
          command: "who",
          description: "display who is currently logged into the system",
        },
        {
          kind: "cheat",
          command: "groupadd [group_name]",
          description: "add a new group",
        },
        {
          kind: "cheat",
          command: "adduser [user_name]",
          description: "add a new user",
        },
        {
          kind: "cheat",
          command: "usermod -aG [group_name] [user_name]",
          description: "add a user to a group",
        },
        {
          kind: "cheat",
          command: "sudo [command]",
          description:
            "temporarily elevate user privileges to superuser or root",
        },
        {
          kind: "cheat",
          command: "userdel [user_name]",
          description: "delete a user",
        },
        {
          kind: "cheat",
          command: "usermod",
          description: "modify user information",
        },
      ],
    },

    {
      kind: "section",
      title: "Variables",
      items: [
        {
          kind: "cheat",
          command: "set",
          description:
            "list the names of all the shell variables and functions",
        },
        {
          kind: "cheat",
          command: "export [variable]",
          description: "export a Bash variable",
        },
        {
          kind: "cheat",
          command: "echo $[variable]",
          description: "display the value of a variable",
        },
      ],
    },
    {
      kind: "section",
      title: "File Content",
      items: [
        {
          kind: "cheat",
          command: "cat [file_name]",
          description: "show the contents of a file",
        },
        {
          kind: "cheat",
          command: "head [file_name]",
          description: "display the first 10 lines of a file",
        },
        {
          kind: "cheat",
          command: "tail [file_name]",
          description: "show the last 10 lines of a file",
        },
        {
          kind: "cheat",
          command: "gpg -c [file_name]",
          description: "encrypt a file",
        },
        {
          kind: "cheat",
          command: "gpg [file_name.gpg]",
          description: "decrypt a file",
        },
        {
          kind: "cheat",
          command: "wc [file_name]",
          description: "show the number of words, lines, and bytes in a file",
        },
        {
          kind: "cheat",
          command: "diff [file_1] [file_2]",
          description: "compare two files and display differences",
        },
      ],
    },
    {
      kind: "section",
      title: "Process Related",
      items: [
        {
          kind: "cheat",
          command: "ps",
          description: "see a snapshot of active processes",
        },
        {
          kind: "cheat",
          command: "pstree",
          description: "show processes in a tree-like diagram",
        },
        {
          kind: "cheat",
          command: "pmap",
          description: "display a memory usage map of processes",
        },
        {
          kind: "cheat",
          command: "top",
          description: "see all running processes",
        },
        {
          kind: "cheat",
          command: "kill [process_id]",
          description: "terminate a Linux process under a given ID",
        },
        {
          kind: "cheat",
          command: "pkill [proc_name]",
          description: "terminate a process under a specific name",
        },
        {
          kind: "cheat",
          command: "nohup [command] &",
          description: "run a Linux process in the background",
        },
      ],
    },
    {
      kind: "section",
      title: "Directory Navigation",
      items: [
        {
          kind: "cheat",
          command: "cd[/location]",
          description: "change to a specifed directory",
        },
        {
          kind: "cheat",
          command: "cd ..",
          description: "move up one level",
        },
        {
          kind: "cheat",
          command: "cd",
          description: "change directory to $HOME",
        },
      ],
    },

    {
      kind: "section",
      title: "System Management and Information",
      items: [
        {
          kind: "cheat",
          command: "uname -r",
          description: "show system information",
        },
        {
          kind: "cheat",
          command: "uname -a",
          description: "see kernel release information",
        },
        {
          kind: "cheat",
          command: "uptime",
          description:
            "display how long the system has been running, including load average",
        },
        {
          kind: "cheat",
          command: "hostname",
          description: "see system hostname",
        },
        {
          kind: "cheat",
          command: "hostname -i",
          description: "show an IP address of the system",
        },
        {
          kind: "cheat",
          command: "last reboot",
          description: "list system reboot history",
        },
        {
          kind: "cheat",
          command: "date",
          description: "see current time and date",
        },
        {
          kind: "cheat",
          command: "cal",
          description: "show current calendar (month and day)",
        },
        {
          kind: "cheat",
          command: "whoami",
          description: "see which user you are using",
        },
        {
          kind: "cheat",
          command: "shutdown [hh:mm]",
          description: "schedule a system shutdown",
        },
        {
          kind: "cheat",
          command: "shutdown now",
          description: "shut down the system immediately",
        },
      ],
    },

    {
      kind: "section",
      title: "Disk Usage",
      items: [
        {
          kind: "cheat",
          command: "df -h",
          description: "see free and used space on mounted systems",
        },
        {
          kind: "cheat",
          command: "fdisk -l",
          description: "display disk partitions, sizes, and types",
        },
        {
          kind: "cheat",
          command: "du -ah",
          description: "see disk usage for all files and directory",
        },
      ],
    },
    {
      kind: "section",
      title: "File Manipulation",
      items: [
        {
          kind: "cheat",
          command: "ls",
          description: "list files in the directory",
        },
        {
          kind: "cheat",
          command: "pwd",
          description: "show current directory",
        },
        {
          kind: "cheat",
          command: "mkdir [directory_name]",
          description: "create a directory",
        },
        {
          kind: "cheat",
          command: "rm [file_name]",
          description: "remove a file",
        },
        {
          kind: "cheat",
          command: "rm -rf [directory_name]",
          description: "force remove directory",
        },
        {
          kind: "cheat",
          command: "cp [file_name_1] [file_name_2]",
          description: "copy file1 to file2",
        },
        {
          kind: "cheat",
          command: "mv [file_name_1] [file_name_2]",
          description: "rename a file",
        },
        {
          kind: "cheat",
          command: "touch [file_name]",
          description: "create a new file",
        },
      ],
    },
    {
      kind: "section",
      title: "SSH Login",
      items: [
        {
          kind: "cheat",
          command: "ssh user@host",
          description: "connect to host as user",
        },
        {
          kind: "cheat",
          command: "ssh -p [port] user@host",
          description: "connect to host using a particular port",
        },
      ],
    },
    {
      kind: "section",
      title: "Network",
      items: [
        {
          kind: "cheat",
          command: "ifconfig",
          description: "display IP addresses of all network interfaces",
        },
        {
          kind: "cheat",
          command: "netstat -pnltu",
          description: "see active (listening) ports",
        },
        {
          kind: "cheat",
          command: "netstat -nutlp",
          description: "show tcp and udp ports and their programs",
        },
        {
          kind: "cheat",
          command: "dig [domain]",
          description: "show DNS information about a domain",
        },
        {
          kind: "cheat",
          command: "nslookup [domain]",
          description: "receive information about an internet domain",
        },
        {
          kind: "cheat",
          command: "wget [file_name]",
          description: "download a file from a domain",
        },
        {
          kind: "cheat",
          command: "curl -O [file_name]",
          description: "save a remote file to your system",
        },
      ],
    },
  ],
};
