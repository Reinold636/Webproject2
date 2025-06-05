function createContactSection() {
      const main = document.getElementById("main-content");

      const contactHTML = `
        <section class="contact-section">
          <div class="contact-wrapper">
            <h2>Contact Us</h2>
            <p>Have questions about our products or your order? We'd love to hear from you.</p>

            <form action="https://formspree.io/f/mblylyen" method="POST" class="contact-form">
              <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required>
              </div>

              <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="_replyto" placeholder="you@example.com" required>
              </div>

              <div class="form-group">
                <label for="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="What's this about?">
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="6" placeholder="Write your message here..." required></textarea>
              </div>

              <button type="submit" class="submit-button">Send Message</button>
            </form>
          </div>
        </section>
      `;

      main.innerHTML = contactHTML;
    }


    window.onload = createContactSection;

function sendMessage(){
    alert("Your message has been sent successfully!");
}