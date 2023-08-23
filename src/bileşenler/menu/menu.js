import "./Menu.less";

// Kullanacağımız veri bu, üzerinde çalışın ama henüz hiçbir şeyi değiştirmeyin.
let menuElemanlari = [
  "Gündem",
  "Dünya",
  "Ekonomi",
  "Yazarlar",
  "Burç Yorumları",
  "Diğer",
];

/*
  Adım 1: Aşağıdaki etiketler gibi bir menü oluşturmak için 'menuYapici' adlı bir bileşen yazın:

  <div class="menu">
    <ul>
      {tüm menü elemanları <li> içlerine}
    </ul>
  </div>

  'menuYapici' fonksiyonu tek argümanı olarak bir menü elemanları dizisini alır (birinci parametre).

  Adım 2: Fonksiyonun içinde, dizideki her öğe için bir liste <li> öğesi oluşturarak dizi üzerinde yineleme yapın.
  Tüm bu öğeleri <ul>'a ekleyin

  Adım 3: Hala fonksiyon içindeyiz, DOM'dan menü düğmesini seçin (`index.html` içinde `menu-button` sınıfına (class) sahip öğe).

  Adım 4: Menü butonuna bir `click` event dinleyicisi ekleyin. B
  utona her tıklanıldığında div.menu classına `menu--open`('menu' class'ına sahip olan div) ekleyip/silecek(toogle).
  
  İPUCU: Javascript'te toogle metotları bir öğeyi bir elemana ekleyip/çıkarmaya yarar. 
  Örnek olarak bir öğeye tıklandığında bir class toogle'ı kullanıldığında, 
  o öğreye tıklandığında eğer o class ismi öğede yoksa ekler, eğer o class ismi öğede varsa siler. 
  Toogle - aç kapa manasına da gelir.

  Adım 5: Oluştrulan div.menu 'yü döndürmeyi unutmayın.

  Adım 6: 'menuYapici' fonksiyonunu ve 'menuElemanlari' dizisini kullanarak menüyü oluşturun, ve döndürülen menüyü header'e ekleyin.
*/

function menuYapici(arr) {
  const container1 = document.createElement("div");
  container1.className = "menu";

  const list = document.createElement("ul");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");
  const li4 = document.createElement("li");
  const li5 = document.createElement("li");
  const li6 = document.createElement("li");
  li1.textContent = arr[0];
  li2.textContent = arr[1];
  li3.textContent = arr[2];
  li4.textContent = arr[3];
  li5.textContent = arr[4];
  li6.textContent = arr[5];

  list.append(li1);
  list.append(li2);
  list.append(li3);
  list.append(li4);
  list.append(li5);
  list.append(li6);

  container1.append(list);

  const menuBtn = document.querySelector(".menu-button");

  menuBtn.addEventListener("click", (e) => {
    container1.classList.toggle("menu--open");
  });
  return container1;
}

const header = document.querySelector(".header");

header.append(menuYapici(menuElemanlari));
