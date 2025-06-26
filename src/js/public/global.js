
{
    var navigation_drawer = document.querySelector("mdui-navigation-drawer");
    document.querySelector("#menu_button").addEventListener("click", () => {
        navigation_drawer.open = !navigation_drawer.open;
    });
}


{
    const { getTheme } = mdui;
    document.querySelector("#content").computedStyleMap()
}


{
    // 一个使用 mdui js 组件的例子
    const { snackbar } = mdui;
    const button = document.querySelector("#menu_button");
    button.addEventListener("click", () => {
        snackbar({
            message: document.querySelector("mdui-navigation-drawer").open,
            action: "关闭",
            onActionClick: () => console.log("click action button")
        });
    });
}
