# Gets last modified html file in "/posts" and treat it as the last post to show in homepage

# go to /post/ and get the last modified file name
cd "./posts" && 
OUTPUT="$(ls -A -1 -t | head -1)" &&

# go back and create a "sed" command string to replace LAST_POST_DATE with found filename in javascritpt file
cd .. && 
SEDCOMMAND="s/LAST_POST_DATE/\"${OUTPUT}\"/g" &&

# replace LAST_POST_DATE with last post filename in index_tmp.js
sed $(echo "${SEDCOMMAND}") index.js > index_tmp.js &&

# create minified javascript with the last post filename inside
uglifyjs index_tmp.js -o index_min.js -m -c &&

# remove tmp file
rm index_tmp.js