/* @ds-bundle: {"format":4,"namespace":"HubLab","components":[{"name":"Button"},{"name":"Eyebrow"},{"name":"Rule"},{"name":"Card"},{"name":"RecordBand"}]} */
(function(){
  var React = window.React, h = React.createElement;
  function cx(){ return Array.prototype.filter.call(arguments, Boolean).join(' '); }
  function Button(p){
    var variant = p.variant || 'primary', Tag = p.href ? 'a' : 'button';
    var props = { className: cx('hl-btn', variant === 'ghost' && 'hl-btn-ghost', p.className), onClick: p.onClick };
    if (p.href) { props.href = p.disabled ? undefined : p.href; if (p.disabled) props['aria-disabled'] = 'true'; }
    else { props.type = p.type || 'button'; props.disabled = !!p.disabled; }
    return h(Tag, props, p.children);
  }
  function Eyebrow(p){
    return h('div', { className: 'hl-eyebrow', style: p.onCream ? { color: 'var(--hl-text-faint-on-cream)' } : undefined }, p.children);
  }
  function Rule(p){
    return h('div', { role: 'presentation', style: { height: 'var(--rule-w)', width: p.short ? 'var(--rule-short)' : 'var(--rule-long)', background: 'var(--hl-gold)' } });
  }
  function Card(p){
    return h('div', { className: 'hl-card' }, h(Rule, { short: true }), h('div', { className: 'hl-card-title' }, p.title), h('div', { className: 'hl-card-body' }, p.children));
  }
  function RecordBand(p){
    return h('section', { className: 'hl-record' },
      h(Eyebrow, { onCream: true }, p.eyebrow == null ? 'Not a roadmap. A record.' : p.eyebrow),
      h('div', { className: 'hl-record-figure' }, p.figure),
      h(Rule, null),
      p.caption ? h('p', { className: 'hl-record-caption' }, p.caption) : null,
      p.body ? h('p', { className: 'hl-record-body' }, p.body) : null);
  }
  window.HubLab = Object.assign(window.HubLab || {}, { Button: Button, Eyebrow: Eyebrow, Rule: Rule, Card: Card, RecordBand: RecordBand });
})();
