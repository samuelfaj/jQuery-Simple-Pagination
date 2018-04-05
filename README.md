<p align="center">
<img src="https://github.com/samuelfaj/jQuery-Simple-Pagination/blob/master/usage.gif" align="center">
</p>

<hr>

## Install
```html 
<script src="js/jQuery.simple.pagination.js" onload="$.pagination()"></script>
```

## Usage
Each group of divs and links must have a unique ID (*they all need to have the attribute `data-id` and it's equal for the group*).

The pages must have the `sp` attribute and a unique page number.

The links must have the `sp-link` attribute and will refer to a page by having the same `data-id` and `data-page`.

## Example Code
```html
<h1>jQuery Simple Pagination</h1>

<hr>

<div>
	<div sp data-id="my-id" data-page="1">Page 1</div>
	<div sp data-id="my-id" data-page="2">Page 2</div>
	<div sp data-id="my-id" data-page="3">Page 3</div>
	<div sp data-id="my-id" data-page="4">Page 4</div>
	<div sp data-id="my-id" data-page="5">Page 5</div>
</div>

<hr>

<nav aria-label="Page navigation example">
  <ul class="pagination">
	<li class="page-item" sp-link data-id="my-id" data-page="1">
		<a class="page-link" href="#">1</a>
	</li>
	<li class="page-item" sp-link data-id="my-id" data-page="2">
		<a class="page-link" href="#">2</a>
	</li>
	<li class="page-item" sp-link data-id="my-id" data-page="3">
		<a class="page-link" href="#">3</a>
	</li>
	<li class="page-item" sp-link data-id="my-id" data-page="4">
		<a class="page-link" href="#">4</a>
	</li>
	<li class="page-item" sp-link data-id="my-id" data-page="5">
		<a class="page-link" href="#">5</a>
	</li>
  </ul>
</nav>

<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script src="js/jQuery.simple.pagination.js" onload="$.pagination()"></script>
```

Easy, as you can see.
