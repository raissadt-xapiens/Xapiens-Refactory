Git.
Definisi:
Sebuah version control system yang membantu software team dalam mengelola perubahan source code dari waktu ke waktu.
Tujuan:
Memudahkan proses pelacakan pada setiap perubahan pada kode, dengan membandingkan kode sebelumnya dan sesudahnya. Dapat digunakan pada setiap jenis projek dalam skala kecil maupun besar.  
Karakteristik:
Memiliki 3 (tiga) status, yaitu:
- modified -> perubahan file belum ditandai
- staged -> menandai bahwa file tersebut mengalami perubahan
- commited -> data sudah terubah di database.
Sebelum menggunakannya, harus mengkonfigurasikan user name dan user email melalui $ git config. Kemudian, menginialisasikan suatu project repository pada Github, Gitlab, dll melalui $ git init. Terdapat 2 (dua) pilihan, yaitu menyalin proyek orang lain atau membuat proyek baru. Cara membuat project repository baru dengan membuka website Github/Gitlab account dan create new repository. Setelah itu, dibutuhkan $ git clone "repository link" pada terminal untuk dapat melihat, menyalin, dan memodifikasi repo tersebut.
Saat menyalin, terdapat 2 (cara) yang umum digunakan, yaitu melalui HTTPS dan SSH Key. Jika memakai HTTPS, maka user perlu melakukan login setiap kali akan melakukan perubahan terhadap kode. Sebaliknya, ketika menggunakan SSH, user hanya perlu melakukan sinkronisasi sebanyak satu kali di awal. Cara ini dinilai lebih efisien jika laptop/PC yang digunakan milik pribadi sehingga aman dan tidak tercampur dengan akun orang lain.
Memiliki 3 (tiga) langkah utama, yaitu:
$ git add .
$ git commit -m "the message"
$ git push.
Ketiga hal ini dilakukan secara berurutan untuk dapat mengupload kode yang dikerjakan di database. Dan untuk melihat file mana saja yang berubah dan status pada masing-masing file bisa dengan $ git status. Sedangkan, $ git log untuk melihat riwayat commit yang telah dilakukan.
Ketika satu projek dikerjakan oleh beberapa developer, maka biasanya akan ada beberapa kode yang bercabang agar masing-masing developer dapat terus melakukan pekerjaan tanpa mengganggu jalur utama (branch master). Oleh karena itu, diperlukan $ git branch "new branch" untuk membuat branch baru, $ git checkout "the branch" untuk pindah ke branch tersebut, dan $ git merge "the branch" untuk menggabungkan code pada satu branch ke branch yang lain. Namun, perlu diingat bahwa untuk meminimalkan konflik dapat menggunakan $ git pull terlebih dahulu setiap akan memodifikasi kode.
Command line pada Git juga dapat disingkat agar memudahkan pemanggilan perintah menjadi lebih sederhana. Contohnya, dengan menginstall 'zsh' pada terminal. Disamping itu, alias ini juga dapat memberi petunjuk perintah dari riwayat pengetikan yang sudah ada.



Code Productivity.
Produktivitas dalam melakukan pemrograman ini diperlukan oleh setiap programmer untuk mengerjakan sistem perangkat lunaknya. Masing-masing memiliki cara yang berbeda, namun utamanya harus menjaga pola hidup yang sehat agar tidak mengganggu fisik kita.



Development Methodology:
Agile:
Salah satu metode pola pikir yang biasanya digunakan oleh developer team dalam menyelesaikan proyek. Salah satu karakteristik utamanya adalah memiliki sifat yang lebih fleksibel terhadap perubahan masalah, sehingga pola penyelesaiannya juga akan menyesuaikan pada perubahan tersebut. Terdapat Sprint Planning untuk menyusun daftar pekerjaan untuk masing-masing tim dan Sprint Backlog untuk mengetahui jalannya pekerjaan tersebut. Trello adalah salah satu alat yang digunakan oleh satu tim.
Scrum:
Pengimplitasian metode agile, dan lebih merinci kepada teknis pengerjaannya. Dalam satu tim terdiri dari Product Owner, Scrum Master, dan Developers. Namun, jika jumlah anggota tim terbatas tidak menutup kemungkinan untuk memiliki 2 (dua) tugas sekaligus. Mereka akan mengadakan daily meeting selama 10-15 menit untuk memaparkan daily progress masing-masing, kendala, dan pekerjaan selanjutnya.