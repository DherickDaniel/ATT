function trocarImagem1() {
  var imagem = document.getElementById("foto1");
  if (imagem.src.includes("https://a-static.mlcdn.com.br/800x560/ar-condicionado-split-lg-voice-ai-15000-btus-frio-dual-inverter-220v-s3-q15jl31a/techshop/kitlgvoice15000btus/5f9b028bc99a8c3bdc1658fad5ee5b24.jpeg")) {
    imagem.src = "https://a-static.mlcdn.com.br/1500x1500/ar-condicionado-split-inverter-springer-midea-12-000-btus-frio-220v/climario/13023/0b8f203c61345bdf5b144296cfb1fce7.jpg";
  } else {
    imagem.src = "https://a-static.mlcdn.com.br/800x560/ar-condicionado-split-lg-voice-ai-15000-btus-frio-dual-inverter-220v-s3-q15jl31a/techshop/kitlgvoice15000btus/5f9b028bc99a8c3bdc1658fad5ee5b24.jpeg";
  }
}

function trocarImagem2() {
  var imagem = document.getElementById("foto2");
  if (imagem.src.includes("https://friopecas.vtexassets.com/arquivos/ids/247450-1200-auto?v=638797168455200000&width=1200&height=auto&aspect=true")) {
    imagem.src = "https://cdn.leroymerlin.com.br/products/ar_condicionado_split_frio_9000_btus_220v_inverter_voice_lg_3378774920_77f8_1800x1800.jpg";
  } else {
    imagem.src = "https://friopecas.vtexassets.com/arquivos/ids/247450-1200-auto?v=638797168455200000&width=1200&height=auto&aspect=true";
  }
}

function trocarImagem3() {
  var imagem = document.getElementById("foto3");
  if (imagem.src.includes("https://www.frigelar.com.br/ccstore/v1/images/?source=/file/v3534355652678860314/products/kit9896_1.jpg&height=475&width=475")) {
    imagem.src = "https://strar.vteximg.com.br/arquivos/ids/162952-1000-1000/ar-condicionado-lg-multi-split-artcool-tri-split-24000btus.jpg?v=637272346837970000";
  } else {
    imagem.src = "https://www.frigelar.com.br/ccstore/v1/images/?source=/file/v3534355652678860314/products/kit9896_1.jpg&height=475&width=475";
  }
}

function trocarImagem4() {
  var imagem = document.getElementById("foto4");
  if (imagem.src.includes("https://friopecas.vtexassets.com/arquivos/ids/233746-1200-auto?v=638578742334630000&width=1200&height=auto&aspect=true")) {
    imagem.src = "https://www.simplesdecoracao.com.br/wp-content/uploads/2022/06/ar-condicionado.jpg";
  } else {
    imagem.src = "https://friopecas.vtexassets.com/arquivos/ids/233746-1200-auto?v=638578742334630000&width=1200&height=auto&aspect=true";
  }
}

function multiplicarNumeros() {
    var metros = parseFloat(document.getElementById("metros²").value);
    var resultado = metros * 650;
    document.getElementById("resultado").textContent = resultado + "BTUS";
}