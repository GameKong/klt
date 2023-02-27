INFO="$(ps -ef | grep mongo)"
IFS=" "
array=($INFO)
PID=${array[1]}
if [ -n "$PID"  ]
then
	sudo kill $PID
	echo "shutdown progress mongo: $INFO"
else
	echo "no progress mongo"
fi
