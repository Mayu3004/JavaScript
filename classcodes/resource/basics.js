alert("Mayur")
alert("Mayur")
undefined
10+5
15
20-5
15
2+2-5
-1

2+2+2
6
2.2+2.2
4.4
10.9 *2 +20.95
42.75
10.9 *2 +20.95+4.99
47.74
 // Order of operations 
undefined
// * / are done first + - are done after (operator precedence)
undefined
(1+1)*3
6

20.95 + 7.99*2
36.93
36.93*0.1
3.693
20.95+7.99*2*0.1
22.548
(20.95+7.99*2)*0.1
3.693
0.1 + 0.2
0.30000000000000004
20.95+7.99
28.939999999999998
(2095+799)/100
28.94


Math.round(2.8)
3
((2095+799)*0.1)/100
2.894
Math.round((2095+799)*0.1) /100
2.89 


// Exercise Chapter 2

//2a
10+(3*8)+5
//2b
(10+(3*8)+5)*3
//2c
((1850)+(750*2))/100
//2d
(((1850)+(750*2))/100)*0.1
//2e
(((1850)+(750*2))/100)*0.2
//2f
(2095 + 799 + 1899) / 100
//2g
(2095 + 799 + 1899 + 499) / 100
//2h
Math.round((799 + 2095 + 1899 + 499) * 0.1) / 100
//2i
(2095 + 799 + 1899 + 499) / 100 + Math.round((2095 + 799 + 1899 + 499) * 0.1) / 100
//2j
Math.floor(2.8)
//2k
Math.ceil(2.2)
//2l
(25*9/5)+32
//2m
(86-32)*5/9
//2n
(-5*9/5)+32

//Lesson 3
//STRINGS

'hello'
'some'+'text'
'some'+'more'+'text'

typeof

'$'+20.95+7.99 //$20.957.99
'$'+(2095+799)/100 //$28.94

'Items ('+(1+1)+'):$'+(2095+799)/100 //Items(2):28.94
 
`Items (${1+1}):$${(2095+799)/100}`

//Exercise
//3a
"My name is"
//3b
'Mayur'
//3c
'My name is '+'Mayur'
//3d
`Total cost: $${5+3}`
//3e
`Total cost: $${5+3}`
//3f
alert(`Total cost: $${5+3}`)
//3g
`Total cost: $${(295+599)}`
//3h
`Total cost: $${(295+599)}`
//3i
alert(`Total cost: $${(295+599)}`)
//3j
alert(`Total cost: $${(295+599)}\n Thank you,come again`)
//3k
`Items (${2 + 2}): $${(2 * 2095 + 2 * 799) / 100}`
//3l
`Shipping & handling: $${(499 + 499) / 100}`
//3m
`Total before tax: $${(2 * 2095 + 2 * 799 + 499 + 499) / 100}`
//3n
`Estimated tax (10%): $${Math.round((2 * 2095 + 2 * 799 + 499 + 499) * 0.1) / 100}`

