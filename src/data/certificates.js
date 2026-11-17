/* Sertifika programları — ana sayfa kartları ve detay sayfaları bu veriyi kullanır. */
export const CERTIFICATES = [
  {
    slug: 'kurumsal-sertifika',
    icon: 'M20 6h-4V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2H4a2 2 0 00-2 2v11a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2zm-10-2h4v2h-4V4zm10 15H4V8h16v11z',
    title: 'Kurumsal Sertifika',
    desc: 'Şirketlerin kalite yönetimi, ISO standartları ve kurumsal yeterlilik süreçlerini belgeleyen resmî sertifika programı.',
    duration: '8 Hafta',
    level: 'Kurumsal',
    topics: [
      'ISO 9001 kalite yönetim sistemi',
      'Süreç & risk yönetimi',
      'İç denetim ve belgelendirme',
    ],
    intro:
      'Kurumsal Sertifika programı; şirketlerin kalite yönetimi, süreç standartları ve mevzuata uyum çalışmalarını belgeleyen resmî bir yeterlilik programıdır. Katılımcılar, ISO standartları, iç denetim ve kurumsal risk yönetimi konularında uygulamalı yetkinlik kazanır.',
    audience: [
      'Kalite yönetim sorumluları',
      'Kurumsal süreç ve denetim ekipleri',
      'Şirket sahipleri ve üst düzey yöneticiler',
    ],
    modules: [
      {
        title: 'Kalite Yönetim Sistemleri',
        desc: 'ISO 9001 temel ilkeleri, dokümantasyon ve süreç yaklaşımı.',
      },
      {
        title: 'Süreç ve Risk Yönetimi',
        desc: 'Kurumsal süreçlerin haritalanması, risk analizi ve iyileştirme.',
      },
      {
        title: 'İç Denetim Teknikleri',
        desc: 'Denetim planlama, bulgu yazımı ve düzeltici faaliyet yönetimi.',
      },
      {
        title: 'Belgelendirme Süreci',
        desc: 'Başvuru, gözetim denetimi ve belge sürekliliğinin yönetimi.',
      },
    ],
    outcomes: [
      'Kurumsal kalite yönetim sistemini kurgulayabilme',
      'Süreç ve risk analizi yapabilme',
      'İç denetim yürütebilme',
      'Belgelendirme sürecini uçtan uca yönetebilme',
    ],
    format: 'Hibrit (Online + Yüz Yüze)',
    exam: 'Çoktan seçmeli sınav + vaka değerlendirmesi',
    validity: '3 yıl (gözetim denetimiyle yenilenir)',
  },
  {
    slug: 'on-muhasebe-sertifikasi',
    icon: 'M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z',
    title: 'Ön Muhasebe Sertifikası',
    desc: 'Ön muhasebe, e-fatura, e-defter ve temel finansal süreçlerde uzmanlaşmak isteyenler için pratik odaklı program.',
    duration: '12 Hafta',
    level: 'Başlangıç',
    topics: [
      'Temel muhasebe kayıtları',
      'E-fatura & e-defter uygulamaları',
      'Bordro ve SGK işlemleri',
    ],
    intro:
      'Ön Muhasebe Sertifikası; muhasebe alanına adım atanlar ve mevcut bilgisini belgelemek isteyenler için tasarlanmış pratik odaklı bir programdır. Katılımcılar, günlük muhasebe işlemlerini mevzuata uygun şekilde yürütecek düzeyde yetkinlik kazanır.',
    audience: [
      'Muhasebe kariyerine başlamak isteyenler',
      'İşletme, iktisat ve maliye öğrencileri',
      'Küçük işletme sahipleri',
    ],
    modules: [
      {
        title: 'Temel Muhasebe Kayıtları',
        desc: 'Tek düzen hesap planı, yevmiye ve büyük defter kayıtları.',
      },
      {
        title: 'E-Fatura ve E-Defter',
        desc: 'Elektronik belge süreçleri ve yasal bildirimler.',
      },
      {
        title: 'Bordro ve SGK İşlemleri',
        desc: 'Ücret hesaplama, bildirge ve personel işlemleri.',
      },
      {
        title: 'Finansal Tablo Okuma',
        desc: 'Bilanço, gelir tablosu ve temel finansal göstergeler.',
      },
    ],
    outcomes: [
      'Günlük muhasebe kayıtlarını tutabilme',
      'E-fatura ve e-defter süreçlerini yürütebilme',
      'Bordro ve SGK bildirgelerini hazırlayabilme',
      'Temel finansal tabloları okuyabilme',
    ],
    format: 'Online + Uygulama Atölyesi',
    exam: 'Uygulamalı ödev + çoktan seçmeli sınav',
    validity: 'Ömür boyu geçerli',
  },
  {
    slug: 'insaat-ustaligi-sertifikasi',
    icon: 'M22 19h-2V8a2 2 0 00-2-2h-3V4a2 2 0 00-2-2H9a2 2 0 00-2 2v2H4a2 2 0 00-2 2v11H0v2h22v-2zM9 4h4v2H9V4zm11 15h-3V8h3v11zM4 19V8h3v11H4zm5 0V6h4v13H9z',
    title: 'İnşaat Ustalığı Sertifikası',
    desc: 'İnşaat sektöründe çalışan ustalar için teknik yeterlilik, iş güvenliği ve mesleki standartları belgeleyen program.',
    duration: '4 Hafta',
    level: 'Orta',
    topics: [
      'Teknik çizim ve ölçüm',
      'Yapı malzemeleri bilgisi',
      'Şantiye iş güvenliği kuralları',
    ],
    intro:
      'İnşaat Ustalığı Sertifikası; sahada çalışan ustaların teknik bilgi, uygulama becerisi ve iş güvenliği standartlarına uygunluğunu belgeleyen mesleki yeterlilik programıdır. Program, saha deneyimiyle desteklenen uygulamalı içeriklerden oluşur.',
    audience: [
      'İnşaat sektöründe çalışan ustalar',
      'Şantiye şefleri ve teknik personel',
      'Mesleki yeterlilik belgesi almak isteyenler',
    ],
    modules: [
      {
        title: 'Teknik Çizim ve Ölçüm',
        desc: 'Plan okuma, ölçekli ölçüm ve uygulama hesabı.',
      },
      {
        title: 'Yapı Malzemeleri Bilgisi',
        desc: 'Malzeme türleri, standartları ve doğru kullanım yöntemleri.',
      },
      {
        title: 'Uygulama Teknikleri',
        desc: 'Kalıp, beton, duvar ve ince işler uygulamaları.',
      },
      {
        title: 'Şantiye İş Güvenliği',
        desc: 'Kişisel koruyucu donanım ve saha güvenliği kuralları.',
      },
    ],
    outcomes: [
      'Teknik projeyi okuyup uygulayabilme',
      'Malzeme seçimini standarda uygun yapabilme',
      'Uygulama hatalarını tespit edebilme',
      'Şantiye güvenlik kurallarını uygulayabilme',
    ],
    format: 'Yüz Yüze (Saha Uygulamalı)',
    exam: 'Uygulama değerlendirmesi + sözlü sınav',
    validity: '5 yıl',
  },
  {
    slug: 'is-sagligi-guvenligi',
    icon: 'M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z',
    title: 'İş Sağlığı & Güvenliği',
    desc: 'İSG mevzuatı, risk değerlendirmesi ve acil durum yönetimi konularında uzmanlaşmak isteyenler için kapsamlı program.',
    duration: '10 Hafta',
    level: 'İleri',
    topics: [
      'İSG mevzuatı ve yasal yükümlülükler',
      'Risk değerlendirme yöntemleri',
      'Acil durum ve tahliye yönetimi',
    ],
    intro:
      'İş Sağlığı & Güvenliği programı; işyerlerinde güvenli çalışma kültürünü kurmak ve mevzuata uyumu sağlamak isteyen profesyonellere yöneliktir. Katılımcılar, risk değerlendirmesi, acil durum planlaması ve İSG dokümantasyonu konularında uzmanlaşır.',
    audience: [
      'İSG uzmanı ve teknik personel adayları',
      'İnsan kaynakları ve operasyon yöneticileri',
      'İşyeri sorumluları ve vardiya şefleri',
    ],
    modules: [
      {
        title: 'İSG Mevzuatı',
        desc: '6331 sayılı Kanun ve ikincil mevzuat yükümlülükleri.',
      },
      {
        title: 'Risk Değerlendirmesi',
        desc: 'Risk analiz yöntemleri, tehlike kaynakları ve önlem planı.',
      },
      {
        title: 'İSG Dokümantasyonu',
        desc: 'İşe giriş eğitimleri, kayıt ve raporlama süreçleri.',
      },
      {
        title: 'Acil Durum Yönetimi',
        desc: 'Tahliye planı, tatbikat ve ilk yardım organizasyonu.',
      },
    ],
    outcomes: [
      'İSG mevzuatına uygun süreç kurgulayabilme',
      'Risk değerlendirme raporu hazırlayabilme',
      'Acil durum planı oluşturabilme',
      'İş kazalarında doğru bildirim yönetebilme',
    ],
    format: 'Hibrit (Online + Yüz Yüze)',
    exam: 'Çoktan seçmeli sınav + proje ödevi',
    validity: '3 yıl',
  },
  {
    slug: 'dijital-pazarlama',
    icon: 'M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
    title: 'Dijital Pazarlama',
    desc: 'SEO, sosyal medya, reklam yönetimi ve veri analitiği alanlarında güncel dijital pazarlama yetkinlikleri.',
    duration: '7 Hafta',
    level: 'Orta',
    topics: [
      'SEO ve içerik stratejisi',
      'Sosyal medya reklam yönetimi',
      'Google & Meta Ads analitiği',
    ],
    intro:
      'Dijital Pazarlama programı; markaların çevrimiçi görünürlüğünü artırmak ve reklam bütçelerini veriye dayalı yönetmek isteyenler için tasarlanmıştır. Katılımcılar, kampanya kurulumundan performans ölçümüne kadar tüm süreci uygulamalı olarak öğrenir.',
    audience: [
      'Pazarlama ve iletişim profesyonelleri',
      'KOBİ sahipleri ve girişimciler',
      'Sosyal medya ve içerik üreticileri',
    ],
    modules: [
      {
        title: 'Dijital Strateji ve SEO',
        desc: 'Hedef kitle analizi, anahtar kelime ve içerik planı.',
      },
      {
        title: 'Sosyal Medya Yönetimi',
        desc: 'İçerik takvimi, topluluk yönetimi ve organik büyüme.',
      },
      {
        title: 'Reklam Kampanyaları',
        desc: 'Google Ads ve Meta Ads kampanya kurulumu ve optimizasyonu.',
      },
      {
        title: 'Veri Analitiği',
        desc: 'GA4 ile ölçümleme, raporlama ve dönüşüm takibi.',
      },
    ],
    outcomes: [
      'Dijital pazarlama stratejisi kurabilme',
      'SEO uyumlu içerik üretebilme',
      'Reklam kampanyası yönetebilme',
      'Performans raporu analiz edebilme',
    ],
    format: 'Online + Canlı Atölye',
    exam: 'Kampanya projesi + çoktan seçmeli sınav',
    validity: '2 yıl',
  },
  {
    slug: 'yabanci-dil-mesleki-ingilizce',
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1a2 2 0 002 2v1.93zm6.9-2.54a2 2 0 00-1.9-1.39h-1v-3a1 1 0 00-1-1H8v-2h2a1 1 0 001-1V7h2a2 2 0 002-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z',
    title: 'Yabancı Dil & Mesleki İngilizce',
    desc: 'İş dünyasında geçerli, uluslararası standartlara uygun mesleki İngilizce yeterlilik belgesi.',
    duration: '12 Hafta',
    level: 'Orta',
    topics: [
      'İş yazışması ve e-posta dili',
      'Toplantı ve sunum İngilizcesi',
      'Mesleki terminoloji',
    ],
    intro:
      'Yabancı Dil & Mesleki İngilizce programı; iş hayatında etkin iletişim kurmak ve mesleki terminolojiye hâkim olmak isteyenlere yöneliktir. Program sonunda uluslararası standartlara uygun yeterlilik belgesi verilir.',
    audience: [
      'Uluslararası firmalarda çalışanlar',
      'İşe alım sürecinde dil belgesi gereken adaylar',
      'İhracat ve dış ticaret çalışanları',
    ],
    modules: [
      {
        title: 'İş Yazışması ve E-posta',
        desc: 'Resmî yazışma kalıpları ve kurumsal e-posta dili.',
      },
      {
        title: 'Toplantı ve Sunum',
        desc: 'Etkili sunum yapısı, tartışma ve müzakere ifadeleri.',
      },
      {
        title: 'Mesleki Terminoloji',
        desc: 'Sektöre özel terimler ve teknik ifadeler.',
      },
      {
        title: 'Telefon ve Görüşme',
        desc: 'Görüşme teknikleri ve sözlü iletişim pratiği.',
      },
    ],
    outcomes: [
      'Kurumsal e-posta ve yazışma yapabilme',
      'Toplantı ve sunumlarda akıcı iletişim kurabilme',
      'Mesleki terminolojiyi doğru kullanabilme',
      'Uluslararası standartta yeterlilik belgesi alma',
    ],
    format: 'Online (Canlı Ders)',
    exam: 'Yazılı + sözlü yeterlilik sınavı',
    validity: 'Ömür boyu geçerli',
  },
]

export const getCertificate = (slug) => CERTIFICATES.find((c) => c.slug === slug)
