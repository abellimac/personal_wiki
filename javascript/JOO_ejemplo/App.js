class Product {
	constructor(name, price, year) {
		this.name = name;
		this.price = price;
		this.year = year;
	}
}

class UI {
	addProduct(product) {
		const productList = document.getElementById('product-list');
		const element = document.createElement('div');
		element.innerHTML = `
			<div class="card text-center mb-4">
				<div class="card-body">
					<strong>Product Name</strong>: ${product.name}, 
					<strong>Product Price</strong>: ${product.price}, 
					<strong>Product Year</strong>: ${product.year}
					<a href="#" name="delete" class="btn btn-danger">Delete</a>
				</div>
			</div>
		`;

		productList.appendChild(element);
		this.showMessage('Product Added successfully', 'success');
		this.resetForm();
	}

	resetForm() {
		document.getElementById('product-form').reset();
	}

	deleteProduct(element) {
		if (element.name === 'delete') {
			element.parentElement.parentElement.parentElement.remove();
			this.showMessage('Product Removed successfully', 'info');
		}
	}

	showMessage(message, cssClass) {
		const app = document.getElementById('App');
		const div = document.createElement('div');
		const container = document.querySelector('.container');
		div.className = 'alert mt-3 alert-' + cssClass;
		div.appendChild(document.createTextNode(message));
		container.insertBefore(div, app);

		setTimeout(function() {
			document.querySelector('.alert').remove();
		}, 3000);
	}
}

// DOM Events
document.getElementById('product-form').addEventListener('submit', function(e) {
	const name = document.getElementById("name").value;
	const price = document.getElementById("price").value;
	const year = document.getElementById("year").value;

	const product = new Product(name, price, year);
	const ui = new UI();

	if (name === '' || price === '' || year === '') {
		ui.showMessage('Complete the fields, please', 'danger');
		return;
	}

	ui.addProduct(product);

	e.preventDefault();
});

document.getElementById("product-list").addEventListener('click', function(e) {
	const ui = new UI();
	ui.deleteProduct(e.target);
});