
/* ==========================================
   THE SQUARE
   SMART RESTAURANT MENU
   Complete Updated JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ========================================
    // 1. HTML ELEMENTS
    // ========================================

    const menuGrid = document.getElementById("menuGrid");
    const searchInput = document.getElementById("searchInput");
    const courseFilter = document.getElementById("courseFilter");
    const dietFilter = document.getElementById("dietFilter");
    const spiceFilter = document.getElementById("spiceFilter");
    const tasteOptions = document.getElementById("tasteOptions");

    const tableNumber = document.getElementById("tableNumber");
    const selectedTableMessage =
        document.getElementById("selectedTableMessage");

    const cartButton = document.getElementById("cartButton");
    const cartPanel = document.getElementById("cartPanel");
    const closeCart = document.getElementById("closeCart");
    const cartItems = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");

    const checkoutButton = document.getElementById("checkoutButton");
    const checkoutDialog = document.getElementById("checkoutDialog");
    const checkoutForm = document.getElementById("checkoutForm");
    const checkoutSummary = document.getElementById("checkoutSummary");
    const cancelCheckout = document.getElementById("cancelCheckout");


    // ========================================
    // 2. MENU DATA
    // ========================================

    const dishes = [
        {
            id: 1,
            name: "Five Spiced Chicken",
            price: 349,
            course: "Starters",
            diet: "Non-Veg",
            spice: "Medium",
            tastes: ["Spicy", "Juicy", "Smoky"],
            description: "Chicken starter prepared with aromatic spices.",
            image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 2,
            name: "Vetta Mamsam Jeedi Pappu Vepudu",
            price: 429,
            course: "Starters",
            diet: "Non-Veg",
            spice: "Hot",
            tastes: ["Spicy", "Crispy"],
            description: "A flavourful Andhra-style mutton preparation.",
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 3,
            name: "Murgh Angare",
            price: 379,
            course: "Starters",
            diet: "Non-Veg",
            spice: "Hot",
            tastes: ["Spicy", "Smoky", "Juicy"],
            description: "Spicy chicken with a smoky flavour.",
            image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 4,
            name: "Atishi Jhinga",
            price: 449,
            course: "Starters",
            diet: "Non-Veg",
            spice: "Medium",
            tastes: ["Juicy", "Tangy", "Spicy"],
            description: "Juicy prawns cooked with delicious spices.",
            image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 5,
            name: "Prawn XO",
            price: 469,
            course: "Starters",
            diet: "Non-Veg",
            spice: "Medium",
            tastes: ["Juicy", "Tangy"],
            description: "A rich and savoury prawn speciality.",
            image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 6,
            name: "Kodi Miriyala Vepudu",
            price: 359,
            course: "Main Course",
            diet: "Non-Veg",
            spice: "Hot",
            tastes: ["Spicy", "Crispy"],
            description: "Pepper chicken with an Andhra-style flavour.",
            image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 7,
            name: "Kashmiri Rogan Josh",
            price: 499,
            course: "Main Course",
            diet: "Non-Veg",
            spice: "Medium",
            tastes: ["Spicy", "Juicy"],
            description: "Aromatic Kashmiri-style curry.",
            image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 8,
            name: "Araku Allam Royyala Iguru",
            price: 459,
            course: "Main Course",
            diet: "Non-Veg",
            spice: "Hot",
            tastes: ["Spicy", "Juicy", "Tangy"],
            description: "Prawns cooked with ginger and regional spices.",
            image: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 9,
            name: "Thai Curry with Jasmine Rice",
            price: 399,
            course: "International",
            diet: "Veg",
            spice: "Medium",
            tastes: ["Creamy", "Spicy", "Light"],
            description: "Thai-inspired curry served with fragrant rice.",
            image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 10,
            name: "Karaikudi Kalan Curry",
            price: 329,
            course: "Main Course",
            diet: "Veg",
            spice: "Hot",
            tastes: ["Spicy", "Juicy"],
            description: "South Indian mushroom curry.",
            image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 11,
            name: "Guntur Mirapakaya Kodi Kura",
            price: 389,
            course: "Main Course",
            diet: "Non-Veg",
            spice: "Hot",
            tastes: ["Spicy", "Juicy"],
            description: "A spicy Guntur-style chicken curry.",
            image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 12,
            name: "Andhra Vegetable Korma",
            price: 279,
            course: "Main Course",
            diet: "Veg",
            spice: "Medium",
            tastes: ["Creamy", "Spicy"],
            description: "Mixed vegetables cooked in creamy curry.",
            image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 13,
            name: "Stuffed Paratha",
            price: 149,
            course: "Rice & Breads",
            diet: "Veg",
            spice: "Mild",
            tastes: ["Crispy", "Hot & Comforting"],
            description: "Flaky Indian flatbread with a tasty filling.",
            image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 14,
            name: "Steamed Idly",
            price: 99,
            course: "Breakfast",
            diet: "Veg",
            spice: "Mild",
            tastes: ["Light", "Hot & Comforting"],
            description: "Soft steamed idlis served with chutney.",
            image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 15,
            name: "Chocolate Dessert",
            price: 199,
            course: "Sweet Ending",
            diet: "Veg",
            spice: "Mild",
            tastes: ["Sweet", "Creamy"],
            description: "A delicious sweet treat to finish your meal.",
            image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 16,
            name: "Cheesy Vegetable Sandwich",
            price: 179,
            course: "Round the Clock",
            diet: "Veg",
            spice: "Mild",
            tastes: ["Cheesy", "Crispy"],
            description: "Toasted sandwich filled with cheese and vegetables.",
            image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
        }
    ];


    // ========================================
    // 3. APPLICATION STATE
    // ========================================

    let cart = [];
    let selectedTastes = [];

    function formatPrice(amount) {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }).format(amount);
    }


    // ========================================
    // 4. DISPLAY MENU
    // ========================================

    function renderMenu(items) {
        menuGrid.innerHTML = "";

        if (items.length === 0) {
            const message = document.createElement("p");
            message.className = "empty-message";
            message.textContent =
                "No dishes found. Please change your filters.";
            menuGrid.appendChild(message);
            return;
        }

        items.forEach((dish) => {
            const card = document.createElement("article");
            card.className = "dish-card";

            const image = document.createElement("img");
            image.src = dish.image;
            image.alt = dish.name;
            image.loading = "lazy";

            image.addEventListener("error", () => {
                image.alt = `${dish.name} image unavailable`;
                image.style.display = "none";
            }, { once: true });

            const info = document.createElement("div");
            info.className = "dish-info";

            const title = document.createElement("h3");
            title.textContent = dish.name;

            const description = document.createElement("p");
            description.textContent = dish.description;

            const tags = document.createElement("div");
            tags.className = "dish-meta";

            [dish.course, dish.diet, dish.spice].forEach((value) => {
                const tag = document.createElement("span");
                tag.className = "dish-tag";
                tag.textContent = value;
                tags.appendChild(tag);
            });

            const price = document.createElement("div");
            price.className = "dish-price";
            price.textContent = formatPrice(dish.price);

            const addButton = document.createElement("button");
            addButton.className = "add-to-cart";
            addButton.type = "button";
            addButton.textContent = "＋ Add to Cart";

            addButton.addEventListener("click", () => {
                addToCart(dish.id);
                addButton.textContent = "✓ Added";
                setTimeout(() => {
                    addButton.textContent = "＋ Add to Cart";
                }, 700);
            });

            info.append(title, description, tags, price, addButton);
            card.append(image, info);
            menuGrid.appendChild(card);
        });
    }


    // ========================================
    // 5. SEARCH AND FILTERS
    // ========================================

    function filterMenu() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const course = courseFilter.value;
        const diet = dietFilter.value;
        const spice = spiceFilter.value;

        const filteredDishes = dishes.filter((dish) => {
            const matchesSearch =
                dish.name.toLowerCase().includes(searchTerm) ||
                dish.description.toLowerCase().includes(searchTerm) ||
                dish.course.toLowerCase().includes(searchTerm);

            const matchesCourse =
                course === "All" || dish.course === course;

            const matchesDiet =
                diet === "All" || dish.diet === diet;

            const matchesSpice =
                spice === "All" || dish.spice === spice;

            const matchesTaste =
                selectedTastes.length === 0 ||
                selectedTastes.some((taste) =>
                    dish.tastes.includes(taste)
                );

            return matchesSearch &&
                matchesCourse &&
                matchesDiet &&
                matchesSpice &&
                matchesTaste;
        });

        renderMenu(filteredDishes);
    }

    searchInput.addEventListener("input", filterMenu);
    courseFilter.addEventListener("change", filterMenu);
    dietFilter.addEventListener("change", filterMenu);
    spiceFilter.addEventListener("change", filterMenu);


    // ========================================
    // 6. TASTE PREFERENCE BUTTONS
    // ========================================

    tasteOptions.addEventListener("click", (event) => {
        const button = event.target.closest(".taste-chip");

        if (!button) return;

        const taste = button.dataset.taste;
        if (!taste) return;

        if (selectedTastes.includes(taste)) {
            selectedTastes = selectedTastes.filter(
                (item) => item !== taste
            );

            button.classList.remove("active");
            button.setAttribute("aria-pressed", "false");
        } else {
            selectedTastes.push(taste);

            button.classList.add("active");
            button.setAttribute("aria-pressed", "true");
        }

        filterMenu();
    });


    // ========================================
    // 7. TABLE NUMBER SELECTION
    // ========================================

    if (tableNumber && selectedTableMessage) {
        tableNumber.addEventListener("change", () => {
            if (tableNumber.value) {
                selectedTableMessage.textContent =
                    `✓ You selected Table ${tableNumber.value}.`;
            } else {
                selectedTableMessage.textContent =
                    "Please select your table.";
            }
        });
    }


    // ========================================
    // 8. ADD DISH TO CART
    // ========================================

    function addToCart(dishId) {
        const dish = dishes.find((item) => item.id === dishId);

        if (!dish) return;

        const existingItem = cart.find((item) => item.id === dishId);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...dish,
                quantity: 1
            });
        }

        renderCart();
    }


    // ========================================
    // 9. DISPLAY CART AND TOTAL
    // ========================================

    function renderCart() {
        cartItems.innerHTML = "";

        if (cart.length === 0) {
            const emptyMessage = document.createElement("p");
            emptyMessage.textContent = "Your cart is empty.";
            cartItems.appendChild(emptyMessage);
        } else {
            cart.forEach((item) => {
                const row = document.createElement("div");
                row.className = "cart-item";

                const details = document.createElement("div");

                const name = document.createElement("h3");
                name.textContent = item.name;

                const quantity = document.createElement("p");
                quantity.textContent =
                    `${formatPrice(item.price)} × ${item.quantity}`;

                details.append(name, quantity);

                const removeButton = document.createElement("button");
                removeButton.type = "button";
                removeButton.textContent = "Remove";
                removeButton.setAttribute(
                    "aria-label",
                    `Remove one ${item.name}`
                );

                removeButton.addEventListener("click", () => {
                    removeFromCart(item.id);
                });

                row.append(details, removeButton);
                cartItems.appendChild(row);
            });
        }

        const totalQuantity = cart.reduce(
            (sum, item) => sum + item.quantity,
            0
        );

        const totalPrice = cart.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );

        cartCount.textContent = totalQuantity;
        cartTotal.textContent = formatPrice(totalPrice);

        checkoutButton.disabled = cart.length === 0;
        checkoutButton.style.opacity =
            cart.length === 0 ? "0.5" : "1";
    }


    // ========================================
    // 10. REMOVE ITEMS FROM CART
    // ========================================

    function removeFromCart(dishId) {
        const item = cart.find((dish) => dish.id === dishId);

        if (!item) return;

        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            cart = cart.filter((dish) => dish.id !== dishId);
        }

        renderCart();
    }


    // ========================================
    // 11. OPEN AND CLOSE CART
    // ========================================

    cartButton.addEventListener("click", () => {
        cartPanel.hidden = false;
    });

    closeCart.addEventListener("click", () => {
        cartPanel.hidden = true;
    });


    // ========================================
    // 12. CHECKOUT WITH TABLE NUMBER
    // ========================================

    checkoutButton.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Please add a dish to your cart first.");
            return;
        }

        if (!tableNumber || !tableNumber.value) {
            alert("Please select a table number before checkout.");

            const tableSection =
                document.getElementById("tableSelection");

            if (tableSection) {
                tableSection.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }

            if (tableNumber) {
                tableNumber.focus();
            }

            return;
        }

        const total = cart.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );

        const orderDetails = cart.map((item) =>
            `${item.name} × ${item.quantity} — ${
                formatPrice(item.price * item.quantity)
            }`
        );

        checkoutSummary.textContent =
            `Table ${tableNumber.value} | ` +
            `${orderDetails.join(" | ")} | ` +
            `Total: ${formatPrice(total)}`;

        cartPanel.hidden = true;

        if (typeof checkoutDialog.showModal === "function") {
            checkoutDialog.showModal();
        } else {
            alert(checkoutSummary.textContent);
        }
    });


    // ========================================
    // 13. CANCEL CHECKOUT
    // ========================================

    cancelCheckout.addEventListener("click", () => {
        checkoutDialog.close();
    });


    // ========================================
    // 14. CONFIRM DEMO ORDER
    // ========================================

    checkoutForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (cart.length === 0 || !tableNumber.value) {
            checkoutDialog.close();
            alert("Please check your cart and table selection.");
            return;
        }

        const confirmedTable = tableNumber.value;

        alert(
            `Thank you for ordering from THE SQUARE!\n\n` +
            `Your demo order for Table ${confirmedTable} ` +
            `has been placed successfully.`
        );

        // Clear cart after confirmation
        cart = [];
        renderCart();

        // Reset table selection
        tableNumber.value = "";

        if (selectedTableMessage) {
            selectedTableMessage.textContent =
                "Please select your table.";
        }

        // Reset taste preferences
        selectedTastes = [];

        document.querySelectorAll(".taste-chip").forEach((button) => {
            button.classList.remove("active");
            button.setAttribute("aria-pressed", "false");
        });

        checkoutDialog.close();
        filterMenu();
    });


    // ========================================
    // 15. INITIALIZE WEBSITE
    // ========================================

    renderMenu(dishes);
    renderCart();

});