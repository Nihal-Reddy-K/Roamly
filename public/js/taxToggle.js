const taxSwitch = document.getElementById("taxSwitch");
const prices = document.querySelectorAll(".listing-price");
const taxInfos = document.querySelectorAll(".tax-info");

const TAX_RATE = 0.18;

if (taxSwitch) {
    taxSwitch.addEventListener("change", () => {
        prices.forEach((priceEl, index) => {
            const basePrice = Number(priceEl.dataset.price);

            if (taxSwitch.checked) {
                const totalPrice = Math.round(basePrice * (1 + TAX_RATE));
                priceEl.textContent = `₹${totalPrice.toLocaleString("en-IN")}`;
                if (taxInfos[index]) {
                    taxInfos[index].textContent = " / night incl. taxes";
                }
            } else {
                priceEl.textContent = `₹${basePrice.toLocaleString("en-IN")}`;
                if (taxInfos[index]) {
                    taxInfos[index].textContent = " / night";
                }
            }
        });
    });
}