var names=['naresh','sai','sachin','siva','anil','gauri','karthik'];
document.write(names);
document.write('<br>');
document.write(names.length);
document.write('<br>');
names[names.length]='hariesh';
document.write(names);
document.write('<br>');
names.push('madhu');
document.write(names);
document.write('<br>');
names.pop('naresh');
document.write(names);
document.write('<br>');
names.shift();
document.write(names);
document.write('<br>');
names.unshift('murthy');
document.write(names);
document.write('<br>');
names.slice(3,0,'balu');
document.write(names);



