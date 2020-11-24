
import promparse from './promparse';

describe("promparse util", () => {

  it("Understands counters", () => {
    const text = promparse(`
# HELP broker_incoming_authorized_total
# TYPE broker_incoming_authorized_total counter
broker_incoming_authorized_total 0.0
# HELP http_server_bytes_read
# TYPE http_server_bytes_read summary
http_server_bytes_read_count 7.0
    `);
    expect(text['broker_incoming_authorized_total']).toHaveProperty('value', 0.0);
  });

});
