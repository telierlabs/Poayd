const input = document.getElementById('todoInput');
const btn = document.getElementById('addBtn');
const list = document.getElementById('todoList');

// Fungsi untuk menambah tugas
btn.addEventListener('click', () => {
    const taskValue = input.value.trim();

    if (taskValue !== "") {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskValue}</span>
            <button style="background:none; color:red; padding:0;" onclick="this.parentElement.remove()">Hapus</button>
        `;
        list.appendChild(li);
        input.value = ""; // Reset input
    } else {
        alert("Isi dulu dong tugasnya!");
    }
});

// Tambah tugas saat tekan tombol Enter
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        btn.click();
    }
});
