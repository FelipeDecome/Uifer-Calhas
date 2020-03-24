function toggleClass(elem, rem = null, add = null) {
    if (rem) {
        elem.classList.remove(rem)
    }

    if (add) {
        elem.classList.add(add)
    }
}
