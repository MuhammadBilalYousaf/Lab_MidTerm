
const parent = document.getElementsByClassName('faq-container');
const faqs = document.querySelectorAll('.faq');
const form = document.getElementById('addFaqForm');
const question = document.getElementById('question');
const answer = document.getElementById('answer');

faqs.forEach(faq => {
 const toggle = faq.querySelector('.faq-toggle');
 const times = faq.querySelector('.fa-times');

 toggle.addEventListener('click', () => {
    faq.classList.toggle('active');
 });

 times.addEventListener('click', () => {
    parent[0].removeChild(faq);
 });
});


function add_question() {
    const title = document.querySelectorAll('.faq-title')
  const tag = document.createElement(`h3`);
  const mytext = document.createTextNode(question.value);
  tag.append(mytext);
  title.append(tag);
  faqs.append(title);
  parent.append(faqs);

  const faq_text = document.querySelectorAll('.faq-text')
  const tag1 = document.createElement(`p`);
  const mytext1 = document.createTextNode(answer.value);
  tag1.append(mytext1);
  faq_text.append(tag1);
  faqs.append(faq_text);
  parent.append(faqs);
}





