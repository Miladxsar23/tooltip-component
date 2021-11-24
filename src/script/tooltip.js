let tooltipListEl = Array.from(document.querySelectorAll('[data-mx-toggle="tooltip"]'));
let tooltips = [];
//tooltip class
class Tooltip {
  constructor(element, option) {
    this.element = element;
    this.placement = option.placement || element.getAttribute("data-mx-placement");
    this.content = option.content || element.getAttribute("data-mx-title");
    this.dom = elt("div", {
      className: `tooltip fade tooltip-mx-${this.placement}`
    }, this.content);
    document.body.appendChild(this.dom);
  }

  updatePosition() {
    let placement;
    if (overflowXCheck()) {
      placement = "top";
      this.updatePlacementArrow(placement);
    } else {
      placement = this.placement;
      this.updatePlacementArrow(placement);
    }
    let {
      top,
      left
    } = getTooltipPosition(this.element, placement, this.dom);
    this.dom.style.top = top + 'px';
    this.dom.style.left = left + 'px';
  }

  show() {
    this.dom.classList.add('show');
  }

  hide() {
    this.dom.classList.remove("show");
  }
  updatePlacementArrow(placement) {
    if (placement === this.placement) {
      this.dom.classList.remove(`tooltip-mx-top`)
      this.dom.classList.add(`tooltip-mx-${this.placement}`)
    } else {
      this.dom.classList.remove(`tooltip-mx-${this.placement}`)
      this.dom.classList.add(`tooltip-mx-${placement}`)
    }
  }
}
//fn -> return <Object (top, left)>
function getTooltipPosition(targetEl, placement, tooltip) {
  let top, left;
  let d = 5;
  switch (placement) {
    case "top":
      top = targetEl.offsetTop - targetEl.clientHeight;
      left = targetEl.offsetLeft;
      break;
    case 'left':
      top = targetEl.offsetTop;
      left = targetEl.offsetLeft - tooltip.clientWidth - d;
      break;
    case 'right':
      top = targetEl.offsetTop;
      left = targetEl.offsetLeft + targetEl.clientWidth + d;
      break;
    case 'bottom':
      top = targetEl.offsetTop + targetEl.clientHeight + (targetEl.clientHeight - tooltip.clientHeight);
      left = targetEl.offsetLeft;
      break;
  }
  return {
    top,
    left
  };
}
//helper function for create DOM element
function elt(type, props, ...childrens) {
  let elem = document.createElement(type);
  if (props) Object.assign(elem, props);
  for (let child of childrens) {
    if (typeof child == 'string') elem.appendChild(document.createTextNode(child))
    else elem.appendChild(child)
  }
  return elem;
}

//add hover and click event for showing or hidden tooltip
tooltipListEl.forEach(tooltipEl => {
  let tooltip = new Tooltip(tooltipEl, {});
  tooltip.updatePosition()
  tooltipEl.addEventListener('mouseover', function (e) {
    tooltip.show()
  })
  tooltipEl.addEventListener('mouseout', function (e) {
    tooltip.hide()
  })
  tooltips.push(tooltip);
})
//tooltip update position when window resize event is fired
window.addEventListener('resize', function (e) {
  tooltips.map(t => {
    t.updatePosition()
  })
})

//check overflow accure or not
function overflowXCheck() {
  if (document.querySelector('html').scrollWidth > document.body.clientWidth) return true;
  else return false;
}
