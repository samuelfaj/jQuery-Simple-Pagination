<p align="center">
<img src="https://github.com/samuelfaj/jQuery-Simple-Pagination/blob/master/usage.gif" align="center">
</p>

<hr>

## Install
```html 
<script src="js/jQuery.simple.pagination.js" onload="$.pagination()"></script>
```

## Usage
* Add an unique `data-id` for the group of divs and links.
* Add a page, it must have a `sp` attribute, an unique `data-page` number and the same group `data-id`.
* Add a link to this page, it must have a `sp-link` attribute, the `data-page` which it'll call and the same group `data-id`.
* The element of page/link doesn't matter. It can be a div, an link, a span...

**Example of page:**
```html 
<div sp data-id="my-id" data-page="1">Page 1</div>
```

**Example of its link:**
```html 
<a sp-link data-id="my-id" data-page="1" href="#">1</a>
```

## Example
```html
<div sp data-id="my-id" data-page="1">Page 1</div>
<div sp data-id="my-id" data-page="2">Page 2</div>
<div sp data-id="my-id" data-page="3">Page 3</div>
<div sp data-id="my-id" data-page="4">Page 4</div>
<div sp data-id="my-id" data-page="5">Page 5</div>

<hr>

<a sp-link data-id="my-id" data-page="1" href="#">1</a>
<a sp-link data-id="my-id" data-page="2" href="#">2</a>
<a sp-link data-id="my-id" data-page="3" href="#">3</a>
<a sp-link data-id="my-id" data-page="4" href="#">4</a>
<a sp-link data-id="my-id" data-page="5" href="#">5</a>

<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script src="js/jQuery.simple.pagination.js" onload="$.pagination()"></script>
```
