### PopCircle.
Popcircle is a jQuery plugin for customize image gallery, it has the functionality to turn the html image elements into a pop circle.

##features
* can customize the pop circle limits.
* can show the popcircles around the trigger as full circle or half or quarter.
* able to customize animation time and easing functionality

### For Full Circle

```
$.popcircle('#pops',{
							spacing:'15px',
							type:'full', // full, half, quad
							
							ease:'easeOutElastic',
							time:'slow' // slow, fast, 1000
							}
				   );
```

### For Half Circle

```
$.popcircle('#pops2',{
							spacing:'10px',
							type:'half', // full, half, quad
							offset:5,	// 0, 1, 2, 3, 4, 5, 6, 7 or 5.1
							ease:'easeOutQuad',
							time:'fast' // slow, fast, 1000
							}
				   );

```
### For Quarter Circle

```
$.popcircle('#pops3',{
							spacing:'10px',
							type:'quad', // full, half, quad
							offset:5,	// 0, 1, 2, 3, 4, 5, 6, 7 or 5.1
							ease:'easeOutQuad',
							time:'fast' // slow, fast, 1000
							}
				   );

```