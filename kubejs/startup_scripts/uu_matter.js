/*
* uu_matter.js - Register uu matter.
*/
GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("strange_blue_matter")
        .gem(3)
        .dust()
        .color(0x0000ff);
    event.create("rare_blue_matter")
        .gem(3)
        .dust()
        .color(0x0000e0);
    event.create("mysterious_matter")
        .fluid()
        .color(0xa000a0);
});

ItemEvents.modification(event => {
    event.modify("gtceu:exquisite_strange_blue_matter_gem", item => {
        item.rarity = "uncommon";
        item.foodProperties = food => {
            food.hunger(10);
            food.saturation(10);
            food.fastToEat();
            food.alwaysEdible();
        };
    });
    event.modify("gtceu:rare_blue_matter_dust", item => {
        item.rarity = "epic";
    });
});
