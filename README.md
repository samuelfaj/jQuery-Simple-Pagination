# jQuery-Simple-Pagination
Allows you to create paginations between divs with only html.

## Usage
Add a element with:
* "pagination" class.
* Same data-id 
* Different data-page for different pages 

And calls it from a element with:
* "pagination" rel.
* Same data-id 
* Same 
data-page.

## Example Code
```
<div style="width:400px;border: 1px solid #000"> <!-- Example Div -->
	<div class="pagination active" data-id="1" data-page="1">1</div> <!-- Paginated Div -->
	<div class="pagination" data-id="1" data-page="2">2</div> <!-- Paginated Div -->
</div>
<a href="#" rel="pagination" data-id="1" data-page="1">1</a>
<a href="#" rel="pagination" data-id="1" data-page="2">2</a>

<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script async src="jquery_simplepagination.js"

<script>$.simple_pagination();</script>
```

Easy as you see.
