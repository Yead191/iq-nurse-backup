export const dosageNoteHTML = `
<!-- Medication Calculations Quick Reference Card -->
<div style=" margin: 2rem auto; font-family: system-ui, -apple-system, sans-serif; background: white; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); overflow: hidden; border: 1px solid #e5e7eb;">

  <!-- Header -->
  <div style="background: linear-gradient(135deg, #2c5f8d, #1e4266); color: white; padding: 1.5rem 2rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
    <div>
      <h2 style="margin: 0; font-size: 1.6rem; font-weight: 800; letter-spacing: -0.025em;">
        Medication Dosage Calculations
      </h2>
      <p style="margin: 0.25rem 0 0; opacity: 0.9; font-size: 0.95rem;">
        NCLEX / Nursing Fundamentals Reference
      </p>
    </div>
    <div style="background: rgba(255,255,255,0.2); padding: 0.5rem 1rem; border-radius: 9999px; font-size: 0.85rem; font-weight: 600;">
      High-Yield Summary
    </div>
  </div>

  <!-- Content -->
  <div style="padding: 2rem;">

    <!-- Key Concepts -->
    <div style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.35rem; font-weight: 700; color: #2c5f8d; margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.75rem;">
        <span style="font-size: 1.5rem;">💡</span> Key Concepts
      </h3>
      <div style="display: grid; gap: 1.25rem;">
        <div style="border-left: 4px solid #2c5f8d; padding-left: 1.25rem; padding-top: 0.5rem; padding-bottom: 0.5rem;">
          <h4 style="font-weight: 700; color: #374151; margin-bottom: 0.35rem; font-size: 1.05rem;">Desired Over Have Method</h4>
          <p style="color: #4b5563; line-height: 1.5; font-size: 0.95rem;">
            Most common method • Desired dose ÷ Available dose × Quantity = Amount to give
          </p>
        </div>
        <div style="border-left: 4px solid #2c5f8d; padding-left: 1.25rem; padding-top: 0.5rem; padding-bottom: 0.5rem;">
          <h4 style="font-weight: 700; color: #374151; margin-bottom: 0.35rem; font-size: 1.05rem;">Units Must Match</h4>
          <p style="color: #4b5563; line-height: 1.5; font-size: 0.95rem;">
            Convert units before calculating (mg → mcg ×1000, g → mg ×1000, lb → kg ÷2.2)
          </p>
        </div>
        <div style="border-left: 4px solid #2c5f8d; padding-left: 1.25rem; padding-top: 0.5rem; padding-bottom: 0.5rem;">
          <h4 style="font-weight: 700; color: #374151; margin-bottom: 0.35rem; font-size: 1.05rem;">Pediatric / Weight-Based</h4>
          <p style="color: #4b5563; line-height: 1.5; font-size: 0.95rem;">
            Always calculate safe range • Check mg/kg/day vs mg/kg/dose
          </p>
        </div>
      </div>
    </div>

    <!-- Essential Formulas -->
    <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 12px; padding: 1.75rem; margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.35rem; font-weight: 700; color: #1e40af; margin-bottom: 1.25rem;">Core Formulas</h3>
      <div style="display: grid; gap: 1.25rem;">
        <div style="background: white; padding: 1.25rem; border-radius: 10px; border: 1px solid #dbeafe;">
          <div style="font-weight: 700; color: #1e40af; margin-bottom: 0.5rem;">Basic Dosage</div>
          <div style="font-family: ui-monospace, monospace; background: #f0f9ff; padding: 0.85rem; border-radius: 8px; font-size: 0.95rem; color: #1e40af; overflow-x: auto;">
            Desired ÷ Available × Quantity = to give
          </div>
        </div>
        <div style="background: white; padding: 1.25rem; border-radius: 10px; border: 1px solid #dbeafe;">
          <div style="font-weight: 700; color: #1e40af; margin-bottom: 0.5rem;">IV Drip Rate (gtt/min)</div>
          <div style="font-family: ui-monospace, monospace; background: #f0f9ff; padding: 0.85rem; border-radius: 8px; font-size: 0.95rem; color: #1e40af;">
            (Volume × Drop factor) ÷ Time (min) = gtt/min
          </div>
        </div>
        <div style="background: white; padding: 1.25rem; border-radius: 10px; border: 1px solid #dbeafe;">
          <div style="font-weight: 700; color: #1e40af; margin-bottom: 0.5rem;">Weight-based dose</div>
          <div style="font-family: ui-monospace, monospace; background: #f0f9ff; padding: 0.85rem; border-radius: 8px; font-size: 0.95rem; color: #1e40af;">
            Weight (kg) × mg/kg = dose
          </div>
        </div>
      </div>
    </div>

    <!-- Safety & Memory Points -->
    <div class="responsive-grid">
      <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; padding: 1.5rem;">
        <h4 style="font-weight: 700; color: #b91c1c; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 1.3rem;">⚠️</span> Never Forget
        </h4>
        <ul style="margin: 0; padding-left: 1.25rem; color: #4b5563; font-size: 0.95rem; line-height: 1.6; list-style-type: disc;">
          <li>Insulin = HIGH ALERT medication</li>
          <li>Never use "U" for units (looks like zero)</li>
          <li>Always do second check on pediatric doses</li>
          <li>Leading zero = good (0.5), trailing zero = bad (5.0)</li>
        </ul>
      </div>

      <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 1.5rem;">
        <h4 style="font-weight: 700; color: #15803d; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 1.3rem;">✓</span> Pro Tips
        </h4>
        <ul style="margin: 0; padding-left: 1.25rem; color: #166534; font-size: 0.95rem; line-height: 1.6; list-style-type: disc;">
          <li>Clear before cloudy (Regular → NPH)</li>
          <li>Microdrip 60 gtt = mL/hr ≈ gtt/min</li>
          <li>Double-check decimal places in peds</li>
          <li>Label all reconstitutions clearly</li>
        </ul>
      </div>
    </div>

  </div>

  <!-- Footer -->
  <div style="background: #f3f4f6; padding: 1rem 2rem; text-align: right; font-size: 0.9rem; color: #6b7280; border-top: 1px solid #e5e7eb;">
    Quick Reference • Dosage Calculations • Nursing
  </div>

  <style>
  .responsive-grid{
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 768px){
    .responsive-grid{
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
</div>`;
