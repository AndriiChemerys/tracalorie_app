// Storage Controller

// Item Controller
const ItemCtrl = (function () {
    // Item Constructor
    const Item = function (id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    // Data Structure / State
    const data = {
        items: [{
                id: 0,
                name: 'Steak Dinner',
                calories: 1200
            },
            {
                id: 1,
                name: 'Cookie',
                calories: 400
            },
            {
                id: 2,
                name: 'Eggs',
                calories: 300
            },
        ],
        currentItem: null,
        totalCalories: 0
    }

    // Public methods
    return {
        getItems: function () {
            return data.items;
        },
        addItem: function (name, calories) {
            // Create ID

            console.log(name, calories);
        },
        logData: function () {
            return data;
        }
    }
})();

// UI Controller
const UICtrl = (function () {
    const UISelectors = {
        itemList: '#item-list',
        addBtn: '.add-btn',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories'
    }

    // Public methods
    return {
        populateItemList: function (items) {
            let html = "";

            items.forEach(function (item) {
                html += `<li class="collection-item" id="item-${item.id}">
                <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content">
                  <i class="fa fa-pencil"></i>
                </a>
              </li>`;
            });

            // Insert list items
            document.querySelector(UISelectors.itemList).innerHTML = html;
        },
        getItemInput: function () {
            return {
                name: document.querySelector(UISelectors.itemNameInput).value,
                calories: document.querySelector(UISelectors.itemNameInput).value
            }
        },
        getSelectors: function () {
            return UISelectors;
        }
    }
})();

// App Controller
const AppCtrl = (function (ItemCtrl, UICtrl) {
    // Load event listeners
    const loadEventListener = function () {
        const UISelectors = UICtrl.getSelectors();

        //Add item event
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
    }

    // Add item submit
    const itemAddSubmit = function (e) {
        // Get form input from UI Controller
        const input = UICtrl.getItemInput();

        // Check for name and calorie input
        if (input.name !== '' && input.calories !== '') {
            console.log(123);
            //Add item
            const newItem = ItemCtrl.addItem(input.name, input.calories);
        }
        console.log(input);
        e.preventDefault();
    }

    // Public methods
    return {
        init: function () {
            // Fetch items from data structure
            const items = ItemCtrl.getItems();

            // Populate list with items
            UICtrl.populateItemList(items);

            // Load event listeners
            loadEventListener();
        }
    }

})(ItemCtrl, UICtrl);

AppCtrl.init();