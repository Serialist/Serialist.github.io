
document.querySelector("#menu_button").addEventListener("click", () => document.querySelector("mdui-navigation-drawer").open = true);

{
    // һ��ʹ�� mdui js ���������
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
