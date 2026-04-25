import { useState } from "react";
import "./styles/HireModal.css";

interface HireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HireModal = ({ isOpen, onClose }: HireModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    try {
      await fetch("https://formspree.io/f/mgordqpb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        form.reset();
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <div className="hire-modal-overlay" onClick={onClose}>
      <div className="hire-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="hire-modal-left">
          <img src="/images/price.png" alt="Pricing" className="hire-modal-image" />
        </div>
        <div className="hire-modal-right">
          <button className="hire-modal-close" onClick={onClose}>
            ×
          </button>
          <h2 className={`hire-modal-title ${isSubmitted ? "fade-out" : ""}`}>Hire Me</h2>
          <form
            className={`hire-modal-form ${isSubmitted ? "fade-out" : ""}`}
            onSubmit={handleFormSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone No</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} required></textarea>
            </div>
            <button type="submit" className="hire-modal-submit">
              Submit
            </button>
          </form>
          {isSubmitted && (
            <div className="hire-modal-success">
              <div className="success-circle">
                <span className="success-checkmark">✓</span>
              </div>
              <h3>Your hiring request submitted. We contact you within 1 to 3 hours. Thankyou 🤗.</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HireModal;
