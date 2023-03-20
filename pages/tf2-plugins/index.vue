<template>
  <div id="tf2-page">
    <h1 class="page-title"></h1>
    <div class="page-content">
      <h1>TF2_PLUGINs</h1>
      <p>Angaben gemäß § 5 TMG</p>
      <div class="page-section">
        <h3>Kontakt</h3>
        <p>
          <span>lx media solutions</span><br>
          Bindsachser Straße 20<br>
          63683 Ortenberg<br>
          Telefon: <a href="tel:4916092055319" class="highlight">+49 160 92055319</a><br>
          E-Mail: <a href="mailto:hi@l03.dev" class="highlight">hi@l03.dev</a>
        </p>
        <p>
          <span>Gesetzlich Vertreten durch:</span><br />
          Laurin Noel Frank <br />
          Telefon: <a href="tel:4916092055319" class="highlight">+49 160 92055319</a><br>
          E-Mail: <a href="mailto:hi@l03.dev" class="highlight">hi@l03.dev</a>
        </p>
      </div>
      <div class="page-section">
        <h3>Haftung für Inhalte</h3>
        <p>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
          Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
          jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
          Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
          Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
          Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
          gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
          forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
          entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
          entfernen.
        </p>
      </div>
      <div class="page-section">
        <h3>Haftung für Links</h3>
        <p>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
          Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
          Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
          verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
          waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
          inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
          Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden
          von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </p>
      </div>
      <div class="page-section">
        <h3>Urheberrecht</h3>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
          werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
          Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
          Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
          wir derartige Inhalte umgehend entfernen.
        </p>
      </div>
      <div class="page-section">
        <h3>Datenschutz</h3>
        <p>
          Die Nutzung unserer Webseite ist in der Regel ohne Angabe
          personenbezogener Daten möglich. Soweit auf unseren Seiten
          personenbezogene Daten (beispielsweise Name, Anschrift oder
          eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf
          freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
          Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass
          die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail)
          Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor
          dem Zugriff durch Dritte ist nicht möglich. Der Nutzung von im Rahmen
          der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur
          Übersendung von nicht ausdrücklich angeforderter Werbung und
          Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die
          Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im
          Falle der unverlangten Zusendung von Werbeinformationen, etwa durch
          Spam-Mails, vor.
        </p>
      </div>
      <div class="page-section">
        <h3>Geltungsbereich</h3>
        <p>
          Dieses Impressum gilt nur unter folgenden Domänen:<br />
          *.l03.dev<br />
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const { $ScrollReveal } = useNuxtApp();
async function initScrollReveal() {
  await $ScrollReveal().reveal(".page-section", {
    distance: "75px",
    origin: "left",
    cleanup: true,
    delay: 100,
    duration: 1000,
    reset: true,
    viewFactor: 0.3,
  });
}

onMounted(() => {
  (async () => {
    await initScrollReveal();
  })();
});
</script>

<style lang="sass">
#tf2-page
  @apply bg-neutral-800 h-full py-6
  .page-content
    @apply backdrop-blur-[50px] p-10 overflow-hidden mx-2 md:mx-6 rounded-3xl bg-neutral-900
    h1
      @apply text-5xl text-[#FFD796] font-bold pb-10
    h3
      @apply w-fit text-2xl pt-2 text-[#FFD796]
    p
      @apply pb-2 text-neutral-500
    span
      @apply text-neutral-300
    a
      @apply no-underline text-white
  .highlight
    @apply relative text-white no-underline
    &:hover
      @apply text-neutral-400 transition-colors duration-200 ease-in-out
      &:after
        @apply scale-x-100 origin-bottom-left
    &:after
      @apply absolute w-full -bottom-0.5 left-0 h-[2px] content-[''] bg-[#FFD796] transition-transform duration-200 ease-in-out scale-x-0 origin-bottom-right
</style>