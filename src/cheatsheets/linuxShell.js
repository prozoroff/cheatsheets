export default {
  kind: "root",
  title: "LINUX SHELL CHEAT SHEET",
  description: "Basic Bash cheats",
  columns: {
    horizontal: 5,
    vertical: 4,
  },
  items: [
    {
      kind: "article",
      title: "Searching",
      items: [
        {
          kind: "cheat",
          cheat: "grep [pattern] [file_name]",
          description: "search for a specific pattern in a file",
        },
        {
          kind: "cheat",
          cheat: "grep -r [pattern] [directory_name]",
          description: "recursively search for a pattern in a directory",
        },
        {
          kind: "cheat",
          cheat: "locate [name]",
          description:
            "find all files and directories related to a particular name",
        },
        {
          kind: "cheat",
          cheat: "find [/folder/location] -size [+100M]",
          description: "see files larger than a specified size in a folder",
        },
      ],
    },
    {
      kind: "article",
      title: "Hardware Information",
      items: [
        {
          kind: "cheat",
          cheat: "cat /proc/cpuinfo",
          description: "see CPU information",
        },
        {
          kind: "cheat",
          cheat: "free -h",
          description: "display free and used memory",
        },
        {
          kind: "cheat",
          cheat: "lshw",
          description: "list hardware configuration information",
        },
        {
          kind: "cheat",
          cheat: "lsusb -tv",
          description: "display USB devices in a tree-like diagram",
        },
        {
          kind: "cheat",
          cheat: "lspci -tv",
          description: "show PCI devices in a tree-like diagram",
        },
        {
          kind: "cheat",
          cheat: "hdparm -i /dev/disk",
          description: "display disk data information",
        },
        {
          kind: "cheat",
          cheat: "hdparm -tT /dev/[device]",
          description: "conduct a read-speed test on device/disk",
        },
      ],
    },
    {
      kind: "article",
      title: "File Permission",
      items: [
        {
          kind: "cheat",
          cheat: "chmod 777 [file_name]",
          description: "assign read, write, and execute permission to everyone",
        },
        {
          kind: "cheat",
          cheat: "chmod 755 [file_name]",
          description:
            "give read, write, and execute permission to owner, and read and execute permission to group and others",
        },
        {
          kind: "cheat",
          cheat: "chmod 766 [file_name]",
          description:
            "assign full permission to owner, and read and write permission to group and others",
        },
        {
          kind: "cheat",
          cheat: "chown [user] [file_name]",
          description: "change the ownership of a file",
        },
        {
          kind: "cheat",
          cheat: "chown [user]:[group] [file_name]",
          description: "change the owner and group ownership of a file",
        },
      ],
    },
    {
      kind: "article",
      title: "File Compression",
      items: [
        {
          kind: "cheat",
          cheat: "tar cf [compressed_file.tar] [file_name]",
          description: "archive an existing file",
        },
        {
          kind: "cheat",
          cheat: "tar xf [compressed_file.tar]",
          description: "extract an archived file",
        },
        {
          kind: "cheat",
          cheat: "tar czf [compressed_file.tar.gz]",
          description: "create a gzip compressed tar file",
        },
        {
          kind: "cheat",
          cheat: "gzip [file_name]",
          description: "compress a file with the .gz extension",
        },
      ],
    },
    {
      kind: "article",
      title: "File Transfer",
      items: [
        {
          kind: "cheat",
          cheat: "scp [file_name] [server/tmp]",
          description: "copy a file to a server directory securely",
        },
        {
          kind: "cheat",
          cheat: "rsync -a [/your/directory] [/backup/] ",
          description:
            "synchronize the contents of a directory with a backup directory",
        },
      ],
    },

    {
      kind: "article",
      title: "Users and Groups",
      items: [
        {
          kind: "cheat",
          cheat: "id",
          description: "see details about the active users",
        },
        {
          kind: "cheat",
          cheat: "last",
          description: "show last system logins",
        },
        {
          kind: "cheat",
          cheat: "w",
          description: "show which users are logged in and their activity",
        },
        {
          kind: "cheat",
          cheat: "who",
          description: "display who is currently logged into the system",
        },
        {
          kind: "cheat",
          cheat: "groupadd [group_name]",
          description: "add a new group",
        },
        {
          kind: "cheat",
          cheat: "adduser [user_name]",
          description: "add a new user",
        },
        {
          kind: "cheat",
          cheat: "usermod -aG [group_name] [user_name]",
          description: "add a user to a group",
        },
        {
          kind: "cheat",
          cheat: "sudo [cheat]",
          description:
            "temporarily elevate user privileges to superuser or root",
        },
        {
          kind: "cheat",
          cheat: "userdel [user_name]",
          description: "delete a user",
        },
        {
          kind: "cheat",
          cheat: "usermod",
          description: "modify user information",
        },
      ],
    },

    {
      kind: "article",
      title: "Variables",
      items: [
        {
          kind: "cheat",
          cheat: "set",
          description:
            "list the names of all the shell variables and functions",
        },
        {
          kind: "cheat",
          cheat: "export [variable]",
          description: "export a Bash variable",
        },
        {
          kind: "cheat",
          cheat: "echo $[variable]",
          description: "display the value of a variable",
        },
      ],
    },
    {
      kind: "article",
      title: "File Content",
      items: [
        {
          kind: "cheat",
          cheat: "cat [file_name]",
          description: "show the contents of a file",
        },
        {
          kind: "cheat",
          cheat: "head [file_name]",
          description: "display the first 10 lines of a file",
        },
        {
          kind: "cheat",
          cheat: "tail [file_name]",
          description: "show the last 10 lines of a file",
        },
        {
          kind: "cheat",
          cheat: "gpg -c [file_name]",
          description: "encrypt a file",
        },
        {
          kind: "cheat",
          cheat: "gpg [file_name.gpg]",
          description: "decrypt a file",
        },
        {
          kind: "cheat",
          cheat: "wc [file_name]",
          description: "show the number of words, lines, and bytes in a file",
        },
        {
          kind: "cheat",
          cheat: "diff [file_1] [file_2]",
          description: "compare two files and display differences",
        },
      ],
    },
    {
      kind: "article",
      title: "Process Related",
      items: [
        {
          kind: "cheat",
          cheat: "ps",
          description: "see a snapshot of active processes",
        },
        {
          kind: "cheat",
          cheat: "pstree",
          description: "show processes in a tree-like diagram",
        },
        {
          kind: "cheat",
          cheat: "pmap",
          description: "display a memory usage map of processes",
        },
        {
          kind: "cheat",
          cheat: "top",
          description: "see all running processes",
        },
        {
          kind: "cheat",
          cheat: "kill [process_id]",
          description: "terminate a Linux process under a given ID",
        },
        {
          kind: "cheat",
          cheat: "pkill [proc_name]",
          description: "terminate a process under a specific name",
        },
        {
          kind: "cheat",
          cheat: "nohup [cheat] &",
          description: "run a Linux process in the background",
        },
      ],
    },
    {
      kind: "article",
      title: "Directory Navigation",
      items: [
        {
          kind: "cheat",
          cheat: "cd[/location]",
          description: "change to a specifed directory",
        },
        {
          kind: "cheat",
          cheat: "cd ..",
          description: "move up one level",
        },
        {
          kind: "cheat",
          cheat: "cd",
          description: "change directory to $HOME",
        },
      ],
    },

    {
      kind: "article",
      title: "System Management and Information",
      items: [
        {
          kind: "cheat",
          cheat: "uname -r",
          description: "show system information",
        },
        {
          kind: "cheat",
          cheat: "uname -a",
          description: "see kernel release information",
        },
        {
          kind: "cheat",
          cheat: "uptime",
          description:
            "display how long the system has been running, including load average",
        },
        {
          kind: "cheat",
          cheat: "hostname",
          description: "see system hostname",
        },
        {
          kind: "cheat",
          cheat: "hostname -i",
          description: "show an IP address of the system",
        },
        {
          kind: "cheat",
          cheat: "last reboot",
          description: "list system reboot history",
        },
        {
          kind: "cheat",
          cheat: "date",
          description: "see current time and date",
        },
        {
          kind: "cheat",
          cheat: "cal",
          description: "show current calendar (month and day)",
        },
        {
          kind: "cheat",
          cheat: "whoami",
          description: "see which user you are using",
        },
        {
          kind: "cheat",
          cheat: "shutdown [hh:mm]",
          description: "schedule a system shutdown",
        },
        {
          kind: "cheat",
          cheat: "shutdown now",
          description: "shut down the system immediately",
        },
      ],
    },

    {
      kind: "article",
      title: "Disk Usage",
      items: [
        {
          kind: "cheat",
          cheat: "df -h",
          description: "see free and used space on mounted systems",
        },
        {
          kind: "cheat",
          cheat: "fdisk -l",
          description: "display disk partitions, sizes, and types",
        },
        {
          kind: "cheat",
          cheat: "du -ah",
          description: "see disk usage for all files and directory",
        },
      ],
    },
    {
      kind: "article",
      title: "File Manipulation",
      items: [
        {
          kind: "cheat",
          cheat: "ls",
          description: "list files in the directory",
        },
        {
          kind: "cheat",
          cheat: "pwd",
          description: "show current directory",
        },
        {
          kind: "cheat",
          cheat: "mkdir [directory_name]",
          description: "create a directory",
        },
        {
          kind: "cheat",
          cheat: "rm [file_name]",
          description: "remove a file",
        },
        {
          kind: "cheat",
          cheat: "rm -rf [directory_name]",
          description: "force remove directory",
        },
        {
          kind: "cheat",
          cheat: "cp [file_name_1] [file_name_2]",
          description: "copy file1 to file2",
        },
        {
          kind: "cheat",
          cheat: "mv [file_name_1] [file_name_2]",
          description: "rename a file",
        },
        {
          kind: "cheat",
          cheat: "touch [file_name]",
          description: "create a new file",
        },
      ],
    },
    {
      kind: "article",
      title: "SSH Login",
      items: [
        {
          kind: "cheat",
          cheat: "ssh user@host",
          description: "connect to host as user",
        },
        {
          kind: "cheat",
          cheat: "ssh -p [port] user@host",
          description: "connect to host using a particular port",
        },
      ],
    },
    {
      kind: "article",
      title: "Network",
      items: [
        {
          kind: "cheat",
          cheat: "ifconfig",
          description: "display IP addresses of all network interfaces",
        },
        {
          kind: "cheat",
          cheat: "netstat -pnltu",
          description: "see active (listening) ports",
        },
        {
          kind: "cheat",
          cheat: "netstat -nutlp",
          description: "show tcp and udp ports and their programs",
        },
        {
          kind: "cheat",
          cheat: "dig [domain]",
          description: "show DNS information about a domain",
        },
        {
          kind: "cheat",
          cheat: "nslookup [domain]",
          description: "receive information about an internet domain",
        },
        {
          kind: "cheat",
          cheat: "wget [file_name]",
          description: "download a file from a domain",
        },
        {
          kind: "cheat",
          cheat: "curl -O [file_name]",
          description: "save a remote file to your system",
        },
      ],
    },
  ],
};
