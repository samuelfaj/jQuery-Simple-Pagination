# jQuery-Simple-Pagination
Allows you to create paginations between divs with only html.

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

Add a element with "pagination" class, data-id and data-page and calls it from a element with rel="pagination".
