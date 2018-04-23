

document.getElementById('bm_form').addEventListener('submit',saveBookMark);


// ################################################################
function saveBookMark(e) 
	{
		// console.log('save bookmark');
		var siteName = document.querySelector('#sitename').value;
		var siteUrl = document.querySelector('#siteUrl').value;

		var bookmark = 
			{
			name: siteName,
			url: siteUrl
			};

		// localStorage.setItem(key, value);
		// localStorage.setItem('test', 'hello world');
		// console.log(localStorage.getItem('test'));

		localStorage.setItem(key, value);

		// check if the bookmark is in the array
		if (localStorage.getItem('bookmarks')=== null)
				{
				// init the array
				var bookmark = [];

				// add to the array
				bookmarks.push(bookmark);

				// put it in localStorage
				localStorage.setItem('bookmarks',JASON.stringify(bookmarks));
				}
		else
				{
				// get bookmarks from localStorage
				var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

				// and new bookmarks into bookmarks
				bookmarks.push(bookmarks);

				// reset back to bookmarks to localStorage
				localStorage.setItem('bookmarks',JASON.stringify(bookmarks));
				}

		// reset the from
		document.querySelector('#myform').reset;

		fetchBookMarks();

		e.preeventDefault();
	}

// ################################################################
function fetchBookMarks() 
	{
		// body...
		// get bookmarks from localStorage
		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

		// where are we going to put the bookmarks
		var bookmarkResults = document.querySelector('bookmarkResults');

		// build an output
		bookmarkResults.innerHTML = '';

		for (var i = 0; i < bookmarks.length; i++)
			{
			var name = bookmarks[i].name;
			var url = bookmarks[i].url;
	 
			bookmarks.innerHTML += '<div><h3>' + name + 
					'<a class="btn btn-success" "href=""' +
			         url + '">visit</a>:'  + 
			         '"<a class="btn btn-success onclick"deletebookmark"""'
			         // THERE IS MORE TO THIS CRAP [ABOVE]

			};

	}

document.write("hi");

// ################################################################
function deletebookmark(url) 
	{
		
		// get bookmarks from localStorage
		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

		// loop through the loop
		for (var i = 0; i < bookmarks.length; i++)
			{
				if (bookmarks[i].url == url)
					{
					bookmarks.splice(i,1);
					break;
					}
			}


		// Remove bookmarks from array
		localStorage.setItem('bookmarks',JASON.stringify(bookmarks));


		// reset bookmarks array back to localStorage


		// refresh bookmarksResult
		fetchBookMarks()


	}

