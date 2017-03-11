str ='naresh babu is a good from illaparu village';
sub_str = str.substring(28,35)
sub_rep =str.replace('good','best')
str_pos =str.indexOf('f');
str_lastpos=str.lastIndexOf('e')

document.write(str);
document.write("<br>");

document.write(str.toUpperCase());
document.write('<br>');

document.write(str.toLowerCase());
document.write('<br>');

document.write(sub_str);
document.write('<br>');

document.write(sub_rep);
document.write('<br>');

document.write(str);
document.write('<br>');

document.write(str_pos);
document.write('<br>');

document.write(str_lastpos);


