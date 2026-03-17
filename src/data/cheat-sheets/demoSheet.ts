export const demoSheet = `
<!-- paste this directly into Jodit Editor (source mode) -->

<div style="max-width: 100%; margin: 0 auto; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 0 12px; box-sizing: border-box;">

  <!-- Header -->
  <div style="text-align: center; margin-bottom: 24px;">
    <div style="background: linear-gradient(to right, #c41e3a, #8b0000); color: white; padding: 16px; border-radius: 8px; margin-bottom: 8px;">
      <h1 style="font-size: clamp(18px, 5vw, 24px); font-weight: bold; margin: 0;">❤️ LEFT vs RIGHT-SIDED HEART FAILURE</h1>
    </div>
    <p style="color: #4B5563; font-style: italic; font-size: 14px;">Quick Reference Guide for Healthcare Professionals</p>
  </div>

  <!-- Pathophysiology -->
  <div style="margin-bottom: 24px; border: 1px solid #D1D5DB; border-radius: 8px; overflow: hidden;">
    <div style="background: linear-gradient(to right, #c41e3a, #8b0000); color: white; padding: 12px 16px; font-weight: bold; font-size: 16px;">
      📋 PATHOPHYSIOLOGY
    </div>
    <div style="padding: 16px; background: white;">
      <div style="display: grid; grid-template-columns: 1fr; gap: 16px; md:grid-cols-2;">
        <div>
          <div style="background: #c41e3a; color: white; text-align: center; padding: 8px; border-radius: 6px; margin-bottom: 12px; font-weight: bold; font-size: 14px;">
            LEFT-SIDED HEART FAILURE
          </div>
          <p style="font-size: 13px; margin-bottom: 8px; line-height: 1.5;">
            <strong>Definition:</strong> Left ventricle unable to pump blood efficiently to systemic circulation
          </p>
          <p style="font-size: 13px; margin-bottom: 8px; line-height: 1.5;">
            <strong>Mechanism:</strong> Blood backs up into pulmonary veins → pulmonary congestion → pulmonary edema
          </p>
          <p style="font-size: 13px; margin-bottom: 4px; line-height: 1.5;">
            <strong>Types:</strong>
          </p>
          <ul style="font-size: 13px; line-height: 1.6; padding-left: 20px; margin: 0;">
            <li><strong>Systolic:</strong> Reduced contractility (HFrEF)</li>
            <li><strong>Diastolic:</strong> Impaired relaxation/filling (HFpEF)</li>
          </ul>
        </div>

        <div>
          <div style="background: #0066cc; color: white; text-align: center; padding: 8px; border-radius: 6px; margin-bottom: 12px; font-weight: bold; font-size: 14px;">
            RIGHT-SIDED HEART FAILURE
          </div>
          <p style="font-size: 13px; margin-bottom: 8px; line-height: 1.5;">
            <strong>Definition:</strong> Right ventricle unable to pump blood efficiently to pulmonary circulation
          </p>
          <p style="font-size: 13px; margin-bottom: 8px; line-height: 1.5;">
            <strong>Mechanism:</strong> Blood backs up into systemic veins → peripheral edema → organ congestion
          </p>
          <p style="font-size: 13px; margin-bottom: 8px; line-height: 1.5;">
            <strong>Common Cause:</strong> Often secondary to left-sided failure (pulmonary hypertension)
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Heart Diagram -->
  <div style="margin-bottom: 24px; display: flex; justify-content: center;">
    <div style="background: #F9FAFB; padding: 16px; border-radius: 8px; border: 2px solid #c41e3a; text-align: center; max-width: 320px; width: 100%;">
      <img src="https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/article_thumbnails/BigBead/heart_anatomy_function_and_blood_circulation_bigbead/1800x1200_heart_anatomy_function_and_blood_circulation_bigbead.jpg" alt="Heart Anatomy Diagram" style="width: 100%; height: auto; max-width: 280px; border-radius: 6px;">
      <p style="margin-top: 8px; font-size: 12px; color: #4B5563; font-style: italic;">Heart Anatomy & Blood Flow</p>
    </div>
  </div>

  <!-- Clinical Symptoms Table -->
  <div style="margin-bottom: 24px; border: 1px solid #D1D5DB; border-radius: 8px; overflow: hidden; overflow-x: auto;">
    <div style="background: linear-gradient(to right, #c41e3a, #8b0000); color: white; padding: 12px 16px; font-weight: bold; font-size: 16px;">
      🩺 CLINICAL SYMPTOMS
    </div>
    <div style="padding: 16px; background: white;">
      <table style="width: 100%; min-width: 500px; border-collapse: collapse; font-size: 13px;">
        <thead>
          <tr style="background: #F3F4F6;">
            <th style="border: 1px solid #D1D5DB; padding: 10px; text-align: left; font-weight: bold; color: #c41e3a;">Symptom</th>
            <th style="border: 1px solid #D1D5DB; padding: 10px; text-align: left; background: #fee2e2; font-weight: bold; color: #c41e3a;">Left-Sided</th>
            <th style="border: 1px solid #D1D5DB; padding: 10px; text-align: left; background: #dbeafe; font-weight: bold; color: #0066cc;">Right-Sided</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #D1D5DB; padding: 10px; font-weight: 600;">Dyspnea</td>
            <td style="border: 1px solid #D1D5DB; padding: 10px; background: #fee2e2;">✓ Common (exertional, orthopnea, PND)</td>
            <td style="border: 1px solid #D1D5DB; padding: 10px; background: #dbeafe;">Less common (unless advanced)</td>
          </tr>
          <tr style="background: #F9FAFB;">
            <td style="border: 1px solid #D1D5DB; padding: 10px; font-weight: 600;">Cough</td>
            <td style="border: 1px solid #D1D5DB; padding: 10px; background: #fee2e2;">✓ Common (frothy, pink-tinged sputum)</td>
            <td style="border: 1px solid #D1D5DB; padding: 10px; background: #dbeafe;">Rare</td>
          </tr>
          <tr>
            <td style="border: 1px solid #D1D5DB; padding: 10px; font-weight: 600;">Edema</td>
            <td style="border: 1px solid #D1D5DB; padding: 10px; background: #fee2e2;">Pulmonary edema</td>
            <td style="border: 1px solid #D1D5DB; padding: 10px; background: #dbeafe;">✓ Peripheral (legs, ankles, sacrum)</td>
          </tr>
          <!-- continue other rows similarly -->
        </tbody>
      </table>
    </div>
  </div>

  <!-- Add remaining sections in similar responsive structure -->

  <!-- Footer -->
  <div style="text-align: center; padding-top: 20px; border-top: 1px solid #D1D5DB; color: #4B5563; font-size: 12px;">
    <p style="margin-bottom: 4px;"><strong>Disclaimer:</strong> This cheat sheet is for educational purposes only. Always consult current clinical guidelines and individual patient factors.</p>
    <p><strong>References:</strong> ACC/AHA Guidelines, ESC Guidelines, CDC Heart Failure Statistics</p>
  </div>

</div>
`;
