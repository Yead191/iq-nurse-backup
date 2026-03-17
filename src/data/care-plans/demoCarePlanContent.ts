// demoCarePlanContent.ts

export const demoCarePlanContent = `
<div style="max-width: 100%; margin: 0 auto; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; ">

  <div class="space-y-8">

    <!-- Assessment -->
    <section>
      <h2 style="font-size: 24px; font-weight: 700; color: #111827; margin-bottom: 16px;">Assessment</h2>
      <div style="background: #FFFFFF; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border: 1px solid #E5E7EB;">
        <h3 style="font-weight: 600; color: #1F2937; margin-bottom: 12px;">Subjective Data</h3>
        <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 20px; color: #374151; line-height: 1.6;">
          <li>Patient complaints and symptoms</li>
          <li>Medical history related to condition</li>
          <li>Current medications and allergies</li>
          <li>Patient's understanding of condition</li>
        </ul>

        <h3 style="font-weight: 600; color: #1F2937; margin-bottom: 12px;">Objective Data</h3>
        <ul style="list-style-type: disc; padding-left: 20px; color: #374151; line-height: 1.6;">
          <li>Vital signs and measurements</li>
          <li>Physical examination findings</li>
          <li>Laboratory and diagnostic test results</li>
          <li>Relevant assessment scales</li>
        </ul>
      </div>
    </section>

    <!-- Nursing Diagnoses -->
    <section>
      <h2 style="font-size: 24px; font-weight: 700; color: #111827; margin-bottom: 16px;">Nursing Diagnoses</h2>
      <div style="background: #FFFFFF; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border: 1px solid #E5E7EB;">
        <ul style="list-style-type: disc; padding-left: 20px; color: #374151; line-height: 1.7; space-y: 12px;">
          <li><strong>Priority Diagnosis:</strong> Related to pathophysiology of the condition</li>
          <li><strong>Risk Diagnoses:</strong> Potential complications and adverse events</li>
          <li><strong>Knowledge Deficit:</strong> Related to disease process and management</li>
          <li><strong>Anxiety:</strong> Related to diagnosis, prognosis, or treatment</li>
        </ul>
      </div>
    </section>

    <!-- Planning & Goals -->
    <section>
      <h2 style="font-size: 24px; font-weight: 700; color: #111827; margin-bottom: 16px;">Planning & Goals</h2>
      <div style="background: #FFFFFF; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border: 1px solid #E5E7EB;">
        
        <h3 style="font-weight: 600; color: #1F2937; margin-bottom: 12px;">Short-Term Goals</h3>
        <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 20px; color: #374151; line-height: 1.6;">
          <li>Patient will demonstrate stabilized vital signs</li>
          <li>Patient will verbalize reduced pain/discomfort</li>
          <li>Patient will participate in care activities</li>
        </ul>

        <h3 style="font-weight: 600; color: #1F2937; margin-bottom: 12px;">Long-Term Goals</h3>
        <ul style="list-style-type: disc; padding-left: 20px; color: #374151; line-height: 1.6;">
          <li>Patient will demonstrate understanding of condition and management</li>
          <li>Patient will maintain optimal functional status</li>
          <li>Patient will prevent complications</li>
          <li>Patient will adhere to treatment plan and follow-up care</li>
        </ul>
      </div>
    </section>

    <!-- Interventions -->
    <section>
      <h2 style="font-size: 24px; font-weight: 700; color: #111827; margin-bottom: 16px;">Interventions</h2>
      <div class="space-y-5">

        <div style="background: #FFFFFF; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border: 1px solid #E5E7EB;">
          <h3 style="color: #2C5F8D; font-weight: 600; margin-bottom: 12px;">Monitoring & Assessment</h3>
          <ul style="list-style-type: disc; padding-left: 20px; color: #374151; line-height: 1.6;">
            <li>Monitor vital signs per protocol</li>
            <li>Assess for signs and symptoms of complications</li>
            <li>Evaluate effectiveness of interventions</li>
            <li>Document findings accurately</li>
          </ul>
        </div>

        <div style="background: #FFFFFF; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border: 1px solid #E5E7EB;">
          <h3 style="color: #2C5F8D; font-weight: 600; margin-bottom: 12px;">Therapeutic Interventions</h3>
          <ul style="list-style-type: disc; padding-left: 20px; color: #374151; line-height: 1.6;">
            <li>Administer medications as prescribed</li>
            <li>Implement comfort measures</li>
            <li>Provide appropriate positioning</li>
            <li>Assist with activities of daily living as needed</li>
          </ul>
        </div>

        <div style="background: #FFFFFF; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border: 1px solid #E5E7EB;">
          <h3 style="color: #2C5F8D; font-weight: 600; margin-bottom: 12px;">Patient Education</h3>
          <ul style="list-style-type: disc; padding-left: 20px; color: #374151; line-height: 1.6;">
            <li>Explain disease process and expected course</li>
            <li>Teach medication administration and side effects</li>
            <li>Demonstrate self-care techniques</li>
            <li>Provide written materials and resources</li>
            <li>Discuss when to seek medical attention</li>
          </ul>
        </div>

        <div style="background: #FFFFFF; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border: 1px solid #E5E7EB;">
          <h3 style="color: #2C5F8D; font-weight: 600; margin-bottom: 12px;">Collaboration</h3>
          <ul style="list-style-type: disc; padding-left: 20px; color: #374151; line-height: 1.6;">
            <li>Consult with interdisciplinary team members</li>
            <li>Coordinate care with specialists as needed</li>
            <li>Facilitate family involvement in care</li>
            <li>Arrange for discharge planning and follow-up</li>
          </ul>
        </div>

        <div style="background: #FFFFFF; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border: 1px solid #E5E7EB;">
          <h3 style="color: #2C5F8D; font-weight: 600; margin-bottom: 12px;">Safety & Prevention</h3>
          <ul style="list-style-type: disc; padding-left: 20px; color: #374151; line-height: 1.6;">
            <li>Implement fall prevention measures</li>
            <li>Maintain infection control precautions</li>
            <li>Ensure safe environment</li>
            <li>Monitor for adverse reactions</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Evaluation -->
    <section>
      <h2 style="font-size: 24px; font-weight: 700; color: #111827; margin-bottom: 16px;">Evaluation</h2>
      <div style="background: #FFFFFF; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border: 1px solid #E5E7EB;">
        <ul style="list-style-type: disc; padding-left: 20px; color: #374151; line-height: 1.7;">
          <li><strong>Goal Achievement:</strong> Assess whether patient met short and long-term goals</li>
          <li><strong>Intervention Effectiveness:</strong> Evaluate success of nursing interventions</li>
          <li><strong>Patient Response:</strong> Document patient's response to care</li>
          <li><strong>Plan Revision:</strong> Modify care plan based on patient progress</li>
          <li><strong>Discharge Readiness:</strong> Assess patient's readiness for next level of care</li>
        </ul>
      </div>
    </section>

    <!-- Key Points to Remember -->
    <section>
      <h2 style="font-size: 24px; font-weight: 700; color: #111827; margin-bottom: 16px;">Key Points to Remember</h2>
      <div style="background: #EFF6FF; border: 1px solid #BFDBFE; border-radius: 12px; padding: 20px;">
        <ul style="list-style-type: disc; padding-left: 20px; color: #1E40AF; line-height: 1.7;">
          <li>Evidence-based practice guidelines for this condition</li>
          <li>Critical signs and symptoms to monitor</li>
          <li>Common medications and nursing considerations</li>
          <li>Potential complications and emergency interventions</li>
          <li>Patient and family teaching priorities</li>
        </ul>
      </div>
    </section>

    <!-- Documentation -->
    <section>
      <h2 style="font-size: 24px; font-weight: 700; color: #111827; margin-bottom: 16px;">Documentation</h2>
      <div style="background: #FFFFFF; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border: 1px solid #E5E7EB;">
        <ul style="list-style-type: disc; padding-left: 20px; color: #374151; line-height: 1.7;">
          <li>Assessment findings and changes in condition</li>
          <li>Interventions performed and patient response</li>
          <li>Patient/family education provided</li>
          <li>Consultations and communications with team</li>
          <li>Discharge instructions and follow-up plans</li>
        </ul>
      </div>
    </section>

  </div>
</div>
`;
