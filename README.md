# tooltip-component
I was very interested in how Bootstrap components are made so I decided to make them. I made the tooltip today too. I hope you enjoy it.

# Prerequisties
* install npm

# installation
 first download or clone this project and open it in your code editor and open the terminal and run this line:
 ```shell
npm install
```
Now just enter the following command in the terminal:
 ```shell
npm start
```

## Usage
You can create a tooltip both through data attributes and through JavaScript.

--- Via data attribute
 ```shell
    <button class="btn btn-dark" data-mx-toggle="tooltip" data-mx-placement="top" data-mx-title="hello, top tooltip :)">top tooltip</button>
```

--- Via javascript

 ```shell
    let triggerTooltipEl = document.querySelector('triggerTooltipExample');
    let tooltip = new Tooltip(triggerTooltipEl, options);
```

---methods

Method | Argument | Description 
--- | --- | --- | 
show() | '' | Show tooltip | 
hide() | '' | hide tooltip |
updatePosition() | '' | Updates the tooltip position when the window is resized |
updatePlacementArrow(placement) | string <top, left, right, bottom> | Updates the tooltip arrow position when placement changed |

## Live preview
  click [myCodepen](https://codepen.io/mxworld/pen/LYjojPY) link.

## Contributing
As I use this for my own projects, I know this might not be the perfect approach
for all the projects out there. If you have any ideas, just
[open an issue](https://github.com/Miladxsar23/tooltip-component/issues/new) and tell me what you think.

If you'd like to contribute, please fork the repository and make changes as
you'd like. Pull requests are warmly welcome.

## Licensing
This project is licensed under MIT license.

## Contact
* email: milad.xsar72@gmail.com
