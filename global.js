
document.querySelector("#menu_button").addEventListener("click", () => document.querySelector("mdui-navigation-drawer").open = true);

{
    // 一个使用 mdui js 组件的例子
    const { snackbar } = mdui;
    const button = document.querySelector(".example-button");
    button.addEventListener("click", () => {
        snackbar({
            message: "Photo archived",
            action: "Undo",
            onActionClick: () => console.log("click action button")
        });
    });
}
