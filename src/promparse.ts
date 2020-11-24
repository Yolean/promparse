
interface Metric {
  value: number
}

interface Metrics {
  [propName: string]: Metric
}

const config = {
  split: /\s*\n\s*/,
  metric: /^([^#\s]+)\s+(\S+)$/,
};

const parse = function(metrics: Metrics, line: string): Metrics {
  const m = config.metric.exec(line);
  if (m) {
    const value = parseFloat(m[2]);
    metrics[m[1]] = { value };
  }
  return metrics;
};

export default function(prometheusTextFormat: string): Metrics {
  return prometheusTextFormat.split(config.split).reduce(parse, {});
};
