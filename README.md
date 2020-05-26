div align = "center">

<img height=200px src="./src/assets/dsc_logo.png">

# DEVELOPER STUDENT CLUBS TIET

<a href="https://medium.com/developer-student-clubs-tiet"><img src="https://github.com/aritraroy/social-icons/blob/master/medium-icon.png?raw=true" width="60"></a>
<a href="https://twitter.com/dsctiet"><img src="https://github.com/aritraroy/social-icons/blob/master/twitter-icon.png?raw=true" width="60"></a>
<a href="https://www.linkedin.com/company/developer-student-club-thapar"><img src="https://github.com/aritraroy/social-icons/blob/master/linkedin-icon.png?raw=true" width="60"></a>
<a href="https://facebook.com/dscthapar"><img src="https://github.com/aritraroy/social-icons/blob/master/facebook-icon.png?raw=true" width="60"></a>
<a href="https://instagram.com/dsc.tiet"><img src="https://github.com/aritraroy/social-icons/blob/master/instagram-icon.png?raw=true" width="60"></a>

# [Library](https://library.dsctiet.tech)

This is the repo for the Library Website of DSC Thapar Institute of Engineering and Technology, Patiala , Punjab. 
This is the fork of the [Calibre](https://calibre-ebook.com) Repository, modified for the needs of our servers and userbase.
</div>

# About

Calibre-Web is a web app providing a clean interface for browsing, reading and downloading eBooks using an existing [Calibre](https://calibre-ebook.com) database.

*This software is a fork of [library](https://github.com/mutschler/calibreserver) and licensed under the GPL v3 License.*

![Main screen](https://github.com/janeczku/calibre-web/wiki/images/main_screen.png)

## Features

- Bootstrap 3 HTML5 interface
- full graphical setup
- User management with fine-grained per-user permissions
- Admin interface
- User Interface in czech, dutch, english, finnish, french, german, hungarian, italian, japanese, khmer, polish, russian, simplified chinese, spanish, swedish, turkish, ukrainian
- OPDS feed for eBook reader apps 
- Filter and search by titles, authors, tags, series and language
- Create a custom book collection (shelves)
- Support for editing eBook metadata and deleting eBooks from Calibre library
- Support for converting eBooks through Calibre binaries
- Restrict eBook download to logged-in users
- Support for public user registration
- Send eBooks to Kindle devices with the click of a button
- Sync your Kobo devices through Calibre-Web with your Calibre library
- Support for reading eBooks directly in the browser (.txt, .epub, .pdf, .cbr, .cbt, .cbz)
- Upload new books in many formats, including audio formats (.mp3, .m4a, .m4b)
- Support for Calibre Custom Columns
- Ability to hide content based on categories and Custom Column content per user
- Self-update capability
- "Magic Link" login to make it easy to log on eReaders
- Login via LDAP, google/github oauth and via proxy authentication

## Quick start

1. Install dependencies by running `pip3 install --target vendor -r requirements.txt` (python3.x) or `pip install --target vendor -r requirements.txt` (python2.7).
2. Execute the command: `python cps.py` (or `nohup python cps.py` - recommended if you want to exit the terminal window)
3. Point your browser to `http://localhost:8083` or `http://localhost:8083/opds` for the OPDS catalog
4. Set `Location of Calibre database` to the path of the folder where your Calibre library (metadata.db) lives, push "submit" button\
   Optionally a Google Drive can be used to host the calibre library [-> Using Google Drive integration](https://github.com/janeczku/calibre-web/wiki/Configuration#using-google-drive-integration)
5. Go to Login page

**Default admin login:**\
*Username:* admin\
*Password:* admin123

**Issues with Ubuntu:**
Please note that running the above install command can fail on some versions of Ubuntu, saying `"can't combine user with prefix"`. This is a [known bug](https://github.com/pypa/pip/issues/3826) and can be remedied by using the command `pip install --system --target vendor -r requirements.txt` instead.

## Requirements

python 3.x+, (Python 2.7+)

Optionally, to enable on-the-fly conversion from one ebook format to another when using the send-to-kindle feature, or during editing of ebooks metadata:

[Download and install](https://calibre-ebook.com/download) the Calibre desktop program for your platform and enter the folder including program name (normally /opt/calibre/ebook-convert, or C:\Program Files\calibre\ebook-convert.exe) in the field "calibre's converter tool" on the setup page.

\*** DEPRECATED \*** Support will be removed in future releases

[Download](http://www.amazon.com/gp/feature.html?docId=1000765211) Amazon's KindleGen tool for your platform and place the binary named `kindlegen` in the `vendor` folder.

# Wiki

For further information, How To's and FAQ please check the [Wiki](https://github.com/janeczku/calibre-web/wiki)
