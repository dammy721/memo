// ページが読み込まれたときに実行される関数
window.onload = function () {
    const memoTextArea = document.getElementById("memo");
    const saveButton = document.getElementById("saveButton");

    // 保存ボタンがクリックされたときの処理
    saveButton.addEventListener("click", function () {
        const memoText = memoTextArea.value;
        localStorage.setItem("memo", memoText);
        alert("メモが保存されました。");
    });

    // ページ読み込み時に保存されたメモを表示
    const savedMemo = localStorage.getItem("memo");
    if (savedMemo) {
        memoTextArea.value = savedMemo;
    }
};
