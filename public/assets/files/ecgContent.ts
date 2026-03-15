export const ecgContent = `
  <div class="space-y-8 text-gray-700 leading-relaxed">

    <p class="text-lg">
      Each cardiac cycle produces a predictable ECG waveform pattern that reflects the heart's electrical activity. 
      Mastering waveform components, intervals, and systematic interpretation is essential for rhythm analysis and NCLEX success.
    </p>

    <!-- === Image: Labeled Normal ECG Complex === -->
    <div class="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center text-sm text-gray-600 italic">
      [Insert image here: Fully labeled normal ECG complex — P wave, PR interval, QRS (Q,R,S), ST segment, T wave, QT interval, U wave. Include typical durations and corresponding electrical events.]
    </div>

    <!-- === Image: ECG Paper Grid & Calibration === -->
    <div class="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center text-sm text-gray-600 italic">
      [Insert image here: ECG grid showing small box = 0.04 s / 0.1 mV, large box = 0.20 s / 0.5 mV. Include 3-second and 6-second strip examples.]
    </div>

    <div class="overflow-x-auto">
      <table class="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
        <thead class="bg-gradient-to-r from-blue-50 to-indigo-50">
          <tr>
            <th class="px-5 py-4 text-left font-semibold text-blue-900 uppercase tracking-wide text-xs">Component</th>
            <th class="px-5 py-4 text-left font-semibold text-blue-900 uppercase tracking-wide text-xs">Normal Duration / Amplitude</th>
            <th class="px-5 py-4 text-left font-semibold text-blue-900 uppercase tracking-wide text-xs">Represents</th>
            <th class="px-5 py-4 text-left font-semibold text-blue-900 uppercase tracking-wide text-xs">Key Clinical / NCLEX Notes</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 bg-white">
          <tr>
            <td class="px-5 py-4 font-bold text-gray-900">P wave</td>
            <td class="px-5 py-4">≤ 0.12 s<br>< 2.5 mm tall</td>
            <td class="px-5 py-4">Atrial depolarization (SA → atria)</td>
            <td class="px-5 py-4">Upright in II • one P before each QRS • absent = AFib • sawtooth = flutter • inverted = retrograde</td>
          </tr>
          <tr>
            <td class="px-5 py-4 font-bold text-gray-900">PR interval</td>
            <td class="px-5 py-4">0.12 – 0.20 s (3–5 small boxes)</td>
            <td class="px-5 py-4">AV conduction time (atria → AV node → His bundle)</td>
            <td class="px-5 py-4">> 0.20 s = 1° AV block<br>< 0.12 s = pre-excitation (WPW)</td>
          </tr>
          <tr>
            <td class="px-5 py-4 font-bold text-gray-900">QRS complex</td>
            <td class="px-5 py-4">0.06 – 0.12 s</td>
            <td class="px-5 py-4">Ventricular depolarization</td>
            <td class="px-5 py-4">≤ 0.12 s = supraventricular<br>> 0.12 s = ventricular / BBB / aberrant</td>
          </tr>
          <tr>
            <td class="px-5 py-4 font-bold text-gray-900">ST segment</td>
            <td class="px-5 py-4">isoelectric (flat)</td>
            <td class="px-5 py-4">Ventricles depolarized (plateau phase)</td>
            <td class="px-5 py-4">↑ = STEMI, pericarditis<br>↓ = ischemia, digoxin</td>
          </tr>
          <tr>
            <td class="px-5 py-4 font-bold text-gray-900">T wave</td>
            <td class="px-5 py-4">asymmetric, concordant with QRS</td>
            <td class="px-5 py-4">Ventricular repolarization</td>
            <td class="px-5 py-4">Peaked = ↑K⁺<br>Inverted/flat = ischemia, ↓K⁺</td>
          </tr>
          <tr>
            <td class="px-5 py-4 font-bold text-gray-900">QT interval</td>
            <td class="px-5 py-4">0.36–0.44 s (rate-dependent → use QTc)</td>
            <td class="px-5 py-4">Ventricular depolarization + repolarization</td>
            <td class="px-5 py-4">QTc > 0.50 s = torsades risk (drugs, ↓K⁺, ↓Mg²⁺, ↓Ca²⁺)</td>
          </tr>
          <tr>
            <td class="px-5 py-4 font-bold text-gray-900">U wave</td>
            <td class="px-5 py-4">small, after T (often absent)</td>
            <td class="px-5 py-4">Purkinje or papillary repolarization</td>
            <td class="px-5 py-4">Prominent = hypokalemia (classic NCLEX association)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
      <div class="bg-gray-50 rounded-xl p-6 border border-gray-200">
        <h4 class="font-bold text-gray-800 mb-3">ECG Paper & Calibration</h4>
        <div class="space-y-3 text-sm">
          <p><strong>Time (horizontal):</strong> 1 small box = 0.04 s • 1 large box = 0.20 s • 5 large = 1 s</p>
          <p><strong>Voltage (vertical):</strong> 1 small box = 0.1 mV • 1 large box = 0.5 mV</p>
        </div>
      </div>

      <div class="bg-gray-50 rounded-xl p-6 border border-gray-200">
        <h4 class="font-bold text-gray-800 mb-3">Heart Rate Quick Methods</h4>
        <div class="space-y-3 text-sm">
          <p><strong>Regular rhythm (300 method):</strong> 300 ÷ number of large boxes between R–R</p>
          <p class="text-blue-700 font-medium">300 – 150 – 100 – 75 – 60 – 50 (1 to 6 large boxes)</p>
          <p><strong>Irregular rhythm (6-sec method):</strong> R waves in 30 large boxes × 10</p>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 rounded-xl p-6 md:p-8">
      <h3 class="text-lg font-bold text-blue-900 mb-4">5-Step Systematic Interpretation</h3>
      <ol class="list-decimal list-inside space-y-2 text-blue-800 marker:font-bold">
        <li><strong>Rate</strong> — regular (300 method) or irregular (6-sec method)</li>
        <li><strong>Rhythm</strong> — regular or irregular? (measure R–R intervals)</li>
        <li><strong>P waves</strong> — present? upright in II? 1:1 with QRS? consistent shape?</li>
        <li><strong>PR interval</strong> — 0.12–0.20 s? constant or changing?</li>
        <li><strong>QRS duration</strong> — narrow (≤0.12 s) or wide (>0.12 s)?</li>
      </ol>
    </div>

    <!-- NCLEX High-Yield Alert Box -->
    <div class="bg-amber-50 border border-amber-200 rounded-xl p-6 shadow-sm">
      <div class="flex items-center gap-3 mb-4">
        <div class="text-2xl">⚠️</div>
        <h4 class="text-lg font-bold text-amber-800">NCLEX Must-Know ECG Pearls</h4>
      </div>
      <ul class="space-y-2.5 text-sm text-amber-900 list-disc pl-5 marker:text-amber-600">
        <li>PR > 0.20 s → 1° AV block</li>
        <li>PR < 0.12 s → pre-excitation (WPW syndrome)</li>
        <li>QRS > 0.12 s → bundle branch block or ventricular rhythm</li>
        <li>ST elevation → acute STEMI until proven otherwise</li>
        <li>Peaked T waves → hyperkalemia (earliest ECG change)</li>
        <li>Prominent U waves → hypokalemia (classic association)</li>
        <li>QTc > 0.50 s → high risk of torsades de pointes</li>
        <li>Use the 5-step method on EVERY ECG strip</li>
      </ul>
    </div>

  </div>
`;
